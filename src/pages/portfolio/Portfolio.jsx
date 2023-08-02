import "./Portfolio.css";

function Portfolio() {
  return (
    <main className="portfolio-main">
      <Dancers />
    </main>
  );
}

function Dancers() {
  return (
    <section className="dancers-section">
      Join us on GobblerConnect <br />
      and be one of the first
    </section>
  );
}

//Some day they'll join
// function DancerCard() {
//   return <div>Dancer Null</div>;
// }
export default Portfolio;
