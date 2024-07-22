import MemberForm from "@/components/MemberForm";
import PageHeader from "@/components/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";
import MSFormNewMember from "../../components/forms/GoogleFormNewMember";

function Contact() {
  return (
    <>
      <PageHeader title="Join Us" />
      <div className="pt-[80px] flex flex-col items-center">
      <p className="text-center max-w-[1140px] mt-8 mx-4 text-gray-500 border-2 border-pink-100 p-4 rounded-xl">Take the first step towards joining our vibrant community of changemakers dedicated to making a difference. By becoming a member, you will gain access to a wide range of opportunities for personal and professional growth, leadership development, and impactful service projects. Join us in creating positive change and leaving a lasting impact on the world. </p>
      <TwoLineTitle main="Join Now!" sub="Become a Member of Our Vibrant Community"/>
        <MSFormNewMember/>
      </div>
    </>
  );
}

export default Contact;
