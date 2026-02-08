
# Proyecto: Presencia Digital

Este es un proyecto web diseñado para ofrecer servicios de soluciones digitales a empresas y emprendedores, incluyendo diseño gráfico, gestión de redes sociales y creación de páginas web. El objetivo es facilitar a los usuarios la obtención de información y la contratación de nuestros servicios.

## Características

### Estructura del Proyecto

- **Página de Inicio**: Contiene una sección principal (Hero Section) con un título atractivo y una llamada a la acción. Se ha implementado un diseño responsivo que incluye imágenes difuminadas para mejorar la estética.
  
- **Servicios**:
  - Se han creado tarjetas para mostrar los distintos servicios ofrecidos.
  - Un flujo de trabajo visual que describe el proceso de servicio a los clientes.
  
- **Formulario de Contacto**:
  - Permite a los usuarios enviar consultas. Incluye campos para nombre, teléfono, email, tipo de servicio y mensaje.
  - Se ha añadido un checkbox que requiere la aceptación de las condiciones legales y la política de privacidad, con enlaces a las respectivas páginas.

- **Páginas Legales**:
  - **Aviso Legal**: Detalla la información legal requerida.
  - **Política de Privacidad**: Describe cómo se gestionan los datos personales.
  - **Política de Cookies**: Explica el uso de cookies en el sitio.

### Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Para la gestión de rutas en la aplicación.
- **CSS**: Para el estilo y diseño de componentes.
- **JavaScript**: Para la lógica de la aplicación.

## Requisitos Previos

Antes de instalar este proyecto, asegúrate de tener instalados:

- **Node.js** (versión 14 o superior) - [Descargar](https://nodejs.org/)
- **npm** (viene incluido con Node.js)

Puedes verificar si los tienes instalados ejecutando:
```bash
node --version
npm --version
```

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/PepeRigores/Conesa-Social-Media.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd Conesa-Social-Media
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia la aplicación:
   ```bash
   npm start
   ```

La aplicación debería abrirse automáticamente en `http://localhost:3000`.

## Solución de Problemas

Si encuentras errores al ejecutar `npm start`, intenta lo siguiente:

1. **Limpia la instalación de dependencias:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Actualiza react-scripts:**
   ```bash
   npm install --save react-scripts@latest
   ```

3. **Verifica que Node.js y npm estén correctamente instalados:**
   ```bash
   node --version
   npm --version
   ```

Si el problema persiste, cierra el terminal y vuelve a intentar.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una nueva rama:
    git checkout -b nombre_de_tu_rama

3. Realiza tus cambios y haz un commit:
   git commit -m 'Descripción de los cambios realizados'

4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

Para cualquier consulta o sugerencia, puedes contactar a <pepe.rigores@gmail.com> o abrir un issue en el repositorio.

---

¡Gracias por tu interés en el proyecto!
