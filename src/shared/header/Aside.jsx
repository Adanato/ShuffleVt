import { Link } from "react-router-dom";

import "./Aside.css";

function Aside({ handleSideBarToggle, isOpen }) {
  console.log(isOpen);
  return (
    <>
      {/* Turns off closing div */}
      {isOpen && (
        <div className="closing-div" onClick={handleSideBarToggle}></div>
      )}
      <aside className={`aside-bar ${isOpen ? "open" : ""}`}>
        <nav className={`aside-nav`}>
          <Link onClick={handleSideBarToggle} className="aside-link" to="/">
            Home
          </Link>
          <Link
            onClick={handleSideBarToggle}
            className="aside-link"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={handleSideBarToggle}
            className="aside-link"
            to="/learn"
          >
            Learn
          </Link>
          <Link
            onClick={handleSideBarToggle}
            className="aside-link"
            to="/portfolio"
          >
            Dancers
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
