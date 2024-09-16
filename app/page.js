import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import TitleCard from "../components/ui/TitleCard";
import Members from "./pages/Members"; // Import the Members component
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import HeroSection from "./pages/hero";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="h-screen overflow-y-scroll">
        <section className="flex flex-col items-center justify-center bg-primaryWhite pb-16">
         <HeroSection />
        </section>
        <section className="h-screen flex justify-center items-top">
          
            <Members />

        </section>
        <section className="h-screen flex flex-col justify-center items-center">
          <h1 className="font-satoshiBold text-4xl text-primaryOrange mb-4">
            Projects
          </h1>
          <TextHoverEffect text="Coming soon.." />
      </section>
      </div>
    </div>
  );
}