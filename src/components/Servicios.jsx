import React from "react";
import { Services } from "./Services";
import WorkflowCards from "./WorkflowCards";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <section className="content">
      {/* Título atractivo */}
      <h1 className="servicios-title">
        ¡Impulsa tu negocio con nuestros servicios digitales!
      </h1>

      <div className="services__card">
        <Services />
      </div>

      <div className="workflow__card">
        <WorkflowCards />
      </div>

      {/* Botones al final */}
      <div className="action-buttons">
        <Link to="/presupuesto">
          <button className="action-button budget-button">
            ¡Obtén tu presupuesto personalizado!
          </button>
        </Link>
        <Link to="/contacto">
          <button className="action-button contact-button">
            ¡Hablemos y transformemos tu visión!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Servicios;
