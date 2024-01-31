import React, { useState } from "react";
import './style.css';
import PageLayout from "../pagelayout";

function Navbar({ scrollTo, reproductionsRef, newitemsRef, aboutUsRef }) {
  const [activeMenu, setActive] = useState(false);
  return (
    <header>
      <div className="Navbar-items_container-logo mobil-logo" href="#"><img src="./StarLogo.png" alt="logo" /> <span className="Navbar-items_container-logo-text">Ink. House</span></div>
      <nav className="Navbar ">
        <PageLayout>
          <div className="Navbar-items_container">
            <a className="Navbar-items_container-logo link" href="#"><img src="./StarLogo.png" alt="logo" /> <span className="Navbar-items_container-logo-text">Ink. House</span></a>
            <div className="Navbar-items_container-items">
              <div onClick={() => setActive(!activeMenu)} className={`Burger ${activeMenu ? 'active' : ''}`}>
                <span></span>
              </div>
              <div className="Navbar-items_container-items-menu">
                <button onClick={() => scrollTo(reproductionsRef)} className="Navbar-items_container-items-menu-button">Репродукции</button>
                <button onClick={() => scrollTo(newitemsRef)} className="Navbar-items_container-items-menu-button">Новинки</button>
                <button onClick={() => scrollTo(aboutUsRef)} className="Navbar-items_container-items-menu-button">О нас</button>
              </div>
              <button className={`Navbar-items_container-items-basket ${activeMenu ? 'active' : ''}`} />
            </div>
          </div>
        </PageLayout>
      </nav>
      <div className={`Navbar-items_container-items-menu_mobile ${activeMenu ? 'active' : ''}`}>
        <button className="Navbar-items_container-items-menu-button">Репродукции</button>
        <button className="Navbar-items_container-items-menu-button">Новинки</button>
        <button className="Navbar-items_container-items-menu-button">О нас</button>
      </div>
    </header>
  )
}

export default Navbar;