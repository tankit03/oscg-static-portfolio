export default function TitleCard() {

    
    return (
<div
    className="w-[400px] h-[400px] rounded-[30px] bg-primaryOrange bg-opacity-10 flex justify-center items-center"
    style={{
        boxShadow: `
            0px 40px 60px rgba(216, 64, 11, 0.2),   /* Larger shadow with softer blur */
            0px 20px 40px rgba(216, 64, 11, 0.15),  /* Medium shadow for smooth projection */
            0px 10px 20px rgba(216, 64, 11, 0.1)    /* Small, closer shadow */
        `,
        backdropFilter: 'blur(60px)',
        border: '1px solid rgba(255, 255, 255, 0.01)',
    }}
>
            <div className="text-left pr-6 pl-6 items-start">
            <h1 id="typewriter" className="font-satoshiBold text-[46px] font-normal font-bold text-primaryBlack leading-tight pb-6">
                <span className="line">Oregon</span><br />
                <span className="line">Software</span><br />
                <span className="line">Consulting</span><br />
                <span className="line">Group</span>
            </h1>
                <p className="font-satoshiLight">
                    Event-driven working together to achieve excellence in software consulting and development.
                </p>
            </div>
        </div>
    );
}