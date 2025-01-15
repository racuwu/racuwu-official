import React from "react";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const LushProjectPage = () => {
  const historyTimeline = [
    { date: "2020-01-01", event: "Project Initiation" },
    { date: "2020-06-15", event: "First Milestone Achieved" },
    { date: "2021-03-10", event: "Second Milestone Achieved" },
    { date: "2022-08-25", event: "Third Milestone Achieved" },
  ];

  const currentTimeline = [
    { date: "2023-01-01", milestone: "Current Milestone 1" },
    { date: "2023-04-15", milestone: "Current Milestone 2" },
    { date: "2023-07-10", milestone: "Current Milestone 3" },
    { date: "2023-10-25", milestone: "Current Milestone 4" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate__animated animate__fadeInDown mt-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">
            Lush Project
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Welcome to the Lush Project page. Here you can find information
            about the project's history and current timeline.
          </p>
        </div>

        {/* History of Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            History of Timeline
          </h2>
          <ul className="space-y-4">
            {historyTimeline.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <FaCalendarAlt className="text-pink-600 w-6 h-6" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.date}
                  </p>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Project Timeline Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Current Project Timeline
          </h2>
          <ul className="space-y-4">
            {currentTimeline.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <FaCheckCircle className="text-green-600 w-6 h-6" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.date}
                  </p>
                  <p className="text-gray-600">{item.milestone}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LushProjectPage;
