"use client";
import React, { useRef } from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import { specification } from "../utils/specification";
import SliderButton from "./common/SliderButton";
import Slider from "react-slick/lib/slider";
import Image from "next/image";

const Specification = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

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
    arrows: false,
    // nextArrow: (
    //   <SliderButton type="right" classes="top-[360px] right-[600px] z-10" />
    // ),
    // prevArrow: (
    //   <SliderButton type="left" classes="top-[360px] left-[600px] z-10" />
    // ),
  };

  return (
    <div className="py-10 text-center" id="specification">
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
      <div className="slider-container specification-slider py-10 mx-1">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {specification.map((item, index) => {
            return (
              <div
                key={index}
                className="relative rounded-[30px] overflow-hidden px-2 my-8"
              >
                <div
                  className={`imageWrapper relative
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
                  <div className="absolute bottom-0 hidden left-0 right-0 py-2 mx-2 bg-opacity-90  text-center bg-[#FFF3E9] rounded-b-2xl">
                    <p className="">{item.title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </Slider>
        <div className="text-center gap-4">
          <button
            className="rounded-lg px-4 me-4 bg-[#FFEEE0] hover:bg-[#FFCDA6]"
            onClick={previous}
          >
            <img src="/assets/images/left_arrow.png" alt="Prev" />
          </button>

          <button
            className="rounded-lg px-4 bg-[#FFEEE0] hover:bg-[#FFCDA6]"
            onClick={next}
          >
            <img src="/assets/images/right_arrow.png" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specification;
