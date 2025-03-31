import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const AssessmentGraph = () => {
  const { user } = useAuth();
  const [data, setData] = useState(Array(10).fill(0));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

  useEffect(() => {
    const fetchAssessmentData = async () => {
      if (user?.userId && user?.role) {
        try {
          const response = await axios.post(
            `${apiUrl}/api/scoring/get-user-score`,
            {
              user_id: user.userId,
              panel_name: "psu",
              role: user.role,
              lang: "en",
            }
          );

          if (response.data.results?.length > 0) {
            const sortedResults = response.data.results.sort(
              (a, b) => new Date(b.exam_date) - new Date(a.exam_date)
            );
            const latestResult = sortedResults[0];

            const scores = [
              latestResult.time_management || 0,
              latestResult.work_life_balance || 0,
              latestResult.stress || 0,
              latestResult.anxiety || 0,
              latestResult.depression || 0,
              latestResult.coping_mechanisms || 0,
              latestResult.health_issues || 0,
              latestResult.financial_stress || 0,
              latestResult.gender_equality || 0,
              latestResult.upskilling || 0,
            ].map(Number);

            setData(scores);
          } else {
            setError(
              "No assessment data found. Please complete an assessment."
            );
          }
        } catch (err) {
          console.error("Error fetching assessment data:", err);
          setError("Error fetching assessment data. Please try again later.");
        }
      } else {
        setError(
          <div className="text-center text-red-500">
            <p>
              No assessment data found. Please take the assessment to view your
              scores.
            </p>
            <button
              onClick={() => (window.location.href = "/language")}
              className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
            >
              Take Assessment
            </button>
          </div>
        );
      }
      setLoading(false);
    };

    fetchAssessmentData();
  }, [user]);

  const options = {
    chart: { type: "bar", height: 350 },
    title: { text: "PSU Assessment", align: "center" },
    xaxis: {
      categories: [
        "Time Management",
        "Work-life balance",
        "Stress Management",
        "Anxiety",
        "Depression",
        "Coping Mechanism",
        "Physical health issue",
        "Financial stress",
        "Gender Equality",
        "Up-skilling & career growth",
      ],
    },
    yaxis: {
      title: { text: "Score (0 to 100)" },
      min: 0,
      max: 100,
      tickAmount: 5,
    },
  };

  const series = [{ name: "Assessment Score", data }];

  if (loading)
    return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
        PSU Assessment Scores
      </h2>
      <div className="flex justify-center">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default AssessmentGraph;
