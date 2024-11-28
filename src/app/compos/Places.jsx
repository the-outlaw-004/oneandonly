"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
// import SliderButton from "./common/SliderButton";
import Place from "./common/Place";

const Places = ({ places }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <SliderButton type="right" classes="left-20 top-48" />,
    // prevArrow: <SliderButton type="left" classes="top-48" />,
  };
  return (
    <>
      <div className="slider-container ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {places.map((item, index) => {
            return (
              <div key={index} className="pr-8">
                <Place place={item} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="text-start gap-4">
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
    </>
  );
};

export default Places;
