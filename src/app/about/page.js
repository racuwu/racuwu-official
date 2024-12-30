import ImageCard from "@/components/cards/ImageCard";
import TwoLineTitle from "@/components/titles/TwoLineTitle";
import NumberSpringBanner from "@/components/banner/NumberSpringBanner";
import GoogleMapComponent from "@/components/GoogleMap";
import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/cards/ImageCard";
// import Image from "next/image";

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
      <PageHeader title="About Us" />
      <div className="flex flex-col items-center mt-[80px]">
        <p className="text-center max-w-[1140px] mt-8 mx-4 text-gray-500 border-pink-100 rounded-xl border-2 p-4">
          We are a professional voluntary movement that focuses on six avenues:
          Community Service, Club Service, Professional Development,
          International Service, Public Relations, and Environment Service.The
          purpose of our club is to provide opportunities for young adults to
          develop leadership skills, promote global citizenship, and encourage
          community service. We organize and participate in a variety of service
          projects, fundraisers, and social events.We are open to young adults
          from all backgrounds and professions who share a commitment to service
          and making a difference in their communities. It is a great way to
          meet new people, develop professional skills, and make a positive
          impact on the world.
        </p>
        <div className="grid md:grid-cols-2  gap-4 max-w-[1140px] py-8 mx-4">
          <div className="rounded-xl border-2 border-pink-100 pb-16">
            <TwoLineTitle
              main="Our Vision"
              sub="Together, we see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves."
            />
          </div>
          <div className="rounded-xl border-2 border-pink-100 pb-16">
            <TwoLineTitle
              main="Our Mission"
              sub="Is to provide service to others, promote integrity, and advance world understanding, goodwill, and peace through its fellowship of business, professional, and community leaders."
            />
          </div>
        </div>
        <TwoLineTitle sub="Honors And Achievements" main="Awards" />

        <NumberSpringBanner />
        <GallerySection gallery={gallery}/>
      </div>
      <GoogleMapComponent />
    </>
  );
}
