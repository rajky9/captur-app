import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Hero
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Navbar />
    </main>
  );
}
