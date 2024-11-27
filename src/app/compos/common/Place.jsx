import Image from "next/image";
import React from "react";

const Place = ({ place }) => {
  return (
    <>
      <Image src={place.icon} width={35} height={35} alt="Connectivity map" />
      <h2 className="font-medium text-base my-3">{place.title}</h2>
      <ul>
        {place.locals.map((local, index) => (
          <li key={index}>
            <div className="flex justify-between mb-2">
              <p>{local.desc}</p>
              <p className="font-semibold">{local.distance} Km</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Place;
