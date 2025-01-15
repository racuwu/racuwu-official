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

        {/* Degree and Representatives Information */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Time Allocation - 19th Jan</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Time Slot</th>
                <th className="py-2 px-4 border-b">Degree</th>
                <th className="py-2 px-4 border-b">Representative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">9:00 AM</td>
                <td className="py-2 px-4 border-b">ICT</td>
                <td className="py-2 px-4 border-b">Sasini</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">9:45 AM</td>
                <td className="py-2 px-4 border-b">IIT</td>
                <td className="py-2 px-4 border-b"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">10:30 AM</td>
                <td className="py-2 px-4 border-b">BBST</td>
                <td className="py-2 px-4 border-b"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">11:15 AM</td>
                <td className="py-2 px-4 border-b">ANS</td>
                <td className="py-2 px-4 border-b">Supuna</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">12:00 PM</td>
                <td className="py-2 px-4 border-b">EAG</td>
                <td className="py-2 px-4 border-b">Nirmal</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">12:45 PM</td>
                <td className="py-2 px-4 border-b">AQT</td>
                <td className="py-2 px-4 border-b">Chamod</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">1:30 PM</td>
                <td className="py-2 px-4 border-b">CST</td>
                <td className="py-2 px-4 border-b"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">2:15 PM</td>
                <td className="py-2 px-4 border-b">SCT</td>
                <td className="py-2 px-4 border-b">Lakindu malli</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">3:00 PM</td>
                <td className="py-2 px-4 border-b">HTE</td>
                <td className="py-2 px-4 border-b">Amaya</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">3:45 PM</td>
                <td className="py-2 px-4 border-b">ENM</td>
                <td className="py-2 px-4 border-b">Ravindu</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">4:30 PM</td>
                <td className="py-2 px-4 border-b">HRD</td>
                <td className="py-2 px-4 border-b">Hansika</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recording Status Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Recording Status</h2>
          <p className="text-gray-600 text-lg">
            We are currently recording the podcast and sooner will be available to watch and listen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
