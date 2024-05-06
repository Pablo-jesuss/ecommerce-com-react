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
    <header>
      <div>
        <div className="container">
          <div className="header-top-area">
            <span>Create Accout</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
