
import Navbar from "../components/ui/Navbar";
import Members from "./pages/members";
import HeroSection from "./pages/hero";
import Project from "./pages/project";
import Contact from "./pages/contact";

export default function Home() {

  return (
    <div>
      <div className="overflow-y-scroll">
        <section id="home" className="flex flex-col items-center justify-center bg-primaryWhite pb-16">
          <Navbar />
          <HeroSection />
        </section>
        <section id="members" className="flex justify-center items-top py-16"> 
          <Members />
        </section>
        <section id="project" className="flex flex-col justify-center items-center py-16">
          <Project />
        </section>
        <section id="contact" className="flex flex-col justify-center items-center py-16">
          <Contact />
        </section>
      </div>
    </div>
  );
}