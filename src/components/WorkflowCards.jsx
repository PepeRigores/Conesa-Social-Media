import React from "react";
import "./AboutUs.css";

const WorkflowCards = () => {
  return (
    <div className="workflow-container">
      <h2>¿Cómo es nuestro flujo de trabajo?</h2>
      <div className="workflow-row">
        <div className="workflow-card">
          <h3>1. Asesoría Individualizada</h3>
          <p>
            Proporcionamos asesoría personalizada al cliente, alineando nuestras
            recomendaciones con sus necesidades específicas y objetivos
            estratégicos.
          </p>
        </div>
        <div className="workflow-card">
          <h3>2. Evaluación de Proyecto</h3>
          <p>
            Después de una exhaustiva evaluación del proyecto, nuestro equipo se
            reunirá con el cliente para definir los plazos y asegurarnos de que
            el desarrollo se ajuste perfectamente a los objetivos establecidos.
          </p>
        </div>
      </div>
      <div className="workflow-row">
        <div className="workflow-card">
          <h3>3. Desarrollo del Proyecto</h3>
          <p>
            Llevaremos a cabo el proyecto acordado, garantizando en todo momento
            el cumplimiento de los plazos establecidos y manteniendo una
            comunicación fluida con el cliente.
          </p>
        </div>
        <div className="workflow-card">
          <h3>4. Presentación Final del Proyecto</h3>
          <p>
            Una vez finalizado el proyecto, realizaremos una presentación
            oficial al cliente, asegurando que el resultado esté en pleno
            funcionamiento y cumpla con lo acordado en la fase de evaluación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCards;
