import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw,faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Necoland <FontAwesomeIcon className="navbar-logo-icon" icon={faPaw} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/voice-lines"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Voice Lines
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lore" className="nav-links" onClick={closeMobileMenu}>
                Lore
              </Link>
            </li>
            <li className="nav-item">
              <Link to="sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sing Up
              </Link>
            </li>
          </ul>
          {button && <Button path="sign-up" buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
