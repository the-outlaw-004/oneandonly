"use client";
import React from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import { specification } from "../utils/specification";
import SliderButton from "./common/SliderButton";
import Slider from "react-slick/lib/slider";
import Image from "next/image";

const Specification = () => {
  const settings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SliderButton type="right" classes="top-72 right-[600px]" />,
    prevArrow: <SliderButton type="left" classes="top-72 left-[600px]" />,
  };

  return (
    <div className="py-10 text-center">
      <SectionHeader>Specification</SectionHeader>
      <SectionDesc>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        possimus culpa. Officiis.
      </SectionDesc>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        consectetur voluptates laboriosam maxime maiores rerum expedita dolores
        sequi commodi unde.
      </p>
      <div className="slider-container py-10 mx-1">
        <Slider {...settings}>
          {specification.map((item, index) => {
            return (
              <div key={index} className="px-2 my-8">
                <div
                  className={`relative h-60
                `}
                >
                  <Image
                    src={item.imageUrl || ""}
                    fill
                    alt={item.title || "image"}
                    className="rounded-2xl"
                  />
                </div>
                {item.title && (
                  <div className="">
                    <p className="text-start mt-3">{item.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Specification;
