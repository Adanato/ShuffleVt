import "./About.css";

function About() {
  return (
    <main className="about-main">
      <Info />
    </main>
  );
}

function Info() {
  return (
    <section className="about-section">
      <header>
        <h2>About</h2>
      </header>
      <article>
        <header>
          <h3>Founder</h3>
        </header>
        <p>
          Welcome! My name is Adam Nguyen, and I am the proud founder of the
          Shuffle Club at Virginia Tech. I've been enthusiastically involved in
          shuffling for 1.5 years now. In addition to my passion for dance, I'm
          a diligent sophomore Computer Science student at Virginia Tech.
        </p>
      </article>
      <article>
        <header>
          <h3>Goals of the club</h3>
        </header>
        <p>
          The central aim of the Shuffle Club at Virginia Tech (SCVT) is to
          broaden the scope of participation in the shuffling community within
          the university, fostering a vibrant and dynamic dance culture.
        </p>
      </article>
      <article>
        <header>
          <h3>What makes us different?</h3>
        </header>
        <p>
          What sets us apart from other dance clubs is our focus on individual
          expression and a fundamental understanding of shuffling moves such as
          the Running Man, T-Step, V-Step, and Charleston. We offer our members
          the freedom to freestyle to any song of their choice, without the need
          to learn choreography. We celebrate uniqueness and encourage creative
          self-expression.
        </p>
      </article>
    </section>
  );
}
export default About;
