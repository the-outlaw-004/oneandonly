import AboutUs from "./compos/AboutUs";
import Amenities from "./compos/Amenities";
import Connectivity from "./compos/Connectivity";
import Developer from "./compos/Developer";
import Footer from "./compos/Footer";
import Gallery from "./compos/Gallery";
import Header from "./compos/Header";
import HeroSection from "./compos/HeroSection";
import Plans from "./compos/Plans";
import Specification from "./compos/Specification";

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
      <Specification />
      <Developer />
      <Footer />
    </>
  );
}
