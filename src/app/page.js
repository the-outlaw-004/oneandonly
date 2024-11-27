import AboutUs from "./compos/AboutUs";
import Amenities from "./compos/Amenities";
import Connectivity from "./compos/Connectivity";
import Gallery from "./compos/Gallery";
import Header from "./compos/Header";
import HeroSection from "./compos/HeroSection";
import Plans from "./compos/Plans";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Amenities />
      <Connectivity />
      <Gallery />
      <Plans />
    </>
  );
}
