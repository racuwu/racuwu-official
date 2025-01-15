import React from "react";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";


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
            
          </ul>
        </div>

        {/* Current Project Timeline Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Current Project Timeline
          </h2>
          <ul className="space-y-4">
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LushProjectPage;
