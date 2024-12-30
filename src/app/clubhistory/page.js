import PageHeader from "@/components/PageHeader";
import {BiCalendar, BiCalendarStar} from 'react-icons/bi';
import {FaUserTie, FaUsers, FaQuoteLeft} from 'react-icons/fa';
import { IoTrophyOutline } from 'react-icons/io5';

const clubHistory = [
  {
    date: "2023-2024",
    topDes: "Rotaract is not always about the place or the club, Its about people. When you are surrounded with right people, no one can stop you.",
    ipp: "IPP",
    ippdescription: "Rtr. Thisal Walgampaya",
    sec: "Joint Secretaries",
    secdescription: "Rtr. Gayathma Weerawanni, Rtr. Sachini Madushka",
    noOfBOD: "No of Board Members: 30",
    detailsTitle: "Achievements & Recognition",
    details: [
      "🏆 Most Outstanding Cluster Project - Silver (Arogyam)",
      "🏆 Most Outstanding Initiative with the Rotary Club - Silver (Daas)",
      "🏆 Most Outstanding Inter-Zonal Initiative - Bronze (Compagnia)",
      "🏆 Most Outstanding Professional Development Initiative - Merit (Innovitroz 2.0)",
      "🏆 Most Outstanding Club Service Initiative (Inclusivity and Diversity) - Aikya",
      "🏆 Most Outstanding International Understanding Initiative - Nominee (Meloverse 1.0 - Thaala)",
      "🏆 Most Outstanding Initiative for the Rotary Focus Area Basic Education and Literacy Nominee - Pillam",
      "🏆 Most Outstanding Fundraiser in aid of Service Nominee - Pillam",
      "🏆 Most Outstanding Annual Report Nominee - Rotaract Club of Uva Wellassa University-Badulla",
      "🏅 Award of Appreciation for Hosting District Council Meeting - March",
      "🏅 Rotaract District Citation - Gold Distinction",
      "🏅 Award of Appreciation for Hosting - Brandin | The Next Level",
      "🏅 Award of Appreciation for Hosting - V craft",
      "🏆 Most Outstanding Secretaries - Rtr. Gayathma Weerawanni & Rtr. Sachini Madushka",
      "🏅 Meritorious Leadership Award - Rtr. Thisal Walgampaya",
      "🏅 Spirit of the Service - Rtr. Gayathma Weerawanni",
      "🏅 President of the Month December - Rtr. Thisal Walgampaya",
      "🏅 Secretaries of the Month September - Rtr. Sachini Madushka & Rtr. Gayathma Weerawanni"
    ]
  },
  {
    date: "2022-2023",
    topDes:
      "“Remember that volunteers are not paid, not because they are worthless, but because they are  priceless. Someday, your good heart will be truly rewarded by your good deeds; until that, keep  volunteering. “",
    ipp: "IPP",
    ippdescription: "Rtr. Naween Sandeepe",
    sec: "Joint Secretaries",
    secdescription: "Rtr. Monali Badhurathe, Rtr. Ninadi Heshara",
    noOfBOD: "No of Board Members: 30",
    detailsTitle: "Moments of Pride",
    details: [
      "Most Outstanding Partnership-Based Initiative - Gold Award - Gamata Hetak",
      "Most Outstanding Project Focused on Rotary Focus Area Community Economic Development - Silver Award - Gamata Hetak",
      "Rotaract Citation for the Year 2022 - 23 - Silver Category",
      "DRR's Special Recognition 2022 - 23 for number of club members",
      "President of the Month - May Rtr. Naween Sandeepe",
      "Secretary of the Quarter - 4th Quarter",
      "Recognition for Hosting District Projects",
      "DCM - February",
      "Rotaract District Conference",
      "Rotaract Champions League Champion House - House Tokyo",
    ],
  },
  {
    date: "2021-2022",
    topDes:
      "“Remember that volunteers are not paid, not because they are worthless, but because they are  priceless. Someday, your good heart will be truly rewarded by your good deeds; until that, keep  volunteering. “",
    ipp: "IPP",
    ippdescription: "Rtr. Anuja Gunaratne",
    sec: "Joint Secretaries",
    secdescription: "Rtr. Chamodee Pathirana, Rtr. Gihani Weerakoon",
    noOfBOD: "No of Board Members: 30",
    detailsTitle: "Moments of Pride",
    details: [
      "Most outstanding club of the year 21/22",
      "Kunchanada - Most inventive project of the year",
      "Wew Diyawara Asswaddnata - Gold for most outstanding community service initiative",
      "Hill Spree - Bronze award for the most outstanding club service initiative under a specific audience",
      "Ekamuthu - Gold award as the most outstanding inter-regional initiative",
      "Rotary International citation for Rotaract, for the year 21/22 and awarded with a gold for Rotaract citation",
    ],
  },
  {
    date: "2021-2022",
    topDes:
      "“When you have a dream, you've got to grab it and never let go. Rotaract teaches us to achieve all in the most difficult times as One Strong Family. Strive As One.“",
    ipp: "IPP",
    ippdescription: "Rtr. Ishini Herath",
    sec: "Joint Secretaries",
    secdescription: "Rtr.Shenal Jayasinghe, Rtr.Bhagya Wickramasooriya",
    noOfBOD: "No of Board Members: 26",
    detailsTitle: "Moments of Pride",
    details: [
      "Most Resilient Club of the year 2020/21 ",
      "Most Supportive Club of the year 2020/21- Bronze",
      "Most Outstanding President of the year 2020/21 ",
      "Initiated a three year project for wild animals under Freedom Fund / Freedom Fight ",
      "For the first time in club history - Project ‘See Lanka’ got Nominated as a most outstanding single club project at Rotary International Awards",
      "13 Awards and Recognitions along with 11 nominations were gained at 31st Rotaract District Assembly",
    ],
  },
  {
    date: "2019-2020",
    topDes:
      "“The teamwork enriched with the diversity of individual traits and capabilities was the most inspirational thing in Rotaract”",
    ipp: "IPP",
    ippdescription: "Rtr. Charutha Dayarathne",
    sec: "Joint Secretaries",
    secdescription:
      "Rtr. Chamodi Sathsarani Wewelwala, Rtr. Hemansi Oshadhie Kokuhennadi",
    noOfBOD: "Number of Board Members: 22",
    detailsTitle: "Moments of Pride",
    details: [
      "Rotaract District Citation Award- 19/20",
      "Project Aloka",
      "Lush 2.0",
      "Uthura Mithuru",
      "50 years Celebration project – Christmas Tree",
      "Cluster Project of the Year 19 / 20 – Altitude",
    ],
  },
  {
    date: "2018-2019",
    topDes: "“Rotaract taught me sustainable ways of serving people”",
    ipp: "IPP",
    ippdescription: "Rtr. Samadhith Uthpala",
    sec: "Secretary",
    secdescription: "Rtr. Kasunka Muthumala",
    noOfBOD: "Number of Board Members: 13",
    detailsTitle: "Moments of Pride",
    details: [
      "Signature Project: Lush",
      "Community Service project: Suraksha",
      "Achieve Rotary International Presidential platinum citation",
      "Multiple awards at 29th Rotaract District Assembly including the Best emerging Rotaract Club of the district",
    ],
  },
  {
    date: "2017-2018",
    topDes:
      "“Rotaract helps you to change the world, while improving yourself”",
    ipp: "IPP",
    ippdescription: "Rtr. Damith De Silva",
    sec: "Secretary",
    secdescription: "Rtr. Shashika Karunarathne",
    noOfBOD: "Number of Board Members: 15",
    detailsTitle: "Moments of Pride",
    details: [
      "Signature Project: Yathra",
      "Ronde Cluster project",
      "Club Service Project: The woods",
    ],
  },
  {
    date: "2016-2017",
    topDes: "“Rotaract gave me courage to explore”",
    ipp: "IPP",
    sec: "Secretary",
    secdescription: "Rtr. Tharushi Pitigala",
    ippdescription: "Rtr. Dhanusha Dissanayake",
    noOfBOD: "Number Board Members: 17",
    detailsTitle: "Moments of Pride",
    details: [
      "COD LAN Challenge Club Service Project",
      "Annual Ifthar celebration",
    ],
  },
  {
    date: "2015-2016",
    topDes:
      "“Rotaract Is an Opportunity: take it Rotaract is a passion: Follow it Rotaract is a lifestyle: Just live it”",
    ipp: "IPP",
    ippdescription: "Rtr. Vinidu Dayananda",
    sec: "Secretary",
    secdescription: "Rtr. Tharushi Pitigala",
    noOfBOD: "No of Board Members: 15",
    detailsTitle: "Moments of Pride",
    details: [
      "Day of the Dead’ International Service Project",
      "Club Service project 'Kussiya'",
      "Madolsima Book Donation campaign",
    ],
  },
  {
    date: "2014-2015",
    topDes:
      "Being a Rotaractor provides the chance of doing good to the mankind",
    ipp: "IPP",
    ippdescription: "Rtr. Malithi Neluhena",
    sec: "Secretary",
    secdescription: "Rtr. Amanda Marasinghe",
    noOfBOD: "No of Board Members: 10",
    detailsTitle: "Moments of Pride",
    details: [
      "Rtr. Malithi Neluhena was appointed as the club’s first female president for the year.",
      "Hosted a zonal meeting at Namunukula peak- highest location at which a Rotaract meeting has ever taken place.",
      "‘Day of the Dead’ International Service Project.",
      "Madolsima Book Donation campaign.",
    ],
  },

  {
    date: "2013-2014",
    topDes:
      "“Make yourself to be beyond your own expectations by being a Rotaractor”",
    ipp: "Charter President",
    ippdescription: "Rtr. Pramod Wattegedara",
    sec: "Secretary",
    secdescription: "Rtr. Malithi Neluhena",
    noOfBOD: "No of Board Members: 10",
    detailsTitle: "Moments of Pride",
    details: [
      "The club was recognized as the most outstanding club of the year among the newly charted clubs.",
      "The charter president Rtr. Pramod Wattegedara was elected as a Rotaract Zonal Secretary in year 2014-15",
    ],
  },
];

