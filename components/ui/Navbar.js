import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
    return (
      <nav className="flex flex-col pt-4 font-satoshiBold text-primaryOrange ">
        <div className="flex flex-col justify-between items-center">
          <ul className="flex space-x-32 text-[16px]">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#members">Members</a> {/* This will scroll to the members section */}
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <div>
              <Button>Join Us</Button>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
