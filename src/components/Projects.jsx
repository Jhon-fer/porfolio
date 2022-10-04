import React from 'react';
import '@styles/Projects.css';

import iconGithub from '@icons/icon-github.svg';
import iconNetlify from '@icons/icon-netlify.svg';

const Projects = () => {
  return (
    <section id="projects" class="main__projects">
      <div class="main__projects-container">
        <h2 class="main__projects--title"><span>| </span>Projects</h2>
        <div class="main__projects-card">
          <h3 class="main__projects-card--title">Number 1</h3>
          <article class="main__projects-card--item main__projects-card--item-1">
            <p class="main__projects-card--paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id, minima, qui porro corporis, tenetur eos sint hic aperiam aut facere! Harum veritatis iste deserunt doloremque eum dolorum rerum ea?</p>
          </article>
          <ul class="main__projects-card--list">
            <a class="main__projects-card--link" href="">
              <img src={iconGithub} alt="icon-github"/>
              <span class="text-link">Repositorio</span>
            </a>
            <a class="main__projects-card--link" href="">
              <span class="text-link">Netlify</span>
              <img src={iconNetlify} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div class="main__projects-card">
          <h3 class="main__projects-card--title">Number 2</h3>
          <article class="main__projects-card--item main__projects-card--item-2">
            <p class="main__projects-card--paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id, minima, qui porro corporis, tenetur eos sint hic aperiam aut facere! Harum veritatis iste deserunt doloremque eum dolorum rerum ea?</p>
          </article>
          <ul class="main__projects-card--list">
            <a class="main__projects-card--link" href="">
              <img src={iconGithub} alt="icon-github"/>
              <span class="text-link">Repositorio</span>
            </a>
            <a class="main__projects-card--link" href="">
              <span class="text-link">Netlify</span>
              <img src={iconNetlify} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div class="main__projects-card">
          <h3 class="main__projects-card--title">Number 3</h3>
          <article class="main__projects-card--item main__projects-card--item-3">
            <p class="main__projects-card--paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id, minima, qui porro corporis, tenetur eos sint hic aperiam aut facere! Harum veritatis iste deserunt doloremque eum dolorum rerum ea?</p>
          </article>
          <ul class="main__projects-card--list">
            <a class="main__projects-card--link" href="">
              <img src={iconGithub} alt="icon-github"/>
              <span class="text-link">Repositorio</span>
            </a>
            <a class="main__projects-card--link" href="">
              <span class="text-link">Netlify</span>
              <img src={iconNetlify} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div class="main__projects-card">
          <h3 class="main__projects-card--title">Number 4</h3>
          <article class="main__projects-card--item main__projects-card--item-4">
            <p class="main__projects-card--paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id, minima, qui porro corporis, tenetur eos sint hic aperiam aut facere! Harum veritatis iste deserunt doloremque eum dolorum rerum ea?</p>
          </article>
          <ul class="main__projects-card--list">
            <a class="main__projects-card--link" href="">
              <img src={iconGithub} alt="icon-github"/>
              <span class="text-link">Repositorio</span>
            </a>
            <a class="main__projects-card--link" href="">
              <span class="text-link">Netlify</span>
              <img src={iconNetlify} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div class="main__projects-card">
          <h3 class="main__projects-card--title">Number 5</h3>
          <article class="main__projects-card--item main__projects-card--item-5">
            <p class="main__projects-card--paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id, minima, qui porro corporis, tenetur eos sint hic aperiam aut facere! Harum veritatis iste deserunt doloremque eum dolorum rerum ea?</p>
          </article>
          <ul class="main__projects-card--list">
            <a class="main__projects-card--link" href="">
              <img src={iconGithub} alt="icon-github"/>
              <span class="text-link">Repositorio</span>
            </a>
            <a class="main__projects-card--link" href="">
              <span class="text-link">Netlify</span>
              <img src={iconNetlify} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
        <div class="main__projects-card">
          <h3 class="main__projects-card--title">Number 6</h3>
          <article class="main__projects-card--item main__projects-card--item-6">
            <p class="main__projects-card--paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id, minima, qui porro corporis, tenetur eos sint hic aperiam aut facere! Harum veritatis iste deserunt doloremque eum dolorum rerum ea?</p>
          </article>
          <ul class="main__projects-card--list">
            <a class="main__projects-card--link" href="">
              <img src={iconGithub} alt="icon-github"/>
              <span class="text-link">Repositorio</span>
            </a>
            <a class="main__projects-card--link" href="">
              <span class="text-link">Netlify</span>
              <img src={iconNetlify} alt="icon-netlify"/>
            </a>
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Projects };