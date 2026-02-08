import React from "react";
import ContactForm from "./ContactForm";
import WorkflowCards from "./WorkflowCards";

const Presupuesto = () => {
  return (
    <div className="page">
      <div className="contact-section">
        <h2>Presupuesto</h2>
        <p>
          Si estás considerando solicitar un presupuesto, no dudes en contactarnos
          a través de nuestro formulario. Estamos aquí para brindarte soluciones
          personalizadas y responderemos a tu consulta en menos de 24 horas. Tu
          éxito es nuestra prioridad, y estamos ansiosos por ayudarte a llevar tu
          proyecto al siguiente nivel. ¡Esperamos tu mensaje!
        </p>
        <div className="contact-container">
          <div className="contact-form-container">
            <ContactForm />
          </div>
          <WorkflowCards />
        </div>
      </div>
    </div>
  );
};

export default Presupuesto;
