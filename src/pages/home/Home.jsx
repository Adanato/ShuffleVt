import "./Home.css";

// Import components
import Hero from "./Hero";
import Benefits from "./Benefits";
import Gallery from "./Gallery";

function Home() {
  return (
    <main className="home-page-container">
      <Hero />
      <Benefits />
      <Gallery />
    </main>
  );
}

export default Home;
