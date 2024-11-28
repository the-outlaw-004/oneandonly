"use client";

import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import SliderButton from "./SliderButton";

const MultipleItems = ({
  data,
  imageClass = "h-64",
  content = "",
  section = "amenities",
  slidesToShow = 3,
  wrapperClass = "",
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SliderButton type="right" classes="-right-20" />,
    prevArrow: <SliderButton type="left" classes="-left-20" />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div key={index} className={wrapperClass}>
              <div
                className={`relative ${imageClass} ${
                  section === "gallery" && index % 2 == 0 && "mt-12"
                }
                `}
              >
                <Image
                  src={item.imageUrl || ""}
                  objectFit="contain"
                  fill
                  sizes="100%"
                  alt={item.title || "image"}
                  className="rounded-2xl"
                />
              </div>
              {section === "plans" && (
                <button className="absolute top-28 left-24 rounded bg-white px-2 py-1 z-100">
                  Enquire now
                </button>
              )}
              {item.title && (
                <div className={`${content}`}>
                  <p className="text-start mt-3">{item.title}</p>
                </div>
              )}
              {item.features && (
                <div className={`${content} mt-2`}>
                  {/* {item.features.map(feature=>
                    <span>{feature}</span>
                  )} */}
                  <p>{item.features.join(" │ ")}</p>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MultipleItems;
