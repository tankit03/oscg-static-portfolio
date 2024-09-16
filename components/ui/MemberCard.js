// components/MemberCard.js
const MemberCard = ({ name, title, image, bio }) => {
    return (
      <div className="bg-primaryWhite shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 m-4">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-satoshiBold text-primaryOrange">{name}</h2>
          <p className="font-satoshiBold text-primaryBlack">{title}</p>
          <p className="mt-2 font-satoshiRegular text-primaryBlack">{bio}</p>
        </div>
      </div>
    );
  };
  
  export default MemberCard;