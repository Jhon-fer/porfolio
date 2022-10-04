import React from 'react';
import '@styles/Skills.css';

import iconHtml from '@icons/icon-html5.svg';
import iconCss from '@icons/icon-css3.svg';
import iconJS from '@icons/icon-javascript.svg';
import iconWp from '@icons/icon-webpack.svg';
import iconReact from '@icons/icon-react.svg';
import iconGit from '@icons/icon-git.svg';

const Skills = () => {
  return (
    <>
      <section id="stack" className="main__skills">
      <div className="main__skills-container">
        <h2 className="main__skills--title"><span>| </span>Skills</h2>
        <div className="main__skills-subcontainer">
          <div className="main__skills-technologies">
            <ul className="main__skills-technologies-list">
              <img src={iconHtml} alt="icon-html"/>
              <h3>HTML5</h3>
            </ul>
            <ul className="main__skills-technologies-list">
              <img src={iconCss} alt="icon-css"/>
              <h3>CSS3</h3>
            </ul>
            <ul className="main__skills-technologies-list">
              <img src={iconJS} alt="icon-javascript"/>
              <h3>JavaScript</h3>
            </ul>
            <ul className="main__skills-technologies-list">
              <img className="icon-webpack" src={iconWp} alt="icon-webpack"/>
              <h3>Webpack</h3>
            </ul>
            <ul className="main__skills-technologies-list">
              <img className="icon-react" src={iconReact} alt="icon-react"/>
              <h3>React</h3>
            </ul>
            <ul className="main__skills-technologies-list">
              <img src={iconGit} alt="icon-git"/>
              <h3>Git</h3>
            </ul>
          </div>
          <div className="main__skills-others">
            <h3>Abilities</h3>
            <ul>
                <li className="skills-others--item">Responsive design</li>
                <li className="skills-others--item">Mobile first</li>
                <li className="skills-others--item">Consumo de API's</li>
                <li className="skills-others--item">Prácticas SEO</li>
                <li className="skills-others--item">Debbuging</li>
            </ul>
          </div>
        </div>
      </div>

      </section>
    </>
  )
}

export { Skills };