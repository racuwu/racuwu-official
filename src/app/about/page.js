import ImageCard from "@/components/cards/ImageCard";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";
import GoogleMapComponent from "@/components/GoogleMap";
import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/cards/ImageCard";
import AwardsSection from "@/components/AwardsSection";
// import Image from "next/image";
import { FaHandsHelping, FaGlobe, FaTree } from 'react-icons/fa';

export default function Home() {
  // Array of data for each FeaturesCard
  const services = [
    {
      imageUrl: "assets/images/avenue/community-service.jpg",
      title: "Community service",
      subtitle: "subtitle",
      content:
        "By tackling major issues including hunger, poverty, and education, we help the least fortunate and excluded populations in our community live better lives.",
    },
    {
      imageUrl: "assets/images/avenue/international-service.jpg",
      title: "International Service",
      subtitle: "Subtitle",
      content:
        "In promoting the history, natural beauty, and rich culture of our country, we create on the wide network of the Rotaract movement.",
    },
    {
      imageUrl: "assets/images/avenue/professional-development.jpg",
      title: "Professional Development",
      subtitle: "Subtitle",
      content:
        "We support members in expanding their knowledge of many concepts and enhancing the leadership and communication capabilities necessary to succeed in a corporate setting.",
    },
    {
      imageUrl: "assets/images/avenue/en.jpg",
      title: "Environment Service",
      subtitle: "Subtitle",
      content:
        "We support members in expanding their knowledge of many concepts and enhancing the leadership and communication capabilities necessary to succeed in a corporate setting.",
    },
    {
      imageUrl: "assets/images/avenue/club-service.jpg",
      title: "Club Service",
      subtitle: "Subtitle",
      content:
        "By organizing events for connectivity, socializing, and expanding the club identity, we put our concentrate on enhancing fellowship among club members.",
    },
    {
      imageUrl: "assets/images/avenue/pr.jpg",
      title: "Public Relations",
      subtitle: "Subtitle",
      content:
        "Through raising public awareness of our club, we enhance our capacity to have an influence on local communities all over the world.",
    },
  ];

  const gallery = [
    {
      imageUrl: "/assets/images/gallery/1.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/2.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/3.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/4.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/5.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/6.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/7.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/8.webp",
      url: "",
    },
    {
      imageUrl: "/assets/images/gallery/9.webp",
      url: "",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          {/* Header Section */}
          <div className="text-center mb-16 animate__animated animate__fadeInDown mt-16">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">
              About Us
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              We are a professional voluntary movement dedicated to creating impactful change through community service,
              leadership development, and global citizenship.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div
                className="p-8 bg-white shadow-lg rounded-3xl transform hover:scale-105 transition duration-300 animate__animated animate__zoomIn">
              <div className="flex justify-center mb-6">
                <FaHandsHelping className="text-pink-600 w-12 h-12"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Community Service</h3>
              <p className="text-gray-600 text-center">
                Collaborating with communities to address pressing social needs and improve quality of life.
              </p>
            </div>

            <div
                className="p-8 bg-white shadow-lg rounded-3xl transform hover:scale-105 transition duration-300 animate__animated animate__zoomIn animate__delay-1s">
              <div className="flex justify-center mb-6">
                <FaGlobe className="text-pink-600 w-12 h-12"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Global Citizenship</h3>
              <p className="text-gray-600 text-center">
                Fostering international understanding and goodwill through cross-cultural connections.
              </p>
            </div>

            <div
                className="p-8 bg-white shadow-lg rounded-3xl transform hover:scale-105 transition duration-300 animate__animated animate__zoomIn animate__delay-2s">
              <div className="flex justify-center mb-6">
                <FaTree className="text-pink-600 w-12 h-12"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Environmental Stewardship</h3>
              <p className="text-gray-600 text-center">
                Leading initiatives to preserve our planet and promote sustainable practices.
              </p>
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
                className="p-10 bg-gradient-to-br from-pink-600 to-purple-400 text-white rounded-3xl shadow-lg relative overflow-hidden animate__animated animate__fadeInLeft">
              <div className="absolute inset-0 bg-white opacity-10 rounded-3xl"/>
              <h2 className="text-4xl font-extrabold mb-6 relative z-10">Our Vision</h2>
              <p className="text-lg relative z-10">
                Together, we see a world where people unite and take action to create lasting change — across the globe,
                in
                our communities, and in ourselves.
              </p>
            </div>

            <div
                className="p-10 bg-gradient-to-br from-gray-50 to-white border-2 border-pink-100 rounded-3xl shadow-lg relative animate__animated animate__fadeInRight">
              <h2 className="text-4xl font-extrabold text-pink-600 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To provide service to others, promote integrity, and advance world understanding, goodwill, and peace
                through its fellowship of business, professional, and community leaders.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center animate__animated animate__fadeInUp">
            <button
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-400 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300">
              Join Us and Make a Difference
            </button>
          </div>
        </div>
      </div>

      <AwardsSection/>
      <GallerySection gallery={gallery}/>
      <GoogleMapComponent/>
    </>
  );
}
