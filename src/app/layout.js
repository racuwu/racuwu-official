import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], weight:['100', '200', '300', '400', '500', '600'] });

export const metadata = {
  title: "Rotaract Club of Uva Wellassa University of Sri Lanka",
  description: "We are a professional voluntary movement that focuses on six avenues: Community Service, Club Service, Professional Development, International Service, Public Relations, and Environment Service.The purpose of our club is to provide opportunities for young adults to develop leadership skills, promote global citizenship, and encourage community service. We organize and participate in a variety of service projects, fundraisers, and social events.We are open to young adults from all backgrounds and professions who share a commitment to service and making a difference in their communities. It is a great way to meet new people, develop professional skills, and make a positive impact on the world.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="poppins">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
