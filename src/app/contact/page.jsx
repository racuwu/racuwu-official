import CalendlyWidget from "@/components/Calendly";
import ContactForm from "@/components/ContactForm";
import GoogleMapComponent from "@/components/GoogleMap";
import PageHeader from "@/components/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    { icon: <FaPhoneAlt />, title: "Call Us", content: "+94 766 123 456" },
    { icon: <FaEnvelope />, title: "Email Us", content: "info@racuwu.com" },
    { icon: <FaMapMarkerAlt />, title: "Visit Us", content: "Uva Wellassa University, Badulla, Sri Lanka" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", label: "Facebook" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaLinkedinIn />, url: "#", label: "LinkedIn" },
  ];
  return (
    <>
      <PageHeader title="Contact Us" />
      
      <div className="pt-[80px] bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out to us with any questions, ideas, or collaboration opportunities.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20 animate__animated animate__fadeInUp">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white mb-6 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.content}</p>
              </div>
            ))}
          </div>          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="p-1.5 bg-gradient-to-r from-pink-600 to-purple-600">
              <div className="bg-white p-10 rounded-[1.35rem]">
                <h3 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <TwoLineTitle main="Schedule a Meeting" sub="Book an Appointment" />
            <div className="mt-10 bg-white rounded-3xl shadow-xl overflow-hidden animate__animated animate__fadeInUp">
              <CalendlyWidget />
            </div>
          </div>          <div className="mb-20">
            <TwoLineTitle main="Find Us" sub="Our Location" />
            <div className="mt-10 rounded-3xl overflow-hidden shadow-xl animate__animated animate__fadeInUp">
              <GoogleMapComponent />
            </div>
          </div>

          <div className="text-center py-12 animate__animated animate__fadeIn">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Connect With Us</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300 hover:shadow-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
              Follow us on social media to stay updated with our latest projects, events, and initiatives. 
              Join our community and be part of the positive change!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
