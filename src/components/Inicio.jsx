import React, { useEffect } from "react";
import "../App.css"; // Aquí importarías tu archivo de estilos
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in"); // Selecciona todos los elementos con la clase fade-in
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          element.classList.add("visible"); // Agrega la clase visible cuando el elemento está en el viewport
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar la función al montar el componente

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiar el listener al desmontar
    };
  }, []);

  return (
    <div className="inicio">
      {/* Hero Section */}
      <section className="hero-section fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            ¡Impulsa tu presencia digital de manera sencilla y efectiva!
          </h1>
          <p className="hero-subtitle">
            Nos encargamos de cada detalle para que tú te enfoques en tu
            negocio.
          </p>
          <div className="hero-buttons">
            <button
              className="hero-button hero-button--primary"
              onClick={() => navigate("/contacto")}
            >
              Contáctanos
            </button>
            <button
              className="hero-button hero-button--secondary"
              onClick={() => navigate("/servicios")}
            >
              Explorar Servicios
            </button>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* Servicios Section */}
      <section className="servicios-section fade-in">
        <h1>Nuestros Servicios</h1>
        <div className="servicios-list">
          <div className="servicio-card">
            <h3>Desarrollo Web</h3>
            <p>
              Creación de sitios web profesionales, optimizados para cualquier
              dispositivo.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Redes Sociales</h3>
            <p>
              Estrategias para mejorar tu presencia en redes sociales y motores
              de búsqueda.
            </p>
          </div>
          <div className="servicio-card">
            <h3>Diseño Gráfico</h3>
            <p>
              Creamos identidades visuales impactantes que capturan la esencia
              de tu marca, desde logotipos hasta materiales de marketing,
              asegurando que tu mensaje resuene en tu audiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="proceso-section fade-in">
        <h1>Cómo Trabajamos</h1>
        <div className="proceso-timeline">
          <div className="proceso-step proceso-step--left">
            <h4>Paso 1: Consulta</h4>
            <p>Conocemos tus necesidades y objetivos.</p>
          </div>
          <div className="proceso-step proceso-step--right">
            <h4>Paso 2: Planificación</h4>
            <p>Diseñamos una estrategia personalizada.</p>
          </div>
          <div className="proceso-step proceso-step--left">
            <h4>Paso 3: Desarrollo</h4>
            <p>Construimos y optimizamos tu solución digital.</p>
          </div>
          <div className="proceso-step proceso-step--right">
            <h4>Paso 4: Entrega</h4>
            <p>Te entregamos el proyecto listo para lanzarse.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section fade-in">
        <h2>¿Listo para llevar tu negocio al siguiente nivel?</h2>
        <button
          className="hero-button hero-button--primary"
          onClick={() => navigate("/contacto")}
        >
          Hablemos
        </button>
      </section>
    </div>
  );
};

export default Inicio;
