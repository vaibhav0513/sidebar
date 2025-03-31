// import { CheckCircle, Loader, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import AssessmentGraph from "./AssessmentGraph";
import {
  CheckCircle,
  FileText,
  // ClipboardList,
  CalendarCheck,
  Package,
  Award,
} from "lucide-react";
import { UserCircle } from "lucide-react";
import theme from "../context/Theme"; 

export default function Dashboard() {
  const processSteps = [
    {
      step: "Select Package",
      //   status: "Completed",
      icon: <CheckCircle size={24} className="text-white " />,
    },
    {
      step: "Make Payment",
      //   status: "In Progress",
      icon: <Package size={24} className="text-white " />,
    },
    {
      step: "Give Assessment",
      //   status: "Pending",
      icon: <FileText size={24} className="text-white" />,
    },
    {
      step: "Detailed Report",
      //   status: "Pending",
      icon: <FileText size={24} className="text-white" />,
    },
    {
      step: "Book Counselling",
      //   status: "Pending",
      icon: <CalendarCheck size={24} className="text-white" />,
    },
  ];
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData?.first_name && userData?.last_name) {
      setUserName(`${userData.first_name} ${userData.last_name}`);
    } else if (userData?.first_name) {
      setUserName(userData.first_name);
    }
  }, []);

  return (
    <div className="p-1">
      <h1 className="text-2xl text-gray-400 font-bold mb-4">Dashboard</h1>

      {/* Profile Card */}
      <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-6">
        {/* <h1 className="text-xl text-#f1b963 font-bold mb-4">Profile</h1> */}
        <h1 className="text-xl text-[#f1b963] font-bold mb-4" >
          Welcome to Peak performance student
        </h1>

        <hr className="my-4 border-gray-300" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4">
          {/* Left Section: User Greeting & Instructions */}
          <div className="md:w-3/5">
            {/* <h2 className="text-xl text-[#83580b] font-semibold">
              Dear {userName || "Student"},
            </h2> */}
            <p className="mt-2 text-gray-700">
              Please carefully review the following instructions. Completing
              this test will require a minimum of one hour of your time. At
              Ollato, we prioritize your well-being as a fundamental component.
              Field experts have meticulously crafted our assessment test to
              offer you a precise evaluation of your strengths and weaknesses
              status. Upon finishing the test, you will receive a comprehensive
              17-page report. Following this, you can schedule a session for
              expert guidance.
            </p>
          </div>

          {/* Right Section: Expert Profile Card */}
          <div className="mt-6 mr-4 md:mt-0 md:w-2/5 bg-white shadow-lg rounded-xl p-5 flex items-center space-x-5 border">
            {/* Profile Image */}
            <UserCircle size={60} className="text-yellow-600" />

            {/* Expert Details */}
            <div>
              <h2 className="text-xl text-[#83580b] font-semibold">
                Dear {userName || "Student"},
              </h2>
              {/* <p className="text-sm text-gray-500">
                Certified Assessment Expert
              </p> */}

              <p className="text-gray-600 text-sm mt-1">
                Completed Assessments
              </p>

              {/* Short Bio */}
              <p className="text-xs text-gray-600 mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                laboriosam.
              </p>

              {/* Profile Button */}
              <button className="mt-3 px-4 py-1.5 text-sm bg-yellow-700 text-white rounded-md hover:bg-yellow-800 transition">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Process UI */}
      <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
        <h1 className="text-xl text-[#f1b963] font-bold mb-4 ">Progress</h1>
        <hr className="my-4 border-gray-300" />

        {/* Process Steps as Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-100 p-5 rounded-lg shadow-md flex flex-col items-center text-center space-y-3 
        hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step Number (Top-Left Corner) */}
              <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {index + 1}
              </span>

              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full shadow-md">
                {item.icon}
              </div>
              <span className="text-base font-semibold text-gray-700">
                {item.step}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-300 shadow-md rounded-lg mt-7 p-6">
        {/* <div className="flex items-center justify-between border-b pb-3"> */}
        <h1 className="text-xl text-[#f1b963] font-semibold mb-4">Bar Graph</h1>
        <hr className="my-4 border-gray-300" />
        {/* </div> */}
        <div className="mt-4">
          <AssessmentGraph />
        </div>
      </div>
    </div>
  );
}
