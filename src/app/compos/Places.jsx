"use client";

import React from "react";
import Slider from "react-slick";
import SliderButton from "./common/SliderButton";
import Place from "./common/Place";

const Places = ({ places }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SliderButton type="right" classes="left-20 top-48" />,
    prevArrow: <SliderButton type="left" classes="top-48" />,
  };
  return (
    <div className="slider-container my-12">
      <Slider {...settings}>
        {places.map((item, index) => {
          console.log("item", item);
          return (
            <div key={index} className="pr-12">
              <Place place={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Places;
