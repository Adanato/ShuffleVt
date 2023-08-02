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
          <li>
            <img src={fire} alt="fire icon" />
            Great Cardio
          </li>
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

export default Benefits;
