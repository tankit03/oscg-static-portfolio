// components/ui/Members.js

export default function Members() {
  return (
    <section id="members" className="flex flex-col items-center justify-center mt-16 w-full">
      <h2 className="font-satoshiBold text-[32px] text-primaryOrange mb-8">
        Members
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Member 1 */}
        <div className="flex flex-col items-center">
          <p className="font-satoshiMedium text-[18px] text-primaryOrange">Member 1</p>
        </div>
        {/* Member 2 */}
        <div className="flex flex-col items-center">
          <p className="font-satoshiMedium text-[18px] text-primaryOrange">Member 2</p>
        </div>
        {/* Add more members as needed */}
      </div>
    </section>
  );
}