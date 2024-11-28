import ImageWrapper from "./common/ImageWrapper";

const HeroSection = () => {
  return (
    <div className="flex justify-center relative overflow-y-hidden">
      <ImageWrapper
        src="/assets/images/rectangular-living-room.jpg"
        alt="Hero Image"
        objectFit="cover"
        wrapperClassName="h-[550px] w-full mx-8"
        imageClassName="rounded-[32px] filter_brightness"
      />

      {/* <Image
        src="/assets/images/rectangular-living-room.jpg"
        width={1300}
        height={480}
        alt="hero image"
        className="rounded-3xl filter_brightness"
      ></Image> */}
      <div className="absolute left-24 top-40 max-w-xs text-white ">
        <h1 className="text-3xl pb-2 heroContent">
          Your Journey to Luxury Begins Here
        </h1>
        <p className="font-medium text-xs">
          Lorem ipsum dolor sit amet consectetur. Tristique diam ultricies at
          elit. Tincidunt diam turpis id magna fringilla.
        </p>
      </div>
      <div
        className="fixed z-10 translate-y-1/2 -rotate-90 right-5 flex flex-row gap-2 top-36"
        style={{
          transform: "rotate(-90deg), translate(50%, -100%)",
          transformOrigin: "top right",
        }}
      >
        <button className="bg-orange-200 py-1 px-3  rounded">Enquire now</button>
        <button className="bg-orange-200 py-1 px-3 rounded">Download Brochure</button>
      </div>
    </div>
  );
};

export default HeroSection;
