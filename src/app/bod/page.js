import PageHeader from "@/components/PageHeader";
import MemberCard from "@/components/cards/MemberCard";
// import Image from "next/image";
import bod from '@/appdata/bod.json'


export default function Home() {
  return (
    <>
      <PageHeader title="Board of Directors" />
      <div className="flex flex-col items-center mt-[80px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 w-full xl:w-[1140px] py-8  px-4 md:px-12">
          {bod.map((data, index) => (
            <MemberCard key={index} name={data.name} image={data.image} postition={data.postition} />
          ))}
        </div>
      </div>
    </>
  );
}
