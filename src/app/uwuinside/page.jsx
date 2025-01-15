import React from 'react';

const PodcastDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16 animate__animated animate__fadeInDown mt-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">
            UWU Inside Podcast
          </h1>
        </div>

        {/* Podcast Details Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About the Podcast</h2>
          <p className="text-gray-600 text-lg">
            The UWU Inside Podcast is about Uva Wellassa University. It covers various topics related to the university, including academic programs, student life, events, and more. Join us to stay updated and connected with the UWU community.
          </p>
        </div>

        {/* Time Schedule Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Time Schedule for Recordings</h2>
          <p className="text-gray-600 text-lg">
            The next recording is scheduled for 19th January 2025. Below are the details:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 text-lg">
            <li>Timeslot: 10:00 AM - 12:00 PM</li>
            <li>Degree: Computer Science</li>
            <li>Representative: John Doe</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
