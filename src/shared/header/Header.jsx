// React library imports
import { useState } from "react";
import { Link } from "react-router-dom";

// CSS imports
import "./Header.css";

//file imports
import logo from "/src/assets/logo-white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSideBarToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <header className="main-header">
      <Link className="nav-link" to="/">
        <div className="header-container">
          <img src={logo} alt="ShuffleVT logo" className="logo" />
          <h1>ShuffleVT</h1>
        </div>
      </Link>
      {isOpen ? (
        <SideBar handleSideBarToggle={handleSideBarToggle} />
      ) : (
        <button onClick={handleSideBarToggle}>click</button>
      )}
    </header>
  );
}

function SideBar({ handleSideBarToggle }) {
  return (
    <aside className="aside-bar">
      <nav className={`main-nav`}>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link " to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link" to="/learn">
          Learn
        </Link>
      </nav>
      <button onClick={handleSideBarToggle}>click</button>
    </aside>
  );
}
// Save for later as desktop

/* function NavBar() {
  return (
    <nav className={`main-nav`}>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link " to="/portfolio">
        Portfolio
      </Link>
      <Link className="nav-link" to="/learn">
        Learn
      </Link>
    </nav>
  );
} */

export default Header;
