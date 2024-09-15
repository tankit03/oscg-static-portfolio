import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import TitleCard from "../components/ui/TitleCard";
import Members from "./pages/Members"; // Import the Members component
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-primaryWhite pb-16">
        <header className="flex justify-center">
          <Navbar />
        </header>
        {/* Main content */}
        <div className="flex flex-row items-center justify-center gap-16 mt-8">
          <TitleCard />
          <div className="w-[420px] h-[400px] p-4 overflow-auto">
            {/* <div className="font-satoshiBold text-[36px] text-primaryOrange font-bold"> */}
            <TypewriterEffect
              words={[
                { text: "What", className: "font-satoshiBold text-primaryOrange text-[36px]" },
                { text: "do", className: "font-satoshiBold text-primaryOrange text-[36px]" },
                { text: "We", className: "font-satoshiBold text-primaryOrange text-[36px]" },
                { text: "do ?", className: "font-satoshiBold text-primaryOrange text-[36px]" }
              ]}
            />
            <p className="font-satoshiMedium text-[18px] max-w-3xl text-left text-strongBlack">
              At the Oregon Software Consulting Group, we provide real-world experience in software consulting by working on hands-on projects and case studies. Our goal is to help students develop practical skills in problem-solving, project management, and client communication. We bring in industry experts to share insights and offer mentorship, giving our members the tools and knowledge needed to succeed in the fast-paced world of software consulting.
            </p>
          </div>
        </div>
      </div>
      <Members />
    </div>
  );
}