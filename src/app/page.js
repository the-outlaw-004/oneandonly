import AboutUs from "./compos/AboutUs";
import Amenities from "./compos/Amenities";
import Header from "./compos/Header";
import HeroSection from "./compos/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Amenities />
    </>
  );
}
