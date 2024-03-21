import React from "react";
import '../css/header_module.css';
function Header({title}) {
  return (
    <header>
      <div className="top-header">
        <div className="container-title-header-top">
          <h2>{title}</h2>
        </div>
        <div className="container-header-top-right">
          <div className="date-inventory">
            {/* <span>
              <i className="fa-solid fa-calendar"></i>{fecha}
            </span> */}
            <input type="date" name="" id="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
