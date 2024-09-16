import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import TitleCard from "../components/ui/TitleCard";
import Members from "./pages/members"; // Import the Members component
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import HeroSection from "./pages/hero";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Project from "./pages/project";
import Contact from "./pages/contact";

export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="overflow-y-scroll">
        <section className="flex flex-col items-center justify-center bg-primaryWhite pb-16">
         <HeroSection />
        </section>
        <section className="flex justify-center items-top py-16"> 
            <Members />
        </section>
        <section className="flex flex-col justify-center items-center py-16">
          <Project />
      </section>
      <section className="flex flex-col justify-center items-center py-16">
          <Contact />
      </section>
      </div>
    </div>
  );
}