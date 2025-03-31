
import React from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";

const Instructions = () => {
  const navigate = useNavigate();

  return (
    <div className="p-1">
      {/* Package Section */}
      <h1 className="text-2xl text-gray-400 font-bold mb-4">Instructions</h1>
      <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 ">
        <h1 className="text-xl font-bold text-[#f1b963] mb-6">
          Please read instructions
        </h1>
        <hr className="my-4 border-gray-300" />
        <div className="p-6 flex flex-col items-center justify-center">
          <div className="bg-white border border-gray-300 shadow-md rounded-lg p-8 max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Info className="w-8 h-8 text-blue-600 mr-2" /> Instructions
            </h1>
            <p className="text-gray-600 mb-4">
              Please carefully read the instructions before proceeding with the
              assessment.
            </p>
            {/* Instruction Box */}
            <div className="bg-blue-100 border border-blue-300 text-blue-700 p-6 rounded-lg mb-6 text-left w-full flex items-start">
              {/* <Info className="w-6 h-6 text-blue-600 mr-2" /> */}
              <div>
                <p>
                  In this test, you'll encounter a series of statements designed
                  to reflect everyday experiences.
                </p>
                <p>
                  There are 100 statements in total, covering a wide range of
                  topics. For each statement, you'll be presented with five
                  options, and your task is to choose the one that most closely
                  aligns with your response or perspective.
                </p>
                <p>
                  It's important to note that there are no correct or incorrect
                  answers.
                </p>
                <p>
                  Your responses are completely confidential, meaning they will
                  be kept private and used exclusively for academic purposes.
                </p>
                <p>
                  Feel free to share your thoughts openly and honestly as you
                  progress through the test.
                </p>
              </div>
            </div>

            {/* Out of Box Message */}
            <p className="text-lg font-semibold text-gray-800 mb-4">
              I am ready to begin.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 justify-center">
              <button
                onClick={() => navigate("/language")}
                className="px-6 py-2 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 transition-all"
              >
                Back
              </button>
              <button
                onClick={() => navigate("/assessment")}
                className="px-6 py-2 bg-yellow-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;