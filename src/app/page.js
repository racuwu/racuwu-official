import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImageCard from "@/components/cards/ImageCard";
import FeaturesCard from "@/components/cards/FeaturesCard";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import GoogleMapComponent from "@/components/GoogleMap";
// import Image from "next/image";

export default function Home() {
  // Array of data for each FeaturesCard
  const services = [
    {
      imageUrl: "assets/images/avenue/community-service.jpg",
      title: "Community service",
      subtitle: "subtitle",
      content: "By tackling major issues including hunger, poverty, and education, we help the least fortunate and excluded populations in our community live better lives."
    },
    {
      imageUrl: "assets/images/avenue/international-service.jpg",
      title: "International Service",
      subtitle: "Subtitle",
      content: "In promoting the history, natural beauty, and rich culture of our country, we create on the wide network of the Rotaract movement."
    },
    {
      imageUrl: "assets/images/avenue/professional-development.jpg",
      title: "Professional Development",
      subtitle: "Subtitle",
      content: "We support members in expanding their knowledge of many concepts and enhancing the leadership and communication capabilities necessary to succeed in a corporate setting."
    },
    {
      imageUrl: "assets/images/avenue/en.jpg",
      title: "Environment Service",
      subtitle: "Subtitle",
      content: "We support members in expanding their knowledge of many concepts and enhancing the leadership and communication capabilities necessary to succeed in a corporate setting."
    },
    {
      imageUrl: "assets/images/avenue/club-service.jpg",
      title: "Club Service",
      subtitle: "Subtitle",
      content: "By organizing events for connectivity, socializing, and expanding the club identity, we put our concentrate on enhancing fellowship among club members."
    },
    {
      imageUrl: "assets/images/avenue/pr.jpg",
      title: "Public Relations",
      subtitle: "Subtitle",
      content: "Through raising public awareness of our club, we enhance our capacity to have an influence on local communities all over the world."
    },
  ];

  const gallery = [
    {
    imageUrl: "/assets/images/gallery/1.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/2.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/3.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/4.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/5.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/6.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/7.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/8.webp",
    url: ""
  },
    {
    imageUrl: "/assets/images/gallery/9.webp",
    url: ""
  },
];

  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <div className="flex flex-col items-center">
        <TwoLineTitle sub="Connecting Communities, Driving Progress" main="Who We Are?" />
        <p className="text-center max-w-[1140px] mt-8 mx-4 text-gray-500 border-2 border-pink-100 p-4 rounded-xl">We are a professional voluntary movement that focuses on six avenues: Community Service, Club Service, Professional Development, International Service, Public Relations, and Environment Service.The purpose of our club is to provide opportunities for young adults to develop leadership skills, promote global citizenship, and encourage community service. We organize and participate in a variety of service projects, fundraisers, and social events.We are open to young adults from all backgrounds and professions who share a commitment to service and making a difference in their communities. It is a great way to meet new people, develop professional skills, and make a positive impact on the world.</p>
        <TwoLineTitle sub="Empowering Leaders, Serving Communities" main="Our Services" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1140px] py-8 mx-4">
          {/* Map over the array of data and render FeaturesCard components */}
          {services.map((data, index) => (
            <FeaturesCard
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              // subtitle={data.subtitle}
              content={data.content}
            />
          ))}
        </div>
        <TwoLineTitle sub="Piecing Together Our Personal Histories" main="Memory Fragments" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 max-w-[1140px] py-8">
          {/* Map over the array of data and render FeaturesCard components */}
          {gallery.map((data, index) => (
            <ImageCard
              key={index}
              imageUrl={data.imageUrl}
              url={data.url}
            />
          ))}
        </div>
        <TwoLineTitle sub="Honors and Achievements" main="Awards" />
        <NumberSpringBanner/>
        <ContactForm />
      </div>
      {/* <Footer /> */}
      <GoogleMapComponent />
    </>
  );
}
