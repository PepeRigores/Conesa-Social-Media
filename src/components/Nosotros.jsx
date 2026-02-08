import React from "react";
import "./AboutUs.css";
import Presupuesto from "./Presupuesto";
import { Services } from "./Services";

const Nosotros = () => {
  return (
    <section className="about-us">
      <h1>Conócenos un poco más</h1>
      <p>
        En nuestra empresa, contamos con una{" "}
        <strong>sólida trayectoria y con experiencia</strong> en el sector,
        lo que nos posiciona como líderes en brindar soluciones efectivas y
        accesibles en tecnología. Nos dedicamos a
        <strong> empoderar a emprendedores y negocios</strong>, liberándolos de
        la complejidad de gestionar las herramientas digitales, para que puedan
        concentrarse en lo que realmente importa: su crecimiento y desarrollo.
        Nuestros servicios abarcan desde la{" "}
        <strong>gestión estratégica de redes sociales</strong>, donde creamos
        contenido atractivo que conecta con su audiencia, hasta el{" "}
        <strong>diseño gráfico</strong> innovador que refleja la esencia de su
        marca. Además, ofrecemos la{" "}
        <strong>
          creación y desarrollo de páginas web y aplicaciones web personalizadas
        </strong>
        , asegurando que cada cliente tenga una presencia en línea que destaque
        y atraiga a sus clientes.{" "}
      </p>
      <p>
        <strong>
          Permítanos ser su aliado en el mundo digital y llevar su negocio al
          siguiente nivel.
        </strong>
        </p>
      <Services />
      
      <Presupuesto />
    </section>
  );
};

export default Nosotros;
