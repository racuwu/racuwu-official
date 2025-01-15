import React from 'react';
import { FaPlay, FaHeadphones, FaClock, FaCalendarAlt, FaMicrophone } from 'react-icons/fa';
import Head from 'next/head';

const PodcastDetails = () => {

  return (
    <>
      <Head>
        <title>InsideUWU - Uva Wellassa University Podcast by RACUWUB</title>
        <meta name="description" content="Your window into the vibrant world of Uva Wellassa University. Join us for insightful conversations, stories, and updates from our diverse academic community." />
        <meta name="keywords" content="Uva Wellassa University, Podcast, InsideUWU, University Podcast, Academic Community" />
        <meta name="author" content="Rotaract Club of Uva Wellassa University - Badulla" />
        <meta property="og:title" content="InsideUWU - Uva Wellassa University Podcast" />
        <meta property="og:description" content="Your window into the vibrant world of Uva Wellassa University. Join us for insightful conversations, stories, and updates from our diverse academic community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/insideuwu" />
        <meta property="og:image" content="https://yourwebsite.com/images/insideuwu-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InsideUWU - Uva Wellassa University Podcast" />
        <meta name="twitter:description" content="Your window into the vibrant world of Uva Wellassa University. Join us for insightful conversations, stories, and updates from our diverse academic community." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/insideuwu-banner.jpg" />
      </Head>
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-600 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0 md:w-1/2">
              <h1 className="text-6xl font-bold mb-6">InsideUWU</h1>
              <p className="text-xl mb-8">Your window into the vibrant world of Uva Wellassa University. Join us for insightful conversations, stories, and updates from our diverse academic community.</p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                  <FaPlay className="text-lg" />
                  Latest Episode
                </button>
                <button className="flex items-center gap-2 border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition">
                  <FaHeadphones className="text-lg" />
                  Subscribe
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-xl text-gray-800">
                <div className="flex items-center gap-2 text-purple-600 mb-4">
                  <FaClock className="text-lg" />
                  <span className="font-semibold">Now Recording</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Latest Episodes Coming Soon</h3>
                <p className="text-gray-600">Stay tuned for our upcoming episodes featuring different departments and their unique stories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
        {/* About Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About the Podcast</h2>
          <p className="text-gray-600 text-lg">
            InsideUWU is your premier source for everything happening at Uva Wellassa University. We dive deep into academic programs, student life, research initiatives, and campus events. Each episode brings you closer to the heart of our university community through engaging conversations with students, faculty, and staff.
          </p>
        </div>

        {/* Schedule Tabs */}
        <div className="mb-20">
          
          {/* January 18th Schedule */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Time Allocation - 19th Jan</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Time Slot</th>
                  <th className="py-3 px-4 border-b text-left">Degree</th>
                  <th className="py-3 px-4 border-b text-left">
                    <div className="flex items-center gap-2">
                      <FaMicrophone className="text-purple-600" />
                      Host & Representative
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">9:00 AM</td>
                  <td className="py-3 px-4 border-b">MRT</td>
                  <td className="py-3 px-4 border-b">Sasini with Kaushalya</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">9:45 AM</td>
                  <td className="py-3 px-4 border-b">ICT</td>
                  <td className="py-3 px-4 border-b">Supun with Sasini</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">10:30 AM</td>
                  <td className="py-3 px-4 border-b">IIT</td>
                  <td className="py-3 px-4 border-b">Nirmal with TBA</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">11:15 AM</td>
                  <td className="py-3 px-4 border-b">BBST</td>
                  <td className="py-3 px-4 border-b">Sasini with TBA</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">12:00 PM</td>
                  <td className="py-3 px-4 border-b">ANS</td>
                  <td className="py-3 px-4 border-b">Nirmal with Supun</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">12:45 PM</td>
                  <td className="py-3 px-4 border-b">EAG</td>
                  <td className="py-3 px-4 border-b">Supun with Nirmal</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">1:30 PM</td>
                  <td className="py-3 px-4 border-b">AQT</td>
                  <td className="py-3 px-4 border-b">Sasini with Chamod</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">2:15 PM</td>
                  <td className="py-3 px-4 border-b">CST</td>
                  <td className="py-3 px-4 border-b">Nirmal with TBA</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">3:00 PM</td>
                  <td className="py-3 px-4 border-b">SCT</td>
                  <td className="py-3 px-4 border-b">Supun with Lakindu</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">3:45 PM</td>
                  <td className="py-3 px-4 border-b">HTE</td>
                  <td className="py-3 px-4 border-b">Sasini with Amaya</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">4:30 PM</td>
                  <td className="py-3 px-4 border-b">ENM</td>
                  <td className="py-3 px-4 border-b">Nirmal with Ravindu</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">5:15 PM</td>
                  <td className="py-3 px-4 border-b">HRD</td>
                  <td className="py-3 px-4 border-b">Supun with Hansika</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* January 19th Schedule */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Time Allocation - 20th Jan</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Time Slot</th>
                  <th className="py-3 px-4 border-b text-left">Degree</th>
                  <th className="py-3 px-4 border-b text-left">
                    <div className="flex items-center gap-2">
                      <FaMicrophone className="text-purple-600" />
                      Host & Representative
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">9:00 AM</td>
                  <td className="py-3 px-4 border-b">ICT</td>
                  <td className="py-3 px-4 border-b">Nirmal with Sasini</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recording Status Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Recording Status</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600 text-lg">
              Recording in progress. Episodes will be available for streaming and download soon.
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-lg mb-2">
            <li>Recording will take place at the Stress-Free Zone from January 19th to January 21st.</li>
            <li>Both audio and video will be recorded.</li>
            <li>If your allocated timeslot is unavailable, please contact the representatives.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default PodcastDetails;
