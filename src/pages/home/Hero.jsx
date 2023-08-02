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

export default Hero;
