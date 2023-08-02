import { useState } from "react";

import "./Benefits.css";

// import gobblerConnect from "/src/assets/gclogo.png";
import fire from "/src/assets/fire.svg";
import shoe from "/src/assets/shoe.svg";
import music from "/src/assets/music.svg";

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-content">
        <h2>Why Shuffle?</h2>
        <ul className="benefits-list">
          <AccordionItem img={fire} alt="fire icon" title="Great Cardio">
            Shuffling improves cardio health and works about your core and lower
            body
          </AccordionItem>

          <AccordionItem img={shoe} alt="shoe icon" title="Impressive Moves">
            Shuffling improves cardio health and works about your core and lower
            body
          </AccordionItem>
          <AccordionItem img={music} alt="music icon" title="Music Versatility">
            Shuffling improves cardio health and works about your core and lower
            body
          </AccordionItem>
        </ul>
      </div>
    </section>
  );
}

function AccordionItem({ img, alt, children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <li className="accordion-item" onClick={handleOpen}>
      <header>
        <img className="accordion-img" src={img} alt={alt} />
        {title}
      </header>
      {isOpen && <div className="accordion-content">{children}</div>}
    </li>
  );
}

export default Benefits;
