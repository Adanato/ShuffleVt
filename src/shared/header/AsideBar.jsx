import { Link } from "react-router-dom";

import closemenubar from "/src/assets/menu-x.png";

import "./AsideBar.css";

function SideBar({ handleSideBarToggle }) {
  return (
    <div className="closing-div" onClick={handleSideBarToggle}>
      <aside className="aside-bar">
        <nav className={`aside-nav`}>
          <Link className="aside-link" to="/">
            Home
          </Link>
          <Link className="aside-link" to="/about">
            About
          </Link>
          <Link className="aside-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="aside-link" to="/learn">
            Learn
          </Link>
        </nav>
        <img
          src={closemenubar}
          className="close-menu"
          onClick={handleSideBarToggle}
        />
      </aside>
    </div>
  );
}

export default SideBar;
