"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
    errors: {
      name: "",
      email: "",
      tel: "",
      message: "",
    },
    submissionStatus: "" // New state to track submission status
  });

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid";
        }
        break;
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "tel":
        if (!value) {
          error = "Telephone number is required";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Telephone number is invalid";
        }
        break;
      case "message":
        if (!value) {
          error = "Message is required";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, tel, message } = formData;
  const errors = {
    name: validateInput("name", name),
    email: validateInput("email", email),
    tel: validateInput("tel", tel),
    message: validateInput("message", message)
  };

  setFormData((prevState) => ({ ...prevState, errors }));

  if (!Object.values(errors).some((error) => error !== "")) {
    emailjs
      .sendForm(
        "service_ixsgzrg",
        "template_e5qjvmp",
        e.target,
        "qGOgpZPc-HUfCxxi8"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setFormData({
            name: "",
            email: "",
            tel: "",
            message: "",
            errors: {
              name: "",
              email: "",
              tel: "",
              message: ""
            },
            submissionStatus: "success"
          });
          setTimeout(() => {
            setFormData((prevState) => ({
              ...prevState,
              submissionStatus: ""
            }));
          }, 6000); // Hide status after 6 seconds
        },
        (error) => {
          console.log("Failed to send the email:", error.text);
          setFormData((prevState) => ({
            ...prevState,
            submissionStatus: "error"
          }));
          setTimeout(() => {
            setFormData((prevState) => ({
              ...prevState,
              submissionStatus: ""
            }));
          }, 6000); // Hide status after 6 seconds
        }
      );
  }
};

  return <ContactSection handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} />;
};

export default ContactForm;

import React from 'react';

const ContactSection = ({ formData, handleSubmit, handleChange }) => {
  const contactInfo = [
    {
      icon: (
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
      ),
      text: "Uva Wellassa University of Sri Lanka"
    },
    {
      icon: (
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
      ),
      text: "+94 75 214 1779 (Thisal), +94 76 528 9313 (Yasith), +94 71 974 8048 (Gayathma), +94 74 182 4810 (Ravindu)"
    },
    {
      icon: (
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
      ),
      text: "racuwub@gmail.com"
    }
  ];

  return (
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate__animated animate__fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              <span className="block">Get in touch</span>
              <span className="block mt-2 text-2xl md:text-3xl font-medium text-gray-600">
              Fill in the form to start a conversation
            </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg animate__animated animate__fadeInLeft">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl transition-transform hover:translate-x-2"
                    >
                      <div className="text-pink-600">
                        {info.icon}
                      </div>
                      <div className="text-gray-700 font-medium">
                        {info.text}
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg animate__animated animate__fadeInRight">
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", type: "text", placeholder: "Full Name" },
                  { name: "email", type: "email", placeholder: "Email" },
                  { name: "tel", type: "tel", placeholder: "Telephone Number" }
                ].map((field) => (
                    <div key={field.name} className="space-y-1">
                      <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors duration-200"
                      />
                      {formData.errors[field.name] && (
                          <p className="text-red-500 text-sm">{formData.errors[field.name]}</p>
                      )}
                    </div>
                ))}

                <div className="space-y-1">
                <textarea
                    name="message"
                    placeholder="Enter Your Message Here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors duration-200"
                />
                  {formData.errors.message && (
                      <p className="text-red-500 text-sm">{formData.errors.message}</p>
                  )}
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Submit
                </button>

                {formData.submissionStatus === "success" && (
                    <p className="text-green-500 animate__animated animate__fadeIn">Email sent successfully!</p>
                )}
                {formData.submissionStatus === "error" && (
                    <p className="text-red-500 animate__animated animate__fadeIn">Failed to send the email. Please try again later.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};
