import "./Hero.css";

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
        <a
          href="https://gobblerconnect.vt.edu/organization/shuffle"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link"
        >
          <button className="cta-box">Join Us</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
