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
          <AccordionItem />
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

function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <li className="accordion-item" onClick={handleOpen}>
      <header>
        <img src={fire} alt="fire icon" />
        Great Cardio
      </header>
      {isOpen && (
        <div className="accordion-content">
          Shuffling improves cardio health and works about your core and lower
          body
        </div>
      )}
    </li>
  );
}

export default Benefits;
