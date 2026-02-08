import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wantsPhoneInfo: false,
    email: "",
    serviceType: "",
    message: "",
    acceptedLegalConditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tus parámetros de EmailJS
    const serviceID = "service_7cqedpa";
    const templateID = "template_o16f2c6";
    const publicKey = "zfGww17R8HgjtwoAl";

    // Envía el formulario a través de EmailJS
    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        alert("Formulario enviado correctamente");
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        alert("Error al enviar el formulario. Inténtalo de nuevo.");
        console.error("FAILED...", error);
      }
    );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Teléfono:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label className="contact-form__checkbox-label">
        <input
          type="checkbox"
          name="wantsPhoneInfo"
          checked={formData.wantsPhoneInfo}
          onChange={handleChange}
        />
        <span>Quiero recibir información por teléfono</span>
      </label>
      <label>
        Correo Electrónico:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Tipo de Servicio:
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          <option value="diseñoGrafico">Diseño Gráfico</option>
          <option value="gestionRedes">Gestión de Redes Sociales</option>
          <option value="creacionWeb">
            Creación y Diseño de Página Web o WebApp
          </option>
        </select>
      </label>
      <label>
        Mensaje:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Cuéntanos más sobre tu proyecto y necesidades"
        />
      </label>
      <label className="contact-form__checkbox-label">
        <input
          type="checkbox"
          name="acceptedLegalConditions"
          checked={formData.acceptedLegalConditions}
          onChange={handleChange}
          required
        />
        <span>
          Acepto las{" "}
          <Link to="/aviso-legal" className="link">
            condiciones legales
          </Link>{" "}
          y la{" "}
          <Link to="/politica-privacidad" className="link">
            política de privacidad
          </Link>
          .
        </span>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
