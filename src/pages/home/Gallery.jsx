import "./Gallery.css";

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

export default Gallery;
