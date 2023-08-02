import { useState } from "react";

import "./Benefits.css";

// import gobblerConnect from "/src/assets/gclogo.png";
import fire from "/src/assets/fire.svg";
import shoe from "/src/assets/shoe.svg";
import music from "/src/assets/music.svg";

function Benefits() {
  const [openItem, setOpenItem] = useState(null);
  return (
    <section className="benefits-section">
      <div className="benefits-content">
        <h2>Why Shuffle?</h2>
        <ul className="benefits-list">
          <AccordionItem
            img={fire}
            alt="fire icon"
            title="Great Cardio"
            id={1}
            openItem={openItem}
            setOpenItem={setOpenItem}
          >
            Shuffling improves cardio health and works about your core and lower
            body
          </AccordionItem>

          <AccordionItem
            img={shoe}
            alt="shoe icon"
            title="Impressive Moves"
            id={2}
            openItem={openItem}
            setOpenItem={setOpenItem}
          >
            Shuffling improves cardio health and works about your core and lower
            body
          </AccordionItem>
          <AccordionItem
            img={music}
            alt="music icon"
            title="Music Versatility"
            id={3}
            openItem={openItem}
            setOpenItem={setOpenItem}
          >
            Shuffling improves cardio health and works about your core and lower
            body
          </AccordionItem>
        </ul>
      </div>
    </section>
  );
}

function AccordionItem({
  img,
  alt,
  children,
  title,
  id,
  openItem,
  setOpenItem,
}) {
  function handleOpen() {
    setOpenItem(openItem === id ? null : id);
  }

  return (
    <li className="accordion-item" onClick={handleOpen}>
      <header>
        <img className="accordion-img" src={img} alt={alt} />
        {title}
      </header>
      {openItem === id && <div className="accordion-content">{children}</div>}
    </li>
  );
}

export default Benefits;
