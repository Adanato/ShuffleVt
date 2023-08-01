import "./Home.css";

function Home() {
  return (
    <main className="home-page-container">
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
    </main>
  );
}

export default Home;
