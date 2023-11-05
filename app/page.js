import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Instagram from "./components/Instagram";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import UpArrow from "./components/UpArrow";
import { SliderData } from "./data/slider-data";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider SliderData={SliderData} />
      <Instagram />
      <Contact />
      <Footer />
      <UpArrow />
    </main>
  );
}
