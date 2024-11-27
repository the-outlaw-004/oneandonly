import Image from "next/image";
import React from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import Places from "./Places";
import { places } from "../utils/placesData";

const Connectivity = () => {
  return (
    <div className="flex justify-center mx-auto gap-14 py-14 bg-[#FFF3E9]">
      <Image
        src="/assets/images/connectivity_map.png"
        width={350}
        height={230}
        alt="Connectivity map"
      />
      <div className="max-w-[600px]">
        <SectionHeader>connectivity</SectionHeader>
        <SectionDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          animi voluptas dolorum?
        </SectionDesc>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit commodi
          dolorem cupiditate eligendi labore molestias veritatis nemo facere
          incidunt!
        </p>

          <Places places={places} />
      </div>
    </div>
  );
};

export default Connectivity;
