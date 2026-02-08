import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  // State for menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1 className="header__logo-title">conesa social media</h1>
        </div>
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link" onClick={toggleMenu}>
                Inicio
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/nosotros"
                className="header__nav-link"
                onClick={toggleMenu}
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/presupuesto"
                className="header__nav-link"
                onClick={toggleMenu}
              >
                Presupuesto
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/servicios"
                className="header__nav-link"
                onClick={toggleMenu}
              >
                Servicios
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/contacto"
                className="header__nav-link"
                onClick={toggleMenu}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className={`header__menu ${isMenuOpen ? "header__menu--open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
        </div>
      </header>
    </>
  );
};
