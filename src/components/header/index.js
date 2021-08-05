import React, { useState } from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Tee-Sharp</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <i
            class="fi-rr-apps menu-icon"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default Header;