const ClubHistory = () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Our Journey Through Time
        </h1>

        <div className="relative">
          <div
              className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 transform -translate-x-1/2 z-0"/>

          {clubHistory.map((item, index) => (
              <div key={index} className="relative mb-24">
                {/* Year marker */}
                <div className="relative flex justify-center mb-8">
                  <div
                      className="absolute w-32 h-32 bg-pink-50 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"/>
                  <div
                      className="absolute w-24 h-24 bg-pink-100 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"/>
                  <div
                      className="relative w-16 h-16 bg-white rounded-full border-4 border-pink-600 transform -translate-y-1/2 flex items-center justify-center shadow-lg z-10">
                    <BiCalendarStar className="w-8 h-8 text-pink-600"/>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2">
                    <h2 className="text-3xl font-bold text-purple-600 text-center mt-8">{item.date}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  {/* Moment of Pride (Quotes) Section */}
                  <div className="md:pr-12">
                    <div
                        className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl border border-purple-100">
                      <div className="relative">
                        <FaQuoteLeft className="absolute -top-4 -left-4 w-8 h-8 text-pink-200"/>
                        <p className="text-gray-600 italic text-lg pt-4 px-4">{item.topDes}</p>
                      </div>

                      <div className="mt-8 space-y-6">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <FaUserTie className="w-6 h-6 text-purple-600"/>
                            <h3 className="font-semibold text-purple-900 text-lg">
                              {index === 0 ? (
                                  <span className="text-purple-800">Immediate Past President</span>
                              ) : index === clubHistory.length - 1 ? (
                                  <span className="text-purple-800">Charter President</span>
                              ) : (
                                  <span>President</span>
                              )}
                            </h3>
                          </div>
                          <p className="text-gray-700 pl-9">{item.ippdescription}</p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <FaUserTie className="w-6 h-6 text-purple-600"/>
                            <h3 className="font-semibold text-purple-900 text-lg">{item.sec}</h3>
                          </div>
                          <p className="text-gray-700 pl-9">{item.secdescription}</p>
                        </div>

                        <div className="flex items-center gap-3 pl-4">
                          <FaUsers className="w-6 h-6 text-pink-600"/>
                          <p className="text-gray-700 font-medium">{item.noOfBOD}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="md:pl-12">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-1">
                      <div className="bg-white rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <IoTrophyOutline className="w-8 h-8 text-pink-600"/>
                          <h3 className="font-bold text-gray-900 text-xl">{item.detailsTitle}</h3>
                        </div>
                        <ul className="space-y-4">
                          {item.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-pink-600 mt-2 flex-shrink-0"/>
                                <p className="text-gray-600 leading-relaxed">{detail}</p>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}

          {/* Club Origin Section */}
          <div className="mt-32 relative">
            <div
                className="absolute w-48 h-48 bg-pink-50 rounded-full opacity-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            <div
                className="absolute w-40 h-40 bg-pink-100 rounded-full opacity-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            <div
                className="relative bg-white rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto border-2 border-purple-100 z-10">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <FaUsers className="w-8 h-8 text-white"/>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6 pt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Our Beginning
              </h2>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Founded with a vision to serve and lead, our club began its remarkable journey in 2013.
                What started as a gathering of assionate individuals has grown into a vibrant community of
                leaders,
                innovators, and changemakers. Our charter members laid the foundation for what would become a legacy of
                excellence, service, and unwavering commitment to our community.
              </p>
              <div className="mt-8 text-center">
                <span
                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold">
                  Celebrating 12 Years of Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default ClubHistory;