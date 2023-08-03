import { useState } from "react";

import "./Benefits.css";

import xArrow from "/src/assets/xArrow.svg";
import downArrow from "/src/assets/downarrow.svg";
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
            Shuffling is an excellent cardio workout that gets your heart
            pumping. Not only does it burn calories, but it also helps to
            improve heart health and boost your overall endurance.
          </AccordionItem>

          <AccordionItem
            img={shoe}
            alt="shoe icon"
            title="Impressive Moves"
            id={2}
            openItem={openItem}
            setOpenItem={setOpenItem}
          >
            Shuffling provides an avenue to impress on the dance floor with
            complex and rhythmic movements. These moves can enhance
            coordination, improve balance, and add a distinct flair to your
            dance repertoire.
          </AccordionItem>
          <AccordionItem
            img={music}
            alt="music icon"
            title="Music Versatility"
            id={3}
            openItem={openItem}
            setOpenItem={setOpenItem}
          >
            Shuffling is not limited to a single genre of music. Its versatile
            nature allows you to shuffle to various music styles, from
            electronic dance music to hip hop, thus enhancing your musicality
            and rhythm.
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
    <li className={`accordion-item ${openItem === id ? "open" : ""}`}>
      <button onClick={handleOpen}>
        <div className="accordion-title">
          <img className="accordion-img" src={img} alt={alt} />
          {title}
        </div>

        {openItem === id ? (
          <img className="icon" src={xArrow} alt="close accordion" />
        ) : (
          <img className="icon" src={downArrow} alt="arrow down" />
        )}
      </button>
      <div className="accordion-content">
        <div className="accordion-content-inner">{children}</div>
      </div>
    </li>
  );
}

export default Benefits;
