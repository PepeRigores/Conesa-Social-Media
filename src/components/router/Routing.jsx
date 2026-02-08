import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Header } from "../layout/Header";
import Inicio from "../Inicio";
import Nosotros from "../Nosotros";
import Servicios from "../Servicios";
import Portfolio from "../Portfolio";
import Presupuesto from "../Presupuesto";
import Contacto from "../Contacto";
import { Footer } from "../layout/Footer";
import AvisoLegal from "../AvisoLegal";
import PoliticaPrivacidad from "../PoliticaPrivacidad";
import PoliticaCookies from "../PoliticaCookies";


export const Routing = () => {
  return (
    <BrowserRouter className="app-container">
      {/* Header */}
      <Header />
      {/* Content */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/presupuesto" element={<Presupuesto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route
            path="*"
            element={
              <div className="page">
                <img
                  className="img-404"
                  src="/images/404.webp"
                  alt="gato verde enredado en un 404 gigante"
                />
              </div>
            }
          />
        </Routes>
      </section>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};
