import SectionDesc from "./common/SectionDesc";
import SectionHeader from "./common/SectionHeader";
import images from "../utils/images";
import MultipleItems from "./common/MultipleItems";

const Amenities = () => {
  return (
    <div className="py-12 text-center bg-[#FFF3E9] mb-[180px]">
      <SectionHeader>amenities</SectionHeader>
      <SectionDesc>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestiae
        recusandae ratione!
      </SectionDesc>

      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error
        laudantium nam minus quasi temporibus vero, voluptatibus at odio?
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi.</p>
      <div className="max-w-4xl mx-auto py-12 -mb-[180px]">
        <MultipleItems data={images.resources} slidesToShow={4} content="ps-4" />
      </div>
    </div>
  );
};

export default Amenities;
