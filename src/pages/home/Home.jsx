import "./Home.css";

function Home() {
  return (
    <main className="home-page-container">
      <Hero />
      <Gallery />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div>Shuffle </div>
        <div>And </div>
        <div>Repeat</div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <>
      <iframe
        width="320"
        height="180"
        src="https://www.youtube.com/embed/o6gHa1rTQfE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        width="320"
        height="180"
        src="https://www.youtube.com/embed/a4MSqakgyfY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        width="320"
        height="180"
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
