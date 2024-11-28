import React from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import Image from "next/image";
import Container from "./common/Container";
import ImageWrapper from "./common/ImageWrapper";

const Developer = () => {
  return (
    <div className="py-20 bg-[#FFF3E9]" id="developer_section">
      <Container>
        <div className="container flex justify-center mx-auto gap-14">
          <div className="w-1/2">
            <SectionHeader>about the developer</SectionHeader>
            <SectionDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              odit consequatur voluptate quasi enim, placeat eius! Quasi,
              aperiam.
            </SectionDesc>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi in dicta, quaerat velit voluptas dolores voluptate ipsum
              voluptates doloremque?
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat?
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam.
            </p>
          </div>
          <div className="w-1/2 relative">
            <div className="flex justify-end">
              <ImageWrapper
                src="/assets/images/best_avenue.png"
                alt="building logo1"
                wrapperClassName="px-20 h-20 border-r border-black"
                imageClassName=""
              />

              <ImageWrapper
                src="/assets/images/park_avenue.png"
                alt="building logo2"
                wrapperClassName="px-16 ms-4 h-20"
                imageClassName=""
              />
            </div>
            <div className="my-5">
              <ImageWrapper
                src="/assets/images/developerSection.png"
                alt="Developer Section image"
                objectFit="cover"
                wrapperClassName="h-72"
                imageClassName="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Developer;
