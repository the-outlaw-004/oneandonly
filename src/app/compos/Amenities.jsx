import SectionDesc from "./common/SectionDesc";
import SectionHeader from "./common/SectionHeader";
import images from "../utils/images";
import Slider from "./common/Slider";

const Amenities = () => {
  return (
    <div className="py-12 text-center bg-[#FFF3E9]">
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

      <Slider data={images} />
    </div>
  );
};

export default Amenities;
