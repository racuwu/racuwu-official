import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], weight:['100', '200', '300', '400', '500', '600'] });

export const metadata = {
  title: "Rotaract Club of Uva Wellassa University - Badulla",
  description: "Official website of the Rotaract Club of Uva Wellassa University of Sri Lanka. Learn about our community service projects, leadership opportunities, and global impact. Join us to make a difference! Related terms: Rota Uva, Uva Rota, UWU Rota, Rotaract UWU, RAC UWU, Uva Wellassa Rotaract, Rota Uva Wellassa, Rotaract Club Uva Wellassa.",
  keywords: "Rotaract, Uva Wellassa, Rota Uva, UWU Rota, Rotaract UWU, RAC UWU, Uva Wellassa Rotaract, Rota Uva Wellassa, Community Service, Leadership, Professional Development, Club Service, International Service, Public Relations, Environment Service, Voluntary Movement, Sri Lanka",
  author: "Rotaract Club of Uva Wellassa University",
  robots: "index, follow",
  og: {
    title: "Rotaract Club of Uva Wellassa University - Badulla",
    description: "Join the Rotaract Club of Uva Wellassa University to engage in community service, develop leadership skills, and make a global impact. Explore our avenues of service and get involved today!",
    image: "https://racuwu.com/assets/images/logo/racuwu.png",
    url: "https://www.racuwu.com",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@racuwu",
    title: "Rotaract Club of Uva Wellassa University - Badulla",
    description: "We are a professional voluntary movement focused on community service, leadership, and global citizenship. Join us to make a positive impact!",
    image: "https://racuwu.com/assets/images/logo/racuwu.png"
  },
};


export default function Layout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    </head>
    <body>
    <Navbar/>
    <main className="poppins">{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
