import React from "react";
import './style.css';
import PageLayout from "../pagelayout";

function Footer() {
  return (
    <div className="Footer">
      <PageLayout>
        <div className="Footer-content">
          <div className="Footer-content-first">
            <div className="Footer-content-first-items_container-logo" href="#">
              <img src="./StarLogo.png" alt="logo" />
              <span className="Navbar-items_container-logo-text">Ink. House</span>
            </div>
            <ul className="Footer-content-li title notmobile">
              <li>+7 (999) 543-54-54</li>
              <li>Мастерская</li>
            </ul>
          </div>

          <div className="Footer-content-second">
            <div className="Footer-content-ul">
              <ul className="Footer-content-li title mobile">
                <li>+7 (999) 543-54-54</li>
                <li>Мастерская</li>
              </ul>
              <ul className="Footer-content-li">
                <li>Репродукции</li>
                <li>Франция</li>
                <li>Германия</li>
                <li>Англия</li>
              </ul>
              <ul className="Footer-content-li">
                <li>Новинки</li>
                <li>2021</li>
                <li>2020</li>
              </ul>
              <ul className="Footer-content-li">
                <li>О нас</li>
                <li>Художники</li>
                <li>Менеджеры</li>
              </ul>
            </div>
            <div className="Footer-content-second-socials">
              <div className="Footer-content-second-socials-icons">
                <img src="/facebook.png" alt="facebook" />
                <img src="/instagram.png" alt="instagram" />
                <img src="/youtube.png" alt="youtube" />
              </div>
              <div className="Footer-content-second-socials-title">
                <p>Ink. House ®</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default Footer;