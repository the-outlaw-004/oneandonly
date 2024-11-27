import React from "react";
import SectionHeader from "./common/SectionHeader";
import SectionDesc from "./common/SectionDesc";
import MultipleItems from "./common/MultipleItems";
import { gallery } from "../utils/gallery";

const Gallery = () => {
  return (
    <div className="text-center my-12">
      <SectionHeader>gallery</SectionHeader>
      <SectionDesc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        repudiandae adipisci suscipit.
      </SectionDesc>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit
        facere possimus cumque eos esse facilis ex quia cupiditate sint.
      </p>
      <div className="max-w-4xl mx-auto py-12">
        <MultipleItems data={gallery} slidesToShow={5} imageClass="w-50 h-72" section="gallery" />
      </div>
    </div>
  );
};

export default Gallery;
