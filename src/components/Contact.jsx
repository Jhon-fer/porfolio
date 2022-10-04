import React from 'react';
import '@styles/Contact.css';

import iconGithub from '@icons/icon-github.svg';
import iconLinkedin from '@icons/icon-linkedin-square.svg';
import iconEmail from '@icons/icon-email.svg';

const Contact = () => {
  return (
    <section id="contact" className="main__contact">
      <div className="main__contact-container">
          <h2 className="main__contact--title"><span>| </span>Contact</h2>
          <div className="main__contact--links">
            <p className="contact--links-text">¡Let's talk!</p>
            <div className="contact--links-socialMedia">
              <a className="links-socialMedia--item social-github" href="https://github.com/Jhon-fer" target="_blank"><img src={iconGithub} alt="icon-github"/></a>
              <a className="links-socialMedia--item social-linkedin" href="https://www.linkedin.com/in/jhon-fernando-rios-galindez-72546a243/" target="_blank"><img src={iconLinkedin} alt="icon-linkedin"/></a>
              <a className="links-socialMedia--item social-email" href="mailto:r.jhonf@gmail.com"><img src={iconEmail} alt="icon-email"/></a>
            </div>
          </div>
        </div>    
    </section>
  )
}

export { Contact };