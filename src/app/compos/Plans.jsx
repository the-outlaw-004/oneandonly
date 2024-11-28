import React from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import MultipleItems from "./common/MultipleItems";
import { plans } from "../utils/plans";
import Container from "./common/Container";

const Plans = () => {
  return (
    <div className="py-12 bg-[#FFF3E9]" id="plans">
      <Container>
        <div className="max-w-[600px]">
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
        <div className="mx-20 py-10">
          <MultipleItems
            data={plans}
            section="plans"
            content="ps-4 flex"
            imageClass=" rounded-2xl bg-[#FFCDA6] h-64"
            wrapperClass="relative px-4"
          />
        </div>
      </Container>
    </div>
  );
};

export default Plans;
