import ContactCard from "@/components/ui/ContactCard";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";


export default function Contact() {
    return (
        <>
            <h1 className="font-satoshiBold text-4xl text-primaryOrange mb-8">
                Contact Us
            </h1>
            <div className="flex flex-row items-center justify-center gap-16 mt-8">
                <ContactCard />
                <div className="w-[400px] h-[400px] p-4 overflow-auto">
                    <TypewriterEffect words={[
                        { text: "Find", className: "font-satoshiBold text-primaryOrange text-[36px]" },
                        { text: "Us", className: "font-satoshiBold text-primaryOrange text-[36px]" },
                        { text: "@", className: "font-satoshiBold text-primaryOrange text-[36px]" },
                    ]} />
                    <h2 className="font-satoshiBold text-[24px] text-primaryOrange">
                        Email:
                    </h2>
                    <p className="font-satoshiRegular text-[18px] max-w-3xl text-left text-primaryWhite">
                    oregonscg@gmail.com
                    </p>
                    <h2 className="font-satoshiBold text-[24px] text-primaryOrange">
                        Instagram:
                    </h2>
                    <Link href="https://www.instagram.com/oscgosu/">
                        <p className="font-satoshiRegular text-[18px] max-w-3xl text-left text-primaryWhite">
                            @oscgosu
                        </p>
                    </Link>
                    <h2 className="font-satoshiBold text-[24px] text-primaryOrange">
                        LinkedIn:
                    </h2>
                    <Link href="https://www.linkedin.com/company/oregon-software-consulting-group">
                        <p className="font-satoshiRegular text-[18px] max-w-3xl text-left text-primaryWhite">
                        @Oregon-Software-Consulting-Group 
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
}