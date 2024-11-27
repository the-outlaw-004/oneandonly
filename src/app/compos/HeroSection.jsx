import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center relative overflow-y-hidden">
      <Image
        src="/assets/images/rectangular-living-room.jpg"
        width={1200}
        height={400}
        alt="hero image"
        className="rounded-3xl filter_brightness"
      ></Image>
      <div className="absolute left-40 top-40 text-white ">
        <h1 className="text-3xl pb-2 heroContent">
          Your Journey to Luxury
          <br /> Begins Here
        </h1>
        <p className="font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br /> Neque quaerat repellendus sint tempore delectus perspiciatis.
        </p>
      </div>
      <div
        className="fixed translate-y-1/2 -rotate-90 right-5 flex flex-row gap-2 top-36"
        style={{
          transform: "rotate(-90deg), translate(50%, -100%)",
          transformOrigin: "top right",
        }}
      >
        <button className="bg-orange-200 rounded">
          <span className="block p-1"> Enquire now</span>
        </button>
        <button className="bg-orange-200 rounded">
          <span className="block p-1">Download Brochure</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
