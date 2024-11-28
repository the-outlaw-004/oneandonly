import React from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import MultipleItems from "./common/MultipleItems";
import { plans } from "../utils/plans";

const Plans = () => {
  return (
    <div className="py-12 bg-[#FFF3E9]">
      <div className="mx-40 max-w-[600px]">
        <SectionHeader>unit plans</SectionHeader>
        <SectionDesc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          voluptates nisi iusto.
        </SectionDesc>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea amet
          nobis veniam explicabo maiores quae nesciunt iste sed maxime
          aspernatur!
        </p>
      </div>
      <div className="max-w-4xl mx-auto py-10">
        <MultipleItems
          data={plans}
          section="plans"
          content="ps-4 flex"
          imageClass="blur-[2px] rounded-2xl bg-[#FFCDA6] h-64"
          wrapperClass="relative px-4"
        />
      </div>
    </div>
  );
};

export default Plans;
