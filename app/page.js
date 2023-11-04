import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { SliderData } from "./data/slider-data";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider SliderData={SliderData}/>
    </main>
  );
}
