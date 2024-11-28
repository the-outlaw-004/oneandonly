import React from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import Places from "./Places";
import { places } from "../utils/placesData";
import Container from "./common/Container";
import ImageWrapper from "./common/ImageWrapper";

const Connectivity = () => {
  return (
    <div className="py-20 bg-[#FFF3E9]" id="connectivity">
      <Container>
        <div className="flex gap-14">
          <ImageWrapper
            src="/assets/images/connectivity_map.png"
            alt="Connectivity map"
            objectFit ="cover"
            wrapperClassName="w-1/2 h-[460px]"
            imageClassName=""
          />
          {/* <Image
            src="/assets/images/connectivity_map.png"
            width={350}
            height={230}
            alt="Connectivity map"
          /> */}
          <div className="flex flex-col justify-between w-1/2">
            <div>
              <SectionHeader>connectivity</SectionHeader>
              <SectionDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium animi voluptas dolorum?
              </SectionDesc>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                commodi dolorem cupiditate eligendi labore molestias veritatis
                nemo facere incidunt!
              </p>
            </div>

            <Places places={places} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Connectivity;
