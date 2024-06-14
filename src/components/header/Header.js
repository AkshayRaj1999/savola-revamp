import React from "react";
import "./Header.css";
import language from "../../images/icons/languge.png";
import search from "../../images/icons/search.png";
import savola from "../../images/images/savola-logo-dark 2.png";

function Header() {
  return (
    <>
      <header className="container-fluid">
        <div className="container header-top-container">
          <div className="left-clickable-links">
            <ul className="left-links-ul">
              <li>Savola</li>
              <li>48.75</li>
              <li>-2.99%</li>
            </ul>
          </div>
          <div className="right-clickable-links">
            <ul className="right-links-ul">
              <li>LinIntegrity Hotline</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>
                <img src={language} alt="language-icon" />
              </li>
              <li>
                <img src={search} alt="language-icon" />
              </li>
            </ul>
          </div>
        </div>
        <nav>
            <div className="container navbar-wrapper">
                <ul className="navbar-ul">
                    <li><img src={savola} alt="savola-logo" /></li>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Investment</li>
                    <li>Rights Issue and Distribution</li>
                    <li>Investor Relations</li>
                    <li>Corporate Governance</li>
                    <li>Media Center</li>
                    <li>Sustainability & CSR</li>
                </ul>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
