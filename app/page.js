import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import TitleCard from "../components/ui/titleCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-primaryOrange pb-16">
        <header className="flex justify-center">
          <Navbar />
        </header>
        <div className="flex flex-row items-center justify-center gap-16 mt-8">
          <TitleCard />
          <div className="w-[420px] h-[400px] p-4 overflow-auto">
            <h1 className="font-satoshiBold text-[36px] text-primaryBlack font-bold">
            What do we do?
            </h1>
            <p className="font-satoshiLight text-[18px] max-w-3xl text-left">
            At the Oregon Software Consulting Group, we provide real-world experience in software consulting by working on hands-on projects and case studies. Our goal is to help students develop practical skills in problem-solving, project management, and client communication. We bring in industry experts to share insights and offer mentorship, giving our members the tools and knowledge needed to succeed in the fast-paced world of software consulting. 
            </p>
          </div>
        </div>
    </div>
  );
}