import React from 'react';
import '@styles/Introduce.css';

import slider from '@images/slider.png';

const Introduce = () => {
  return (
    <section id="home" className="main__introduce">
      <div className="main__introduce-container">
        <div className="main__introduce-article">
          <h1 className="introduce--name">Jhon Rios</h1>
          <h2 className="introduce--title">Front End Developer</h2>
          <p className="introduce--text">Hola, soy desarrollador de software enfocado en aplicaciones y sitios web. Ven y conóceme para que seamos equipo y juntos solucionar las necesidades del mundo tecnologíco.</p>
          <a href="../assets/docs/CV.pdf" className="download" download="curriculum-vitae">Download CV</a>
        </div>
        <img src={slider} alt="image-developer"/>
      </div>
    </section>
  );
}

export { Introduce };