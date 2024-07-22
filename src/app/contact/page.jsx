import CalendlyWidget from "@/components/Calendly";
import ContactForm from "@/components/ContactForm";
import GoogleMapComponent from "@/components/GoogleMap";
import PageHeader from "@/components/PageHeader";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import React from "react";

function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="pt-[80px]">
        <ContactForm />
        <TwoLineTitle main="Book an" sub="Appointment" />
        <CalendlyWidget />
        <GoogleMapComponent />
      </div>
    </>
  );
}

export default Contact;
