import React from 'react';
import '@styles/About.css';

const About = () => {
  return (
    <section id="about" className="main__about">
      <div className="main__about-container">
        <h2 className="main__about--title"><span>| </span>About me</h2>
        <p className="main__about--paragraph">Hola, soy un Front End Developer autodidacta con capacidades de crear software para entornos web, mis habilidades se enfocan en tecnologías Front End, sin embargo, sigo trabajando en adquirir y poner en práctica nuevos conocimientos sobre Back End, con el propósito de ser un FullStack Developer, de esa manera, aumentar mi valor como profesional y poder aportar mucho más a los equipos de trabajo de los cuales haga parte.</p>
        <div className="main__about-info-me">
          <h3 className="about-info-me--title">My hobbies</h3>
          <ul className="about-info-me--MyHobbies">
            <li>Leer y actualizarme en tecnología, astronomía y finanzas.</li>
            <li>Fútbol, películas de ciencia ficción y videojuegos.</li>
          </ul>
            <h3 className="about-info-me--title">My motivation</h3>
          <ul className="about-info-me--MyMotivation">
            <li>Crecer como profesional.</li>
            <li>Ser parte del equipo de una startup de alto valor.</li>
            <li>Lograr una mejor calidad de vida.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export { About };