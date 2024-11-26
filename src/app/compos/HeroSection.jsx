import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center relative overflow-y-hidden ">
      <Image
        src="/assets/images/rectangular-living-room.jpg"
        width={1200}
        height={500}
        alt="hero image"
        className="rounded-5"
      ></Image>
      <div
        className="fixed translate-y-1/2 -rotate-90 right-5 flex flex-row gap-2 top-36"
        style={{
          transform: "rotate(-90deg), translate(50%, -100%)",
          transformOrigin: "top right",
        }}
      >
        <button className="bg-orange-300">
          <span className="block"> Enquire now</span>
        </button>
        <button className="bg-orange-300">
          <span className="block">Download Brochure</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
