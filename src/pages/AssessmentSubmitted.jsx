import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AssessmentSubmitted = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = () => {
    navigate("/summary");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Main Content */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 md:p-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Assessment Submitted Successfully, {user.name}! 🎊
        </h1>
        <p className="text-gray-600 mb-5">
          Thank you for completing the assessment. Click below to view your report.
        </p>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          View Summary Report
        </button>
      </div>
    </div>
  );
};

export default AssessmentSubmitted;
