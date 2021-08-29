import React, { useState } from "react";
import { navLinks } from "../dataSource"
import "../assets/styles/navbar.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () =>{
    setActive(!isActive);
    console.log("Event has been triggered")
  } 
  const closeMobileMenu = () => setActive(false);
  const NavLinks = navLinks.map((link, i) =>(
          <li className="list-item trans" key={link.title+i} onClick={closeMobileMenu}>
            <a className="any_link" href={link.url}>{link.title}</a>
          </li>
  ))
  return (
    <nav className="navbar g_margin">
      <div className="logo-nav">
        <div className="logo-container trans">
          <a href="#/">
            <img src="/images/logo.png" alt="Logo" className="logo-img"/>
          </a>
        </div>
      </div>
      <ul className={isActive ? "nav-list active" : "nav-list"}>
          {NavLinks}
      </ul>
      <div className="menu" onClick={handleClick}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;