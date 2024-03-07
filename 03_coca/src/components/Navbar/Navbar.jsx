import React, { useState } from "react";
import { Logo } from "../../assets";
import { navLinks } from "../../constants";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((link, index) => {
          const { id, title } = link;
          return (
            <li key={index}>
              <a href={`#${id}`}>{title}</a>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-smallscreen">
        <RiMenu3Line
          color="#EB6E46"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiCloseLine
              color="#EB6E46"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {navLinks.map((link, index) => {
                const { id, title } = link;
                return (
                  <li key={index} onClick={() => setToggleMenu(false)}>
                    <a href={`#${id}`}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
