import React from 'react';
import ContactForm from './ContactForm';

export const Contact = () => {
  return (
    <section className="contact-page">
            <div className="contact-section">
        {/*<h2>Presupuesto</h2>*/}
        <h3>¡Estamos aquí para ayudarte!</h3> {/* Título adicional */}
        <p>¿Tienes un proyecto en mente? Cuéntanos y descubre cómo podemos llevar tu idea al siguiente nivel. Tu éxito es nuestra prioridad.</p> {/* Subtítulo adicional */}
        <p>
          Si estás considerando solicitar un presupuesto, no dudes en contactarnos
          a través de nuestro formulario. Estamos aquí para brindarte soluciones
          personalizadas y responderemos a tu consulta en menos de 24 horas. Tu
          éxito es nuestra prioridad, y estamos ansiosos por ayudarte a llevar tu
          proyecto al siguiente nivel. ¡Esperamos tu mensaje!
        </p>
        <div className="contact-container"></div>
      <ContactForm className="contact-page__form" />
    </div>
    </section>
  );
};

export default Contact;