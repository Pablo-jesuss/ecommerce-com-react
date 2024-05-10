import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // addevent listener

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Accout</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>

      <div className="header-botton">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* menu */}
            <div className="menu-area">
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Shop</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
