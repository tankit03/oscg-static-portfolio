// pages/members.js
import MemberCard from '@/components/ui/MemberCard';

const members = [
  {
    name: 'John Doe',
    title: 'President',
    image: '/images/john.jpg', // Replace with actual image paths
    bio: 'John is the president of the club and loves organizing events.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice President',
    image: '/images/jane.jpg',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice President',
    image: '/images/jane.jpg',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice President',
    image: '/images/jane.jpg',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice President',
    image: '/images/jane.jpg',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice President',
    image: '/images/jane.jpg',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice President',
    image: '/images/jane.jpg',
    bio: 'Jane is the vice president and manages club activities.',
  },
  {
    name: 'Jane Smith',
    title: 'Vice President',
    image: '/images/jane.jpg',
    bio: 'Jane is the vice president and manages club activities.',
  },
];

const Members = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-satoshiBold text-primaryOrange text-center mb-8">
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