// pages/members.js
import MemberCard from '@/components/ui/MemberCard';

const members = [
  {
    name: 'Kaushik Dontula',
    title: 'President',
    image: '/images/kaushik.png', // Replace with actual image paths
    bio: 'John is the president of the club and loves organizing events.',
  },
  {
    name: 'Ayush Singh',
    title: 'Co-President',
    image: '/images/ayush.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Mandaakini',
    title: 'Vice President',
    image: '/images/mandaakini.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Tanish Hupare',
    title: 'Operations Manager',
    image: '/images/tanish.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Grant Towers',
    title: 'Technical Consultant',
    image: '/images/grant.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Cyrus',
    title: 'Operations Consultant',
    image: '/images/cryus.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Ankith',
    title: 'Operations Consultant',
    image: '/images/ankith.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Mithun',
    title: 'Financial Consultant',
    image: '/images/mithun.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Srija',
    title: 'Technical Consultant',
    image: '/images/srija.png',
    bio: 'Jane is the vice president and manages club activities.',
  },
];

const Members = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-satoshiBold text-center mb-8">
        Our Members
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;