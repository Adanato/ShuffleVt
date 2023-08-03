import "./Home.css";

// Import components
import Hero from "./Hero";
import Benefits from "./Benefits";
import Gallery from "./Gallery";
import CallToAction from "./CTA";
function Home() {
  return (
    <main className="home-page-container">
      <Hero />
      <Benefits />
      <Gallery />
      <CallToAction />
    </main>
  );
}

export default Home;
