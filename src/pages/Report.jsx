import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Report = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const apiUrl3 = import.meta.env.VITE_APP_API_BASE_URL;
  const userId = userData?.userId || "";
  const role = userData?.role || "";
  const apiUrl = `${apiUrl3}/api/scoring/get-user-score`;
  const [language, setLanguage] = useState("");
  const [tab, setTab] = useState("en");
  const [reportHistory, setReportHistory] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    navigate(`/${selectedLanguage}Report`);
  };

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.post(apiUrl, {
          user_id: userId,
          panel_name: "psu",
          role: role,
          lang: "en",
        });

        if (response.data && response.data.results) {
          const transformedData = response.data.results.map(
            (report, index) => ({
              id: index + 1,
              exam_date: report.exam_date,
            })
          );

          setReportHistory(transformedData);
          setFilteredReports(transformedData);
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
        setReportHistory([]);
      }
    };

    fetchReportData();
  }, [userId, role]);

  const renderTable = () => {
    if (!Array.isArray(filteredReports) || filteredReports.length === 0) {
      return (
        <p className="text-gray-500">No reports available for this language.</p>
      );
    }
    return (
      <table className="w-full border border-gray-200 rounded-md shadow-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4">Sr.No.</th>
            <th className="py-2 px-4">Report</th>
            <th className="py-2 px-4">Exam Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4 text-center">{index + 1}</td>
              <td className="py-2 px-4 text-blue-600">
                <a
                  href="/EnglishReport"
                  className="hover:underline flex items-center"
                >
                  <i className="fas fa-file-alt mr-2"></i> Report
                </a>
              </td>
              <td className="py-2 px-4 text-center">
                {item.exam_date
                  ? new Date(item.exam_date).toLocaleDateString("en-GB")
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="p-1">
      <h1 className="text-2xl text-gray-400 font-bold mb-4">Report</h1>
      {/* Profile Card */}
      <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-6">
        {/* <h1 className="text-xl text-#f1b963 font-bold mb-4">Profile</h1> */}
        <h1 className="text-xl text-[#f1b963] font-bold mb-4">Detailed Report</h1>

        <hr className="my-4 border-gray-300" />
        {/* <div className="container mx-auto p-6"> */}
          {/* <h2 className="text-2xl font-semibold mb-4">Report</h2> */}
          <div className="bg-blue-100 text-yellow-800 p-3 rounded-md mb-4">
            <strong>Note:</strong> Please select a language to view your report
            and download it.
          </div>

          <div className="bg-white border border-gray-300  p-4 shadow-md rounded-md mb-4">
            <div className="flex justify-between items-center">
              <h6 className="text-lg  text-gray-700">
                Select Language
              </h6>
              <select
                className="border rounded-md p-2 text-gray-700"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="" disabled>
                  Choose Language
                </option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300">
        <h6 className="text-xl  text-gray-800 mb-4">Report History</h6>
        
        <div className="border-b flex space-x-6 mb-4">
          <button
            className={`px-6 py-2 rounded-t-lg  transition ${tab === "en" ? "bg-yellow-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => {
              setTab("en");
              setFilteredReports(reportHistory);
            }}
          >
            English
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg  transition ${tab === "mr" ? "bg-yellow-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => {
              setTab("mr");
              setFilteredReports([]);
            }}
          >
            मराठी
          </button>
        </div>

        <div>{renderTable()}</div>
      </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Report;
