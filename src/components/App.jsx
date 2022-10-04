import React from 'react';
import '@styles/global.css';
import { Header } from '@components/Header';
import { Introduce } from '@components/Introduce';
import { About } from '@components/About';
import { Skills } from '@components/Skills';
import { Projects } from '@components/Projects';
import { Contact } from '@components/Contact';
import { Footer } from '@components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Introduce />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;