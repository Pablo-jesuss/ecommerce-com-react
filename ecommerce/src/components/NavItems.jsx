import { Link } from "react-router-dom";
import React, { useState } from "react";

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
            <div className="logo-search-acte"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
