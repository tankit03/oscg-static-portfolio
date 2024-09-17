import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
    return (
      <nav className="flex flex-col pt-4 pb-4 font-satoshiBold text-primaryOrange">
        <div className="flex flex-col justify-between items-center">
          <ul className="flex space-x-32 text-[16px]">
            <li>
              <a href="#home">Home</a> {/* Scroll to the Hero section */}
            </li>
            <li>
              <a href="#members">Members</a> {/* Scroll to the Members section */}
            </li>
            <li>
              <a href="#project">Project</a> {/* Scroll to the Project section */}
            </li>
            <li>
              <a href="#contact">Contact</a> {/* Scroll to the Contact section */}
            </li>
            <div>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc74pbQOZVOnGhhrxS5W6pvEFJ8dYX_7fkvivTTyqMME_o8fQ/viewform" passHref>
                <Button>Join Us</Button>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    );
}