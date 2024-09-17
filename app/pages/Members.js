// pages/members.js
import MemberCard from '@/components/ui/MemberCard';

const members = [
  {
    name: 'Kaushik Dontula',
    title: 'President',
    image: '/images/kaushik.png',
    linkedinUrl: 'https://www.linkedin.com/in/kaushikdontula/',
    port: 'https://kaushikdontula.github.io/Kaushiks_portfolio/',
  },
  {
    name: 'Ayush Singh',
    title: 'Co-President',
    image: '/images/ayush.png',
    linkedinUrl: 'https://www.linkedin.com/in/ayush0508/',
    port: 'https://github.com/Ayushpdx05'
  },
  {
    name: 'Mandaakini Raghuraman',
    title: 'Vice President',
    image: '/images/mandaakini.png',
    linkedinUrl: 'https://www.linkedin.com/in/mandaakini-raghuraman/',
  },
  {
    name: 'Tanish Hupare',
    title: 'Operations Consultant',
    image: '/images/tanish.png',
    linkedinUrl: 'https://www.linkedin.com/in/tanish-hupare/',
    port: 'https://tankit03.github.io/Personal-Portfolio/',
  },
  {
    name: 'Cyrus Shafizadeh',
    title: 'Operations Consultant',
    image: '/images/cryus.png',
    linkedinUrl: 'https://www.linkedin.com/in/cshafizadeh/',
  },
  {
    name: 'Ankith Shridhar',
    title: 'Operations Consultant',
    image: '/images/ankith.png',
   linkedinUrl: 'https://www.linkedin.com/in/ankithsridhar/',
  },
  {
    name: 'Mithun Karthikeyan',
    title: 'Financial Consultant',
    image: '/images/mithun.png',
    linkedinUrl: 'https://www.linkedin.com/in/mithunkarth/',
  },
  {
    name: 'Srija Palla',
    title: 'Technical Consultant',
    image: '/images/srija.png',
    linkedinUrl: 'https://www.linkedin.com/in/srija-palla-936b142b5/',
  },
  {
    name: 'Grant Towers',
    title: 'Technical Consultant',
    image: '/images/grant.png',
    linkedinUrl: 'https://www.linkedin.com/in/grant-towers1/',
    port: 'https://github.com/GTowers1'
  },
];

const Members = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-satoshiBold text-center mb-8 text-primaryOrange">
        Our Members
      </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                title={member.title}
                image={member.image}
                linkedinUrl={member.linkedinUrl}
                port={member.port}
              />
            ))}
          </div>
    </div>
  );
};

export default Members;