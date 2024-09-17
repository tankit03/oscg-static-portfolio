"use client"; // Mark as a Client Component

import { useState } from "react";
import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex flex-col pt-4 pb-4 font-satoshiBold text-primaryOrange">
      <div className="flex justify-between items-center px-4 w-full">
        {/* Logo on the left */}
        <div className="text-xl md:pl-12">
          <Link href="#home" passHref>
            <img 
              src="/images/OSCG.png" 
              alt="OSCG Logo" 
              className="h-24 w-auto" 
            />
          </Link>
        </div>

        {/* Desktop Menu (centered) */}
        <ul className="hidden md:flex space-x-16 justify-center flex-grow text-[16px]">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#members">Members</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Join Us Button on Desktop */}
        <div className="hidden md:block md:pr-16">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc74pbQOZVOnGhhrxS5W6pvEFJ8dYX_7fkvivTTyqMME_o8fQ/viewform" passHref>
            <Button>Join Us</Button>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile (right aligned) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-primaryOrange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 text-center md:hidden">
          <li>
            <a href="#home" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#members" onClick={toggleMenu}>Members</a>
          </li>
          <li>
            <a href="#project" onClick={toggleMenu}>Project</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
          <li>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc74pbQOZVOnGhhrxS5W6pvEFJ8dYX_7fkvivTTyqMME_o8fQ/viewform" passHref>
              <Button>Join Us</Button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}






// import Link from "next/link";
// import { Button } from "./button";

// export default function Navbar() {
//     return (
//       <nav className="flex flex-col pt-4 pb-4 font-satoshiBold text-primaryOrange">
//         <div className="flex flex-col justify-between items-center">
//           <ul className="flex space-x-32 text-[16px]">
//             <li>
//               <a href="#home">Home</a> {/* Scroll to the Hero section */}
//             </li>
//             <li>
//               <a href="#members">Members</a> {/* Scroll to the Members section */}
//             </li>
//             <li>
//               <a href="#project">Project</a> {/* Scroll to the Project section */}
//             </li>
//             <li>
//               <a href="#contact">Contact</a> {/* Scroll to the Contact section */}
//             </li>
//             <div>
//               <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc74pbQOZVOnGhhrxS5W6pvEFJ8dYX_7fkvivTTyqMME_o8fQ/viewform" passHref>
//                 <Button>Join Us</Button>
//               </Link>
//             </div>
//           </ul>
//         </div>
//       </nav>
//     );
// }