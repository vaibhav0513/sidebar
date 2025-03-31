import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(10);
  const [timeRemaining, setTimeRemaining] = useState(3600); // Timer in seconds (1 hour)

  const panel_name = "pps";

  const userData = JSON.parse(localStorage.getItem("user"));
  const role = userData ? userData.role : null;
  const userId = userData ? userData.user_id : null;
  const userName = userData ? userData.first_name : "";
  const selectedLanguage = userData ? userData.selectedLanguage : "en";
  const topRef = useRef(null);
  const [isAssessmentInProgress, setIsAssessmentInProgress] = useState(false);
  const [assessment_id, setAssessmentId] = useState(null); // ✅ Store in state
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // Backend URL link
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (role && selectedLanguage) {
      let id = null; // Temporary variable

      if (role.toLowerCase() === "constable" && selectedLanguage === "en") {
        id = 1;
      } else if (role.toLowerCase() === "senior" && selectedLanguage === "en") {
        id = 2;
      } else if (
        role.toLowerCase() === "constable" &&
        selectedLanguage === "mr"
      ) {
        id = 6;
      } else if (role.toLowerCase() === "senior" && selectedLanguage === "mr") {
        id = 7;
      }

      // console.log("Setting assessment_id:", id);
      setAssessmentId(id); // ✅ Update state
    }
  }, [role, selectedLanguage]); // ✅ Runs when role or language updates

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isAssessmentInProgress) {
        const message =
          "You have unsaved progress. Are you sure you want to leave?";
        event.returnValue = message; // Standard for most browsers
        return message; // Some browsers like Firefox require returning the message
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isAssessmentInProgress]);

  const fetchUrl = `${apiUrl}/api/assessment/${panel_name}/${role}/${selectedLanguage}`;

  const submitUrl = `${apiUrl}/api/scoring/submit`;

  // Fetch questions on component mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(fetchUrl);
        setQuestions(response?.data?.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [fetchUrl]);

  // Load saved answers
  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    setAnswers(savedAnswers);
  }, []);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit(); // Submit assessment when time is up
          toast.error("Time is up! Your assessment has been submitted.");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const handleOptionChange = (questionIndex, optionLabel) => {
    const updatedAnswers = { ...answers, [questionIndex]: optionLabel };
    setAnswers(updatedAnswers);
    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  const handleSubmit = async () => {
    if (!userId) {
      toast.error("User not found. Please log in again.");
      return;
    }
    const formattedAnswers = Object.keys(answers)
      .sort((a, b) => a - b) // Ensure order is maintained
      .map((key) => ({ selected_option: answers[key] }));
    const payload = {
      panel_name,
      role,
      selectedLanguage,
      assessment_id,
      user_id: userId,
      user_name: userName,
      answers: formattedAnswers,
    };
    console.log("Final assessment_id before submitting:", assessment_id);
    console.log("This is payload: ", payload);
    console.log(answers);
    try {
      await axios.post(submitUrl, payload);
      console.log("answers : ", formattedAnswers);
      console.log(payload);

      localStorage.removeItem("answers");
      toast.success("Assessment submitted successfully!");
      navigate("/assessment-submitted");
    } catch (error) {
      console.error("Error submitting answers:", error);
      toast.error("Error submitting assessment. Please try again.");
    }
  };

  // Ensure questions is an array before using .slice()
  const totalQuestions = Array.isArray(questions) ? questions.length : 0;
  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = Array.isArray(questions)
    ? questions.slice(startIndex, endIndex)
    : [];

  const handleNext = () => {
    if (currentPage < Math.floor(totalQuestions / questionsPerPage)) {
      const allAnswered = currentQuestions.every(
        (_, index) => answers[startIndex + index] !== undefined
      );
      if (allAnswered) {
        setCurrentPage(currentPage + 1);
      } else {
        toast.error(
          "Please answer all questions on this page before proceeding."
        );
      }
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const answeredCount = Object.keys(answers).length;
  const progressPercentage = Math.floor((answeredCount / totalQuestions) * 100);

  useEffect(() => {
    const updateQuestionsPerPage = () => {
      if (window.innerWidth <= 1024) {
        setQuestionsPerPage(10); // 10 questions for mobile
      } else {
        setQuestionsPerPage(10); // 1 question for larger screens
      }
    };

    // Set the initial value
    updateQuestionsPerPage();

    // Update on resize
    window.addEventListener("resize", updateQuestionsPerPage);
    return () => window.removeEventListener("resize", updateQuestionsPerPage);
  }, []);

  const handleBack = () => {
    if (isAssessmentInProgress) {
      const confirmLeave = window.confirm(
        "You have unsaved progress. Are you sure you want to leave?"
      );
      if (confirmLeave) {
        navigate("/language");
      }
    } else {
      navigate("/language");
    }
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollTo({
        top: 0,
        behavior: "smooth", // Enables smooth scrolling
      });
    }
  };

  // Time format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="flex-1 flex flex-row">
        <div className="flex-1 p-5 bg-gray-100 pt-5  2xl:ml-32 relative">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => handleBack()}
              className="bg-yellow-600 text-white w-20 hover:bg-yellow-700 text-lg font-medium flex justify-center items-center rounded-lg px-3 py-2"
            >
              Back
            </button>
            <h1 className="text-3xl font-semibold text-[#f1b963] flex-1 text-center">
              Assessment Questions
            </h1>
          </div>

          {/* Scrollable Questions Container */}
          <div
            ref={topRef}
            className="max-h-[calc(100vh-200px)] overflow-y-auto p-6 rounded-lg shadow-lg mt-4 scrollbar-thin bg-white"
          >
            {/* Questions List */}
            {Array.isArray(currentQuestions) && currentQuestions.length > 0 ? (
              currentQuestions.map((question, index) => (
                <div
                  key={index}
                  className="mb-6 p-6 border border-gray-300 rounded-lg shadow-sm 2xl:h-80"
                >
                  <h3 className="custom1 text-lg font-medium mb-4 2xl:text-3xl text-blue-900 rounded-md py-3 px-4 text-left 2xl:p-6 bg-customBlue">
                    {`Q${startIndex + index + 1}: ${question.questions}`}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-6">
                    {/* Options */}
                    {["1", "2", "3", "4"].map((option) => {
                      const optionText =
                        question[`opt_${option}`] || "Option not available";
                      return (
                        <label
                          key={option}
                          className={`custom-radio-label 2xl:text-3xl flex cursor-pointer border border-blue-300 items-center my-2 text-lg font-medium py-3 px-6 rounded-lg shadow transition 2xl:py-4 ${
                            answers[startIndex + index] === option
                              ? "text-blue-900"
                              : "text-gray-700 hover:bg-gray-200"
                          }`}
                          style={{
                            backgroundColor:
                              answers[startIndex + index] === option
                                ? "#BFDBFE"
                                : "#fff",
                          }}
                        >
                          <input
                            type="radio"
                            name={`question_${startIndex + index}`}
                            value={option}
                            checked={answers[startIndex + index] === option}
                            onChange={() =>
                              handleOptionChange(startIndex + index, option)
                            }
                            className="custom-radio-input 2xl:h-8 2xl:w-8"
                          />
                          <span className="flex items-center">
                            {option}) {optionText}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No questions available
              </p>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6 gap-4  2xl:gap-8 2xl:mb-20">
              <button
                onClick={() => {
                  handlePrevious();
                  scrollToTop();
                }}
                disabled={currentPage === 0}
                className="px-6 py-2 2xl:py-4 bg-gray-300 text-lg 2xl:text-2xl text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (
                    currentPage ===
                    Math.floor(totalQuestions / questionsPerPage) - 1
                  ) {
                    handleSubmit();
                  } else {
                    handleNext();
                    scrollToTop();
                  }
                }}
                className="px-6 py-2 2xl:py-4 bg-yellow-600 text-lg 2xl:text-2xl text-white rounded hover:bg-yellow-700 transition"
              >
                {currentPage ===
                Math.floor(totalQuestions / questionsPerPage) - 1
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className="w-[200px] h-full customize p-4 sticky top-0 right-0 flex flex-col items-center  lg:flex lg:w-[250px] 2xl:w-[350px]"
          style={{
            background: "rgb(243 244 246 / var(--tw-bg-opacity, 1))",
          }}
        >
          {/* Circular Progress */}
          <div className="relative w-32 h-32 mt-20 2xl:w-52 2xl:h-52 2xl:mt-32">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-yellow-600"
                strokeWidth="3"
                strokeDasharray={`${progressPercentage}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-3xl font-bold text-yellow-600">
                {progressPercentage}%
              </span>
              <p className="text-sm text-yellow-900 2xl:text-xl">Progress</p>
            </div>
          </div>

          {/* Question Navigation */}
          <h2 className="text-xl font-bold text-center my-4 text-yellow-900">
            Question Navigation
          </h2>
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 bg-green-500 rounded-full border-2 border-green-600"></span>
              <span className="text-xs font-medium 2xl:text-lg">Attempted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 bg-red-500 rounded-full border-2 border-red-600"></span>
              <span className="text-xs font-medium 2xl:text-lg">
                Not Attempted
              </span>
            </div>
          </div>

          {/* Question Buttons */}
          <div className="p-2 overflow-y-auto h-[calc(100%-220px)] scrollbar-thin w-full">
            <div className="grid grid-cols-4 gap-2 lg:grid-cols-5">
              {Array.isArray(questions) &&
                questions.map((_, index) => {
                  const isSelected = answers[index];
                  return (
                    <button
                      key={index}
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-sm 2xl:text-lg font-bold 2xl:w-12 2xl:h-12 ${
                        isSelected
                          ? "bg-green-500 text-white border-2 border-green-600"
                          : "bg-red-500 text-white border-2 border-red-600"
                      }`}
                      onClick={() => {
                        const targetPage = Math.floor(index / questionsPerPage);
                        setCurrentPage(targetPage);
                      }}
                    >
                      {index + 1}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
