import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';

// components/MemberCard.js
const MemberCard = ({ name, title, image, linkedinUrl, port }) => {
    return (
        <div className="bg-primaryWhite shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 m-4">
            {/* Add width and height to the Image component */}
            <Image 
                src={image} 
                alt={name} 
                width={500}  // Adjust this width based on your image dimensions
                height={300} // Adjust this height based on your image dimensions
                className="w-full h-48 object-cover" 
            />
            <div className="p-6">
                <h2 className="text-xl font-satoshiBold text-primaryOrange">{name}</h2>
                <p className="font-satoshiBold text-primaryBlack">{title}</p>
                <div className="flex items-left">
                  <div className="flex items-center pr-4">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="w-[20px] h-[20px] text-primaryOrange mt-4" />
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a href={port} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px] text-primaryOrange mt-4" />
                    </a>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;