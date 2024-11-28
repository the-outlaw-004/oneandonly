import Image from "next/image";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";

const AboutUs = () => {
  return (
    <div className="flex justify-center gap-14 mx-auto py-24">
      <Image
        src="/assets/images/about_us.png"
        width={280}
        height={280}
        alt="about us image"
        className="rounded-xl"
      />
      <div className="my-auto max-w-[410px]">
        <SectionHeader>about us</SectionHeader>
        <SectionDesc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel
          quae suscipit consectetur. Eveniet?
        </SectionDesc>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          reiciendis officia adipisci consequuntur!
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          alias aperiam animi illum reprehenderit at, id odio possimus in
          distinctio eos atque ea?
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          impedit.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
