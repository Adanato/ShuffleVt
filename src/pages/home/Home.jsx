import "./Home.css";

import gobblerConnect from "/src/assets/gclogo.png";
function Home() {
  return (
    <main className="home-page-container">
      <Hero />
      <Benefits />
      <Gallery />
    </main>
  );
}

// Simple text with call to action
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div>Shuffle </div>
          <div>Breath </div>
          <div>Repeat</div>
        </div>
        {/* <img src={gobblerConnect} alt="gobbler connect logo image" /> */}
        <div className="cta-box">
          <a
            href="https://gobblerconnect.vt.edu/organization/shuffle"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}
// Reasons Section

function Benefits() {
  return (
    <section className="benefits-section">
      <h2>Why Shuffle?</h2>
      <ul>
        <li>Great Cardio</li>
        <li>Impressive Moves</li>
        <li>Music Versatility</li>
      </ul>
    </section>
  );
}
// Display shuffling videos
function Gallery() {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/o6gHa1rTQfE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/a4MSqakgyfY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/ZzsYms-WkBs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
}
export default Home;
