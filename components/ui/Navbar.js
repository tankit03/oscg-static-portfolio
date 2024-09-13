import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
    return (
        <nav className="flex flex-col pt-4 font-satoshiBold text-primaryBlack">
            <div className="flex flex-col justify-between items-center">
                {/* Top section with navigation links */}
                <ul className="flex space-x-40 text-[16px]">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/Members">
                            Members
                        </Link>
                    </li>
                    <li>
                        <Link href="/Project">
                            Project
                        </Link>
                    </li>
                    <div d>
                    <Button>Contact Us</Button>
                    </div>
                </ul>
            </div>
        </nav>
    );
}
