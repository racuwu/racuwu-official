import PageHeader from "@/components/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";
import MSFormNewMember from "../../components/forms/GoogleFormNewMember";
import { FaUsers, FaLightbulb, FaHandshake, FaGraduationCap, FaGlobeAmericas, FaHandHoldingHeart } from "react-icons/fa";

function JoinUs() {
  const benefits = [
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      title: "Community",
      description: "Join a vibrant community of like-minded individuals passionate about making a difference."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-white" />,
      title: "Leadership",
      description: "Develop essential leadership skills through hands-on experience in project management."
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-white" />,
      title: "Networking",
      description: "Connect with professionals and build relationships that will last throughout your career."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-white" />,
      title: "Growth",
      description: "Access opportunities for personal and professional development through workshops and mentorship."
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8 text-white" />,
      title: "Global Impact",
      description: "Be part of an international network making positive changes across the world."
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8 text-white" />,
      title: "Service",
      description: "Participate in meaningful service projects that create lasting impact in communities."
    }
  ];

  return (
    <>
      <PageHeader title="Join Us" />
      
      <div className="pt-[80px] pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Become a Rotaractor</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community of changemakers and be part of something bigger than yourself.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-8"></div>
          </div>

          <div className="mb-20 animate__animated animate__fadeInUp">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img 
                    src="/assets/images/bg/hero-racuwu-min.jpg" 
                    alt="Rotaract Community" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/40 to-purple-600/40 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center px-6">
                      <h3 className="text-3xl font-bold mb-4">Make a Difference</h3>
                      <p className="text-xl">Join our global movement of young leaders taking action for positive change</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6">Why Join Rotaract?</h3>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    Take the first step towards joining our vibrant community of changemakers dedicated to making a difference. 
                    By becoming a member, you will gain access to a wide range of opportunities for personal and professional 
                    growth, leadership development, and impactful service projects. Join us in creating positive change and 
                    leaving a lasting impact on the world.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {benefits.slice(0, 6).map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-start p-4 rounded-xl transform transition-all hover:-translate-y-1 duration-300"
                        style={{ animationDelay: `${index * 0.15}s` }}
                      >
                        <div className="w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <TwoLineTitle main="Join Our Community" sub="Become a Member Today" />
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mt-10 animate__animated animate__fadeInUp">
              <div className="p-1.5 bg-gradient-to-r from-pink-600 to-purple-600">
                <div className="bg-white p-8 md:p-12 rounded-[1.35rem]">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      Membership Application
                    </h3>
                    <p className="text-gray-700 mb-8 text-center">
                      Fill out the form below to start your journey with Rotaract Club of UWU. We'll get back to you soon with next steps.
                    </p>
                    <MSFormNewMember />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 shadow-inner animate__animated animate__fadeIn">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Questions About Joining?
              </h3>
              <p className="text-gray-700 text-lg mb-8">
                If you have any questions about the membership process or would like to learn more about our club activities before joining, 
                we're here to help. Reach out to our team for more information.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a 
                  href="/about" 
                  className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-full border-2 border-pink-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
