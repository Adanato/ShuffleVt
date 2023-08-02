import "./Home.css";

// import gobblerConnect from "/src/assets/gclogo.png";
import fire from "/src/assets/fire.svg";
import shoe from "/src/assets/shoe.svg";
import music from "/src/assets/music.svg";
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
          <div>Breath </div>
          <div>Shuffle </div>
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
      <div className="benefits-content">
        <h2>Why Shuffle?</h2>
        <ul className="benefits-list">
          <li>
            <img src={fire} alt="fire icon" />
            Great Cardio
          </li>
          <li>
            <img src={shoe} alt="shoe icon" />
            Impressive Moves
          </li>
          <li>
            <img src={music} alt="music icon" />
            Music Versatility
          </li>
        </ul>
      </div>
    </section>
  );
}
// Display shuffling videos
function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2>Videos</h2>
        <div className="gallery-videos">
          <iframe
            width="300px"
            height="160px"
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
        </div>
      </div>
    </section>
  );
}

export default Home;
