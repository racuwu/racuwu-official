import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImageCard from "@/components/cards/ImageCard";
import FeaturesCard from "@/components/cards/FeaturesCard";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import GoogleMapComponent from "@/components/GoogleMap";
import WhoAreWe from "@/components/WhoAreWe";
import NavigationGrid from "@/components/QuickNavigation";
import AwardsSection from "@/components/AwardsSection";
import GallerySection from "@/components/cards/ImageCard";
import Achievements from "@/components/AwardsSection";
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
            <HeroSection/>
            <WhoAreWe/>

            <TwoLineTitle sub="Empowering Leaders, Serving Communities" main="Our Avenues"/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl py-12 mx-auto px-4 lg:px-0">
                {/* Map over the array of data and render FeaturesCard components */}
                {services.map((data, index) => (
                    <FeaturesCard
                        key={index}
                        imageUrl={data.imageUrl}
                        title={data.title}
                        content={data.content}
                    />
                ))}
            </div>
            <GallerySection gallery={gallery}/>
            <Achievements/>
            <NavigationGrid/>
            <ContactForm/>
            {/* <Footer /> */}
            <GoogleMapComponent/>
        </>
    );
}
