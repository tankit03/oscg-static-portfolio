// import TitleCard from '../../components/ui/TitleCard';
// import { TypewriterEffect } from '@/components/ui/typewriter-effect';

// export default function HeroSection() {
//   return (
//             <div className="flex flex-row items-center justify-center gap-16 mt-8">
//             <TitleCard />
//                 <div className="w-[400px] h-[400px] p-4 overflow-auto">
//                     <TypewriterEffect
//                     words={[
//                         { text: "What", className: "font-satoshiBold text-primaryOrange text-[36px]" },
//                         { text: "Do", className: "font-satoshiBold text-primaryOrange text-[36px]" },
//                         { text: "We", className: "font-satoshiBold text-primaryOrange text-[36px]" },
//                         { text: "Do ?", className: "font-satoshiBold text-primaryOrange text-[36px]" }
//                     ]}
//                     />
//                     <p className="font-satoshiMedium text-[18px] max-w-3xl text-left text-strongBlack">
//                     At the Oregon Software Consulting Group, we provide real-world experience in software
//                     consulting by working on hands-on projects and case studies. Our goal is to help students
//                     develop practical skills in problem-solving, project management, and client communication.
//                     We bring in industry experts to share insights and offer mentorship, giving our members the
//                     tools and knowledge needed to succeed in the fast-paced world of software consulting.
//                     </p>
//                 </div>
//             </div>
//   );
// }
import TitleCard from './titleCard';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 mt-8">
      {/* TitleCard */}
      <div className="w-[80%] md:w-[70%] md:max-w-[400px] h-auto mb-4 md:mb-0 pb-4">
        <TitleCard />
      </div>

      {/* TypewriterEffect */}
      <div className="w-[80%] md:w-[80%] md:max-w-[400px] h-auto p-4">
        <TypewriterEffect
          words={[
            {
              text: 'What',
              className:
                'font-satoshiBold text-primaryOrange text-[28px] md:text-[36px]',
            },
            {
              text: 'Do',
              className:
                'font-satoshiBold text-primaryOrange text-[28px] md:text-[36px]',
            },
            {
              text: 'We',
              className:
                'font-satoshiBold text-primaryOrange text-[28px] md:text-[36px]',
            },
            {
              text: 'Do ?',
              className:
                'font-satoshiBold text-primaryOrange text-[28px] md:text-[36px]',
            },
          ]}
        />
        <p className="font-satoshiMedium text-[14px] md:text-[16px] max-w-full md:max-w-3xl text-left text-strongBlack mt-4">
          At the Oregon Software Consulting Group, we provide real-world
          experience in software consulting by working on hands-on projects and
          case studies. Our goal is to help students develop practical skills in
          problem-solving, project management, and client communication. We
          bring in industry experts to share insights and offer mentorship,
          giving our members the tools and knowledge needed to succeed in the
          fast-paced world of software consulting.
        </p>
      </div>
    </div>
  );
}
