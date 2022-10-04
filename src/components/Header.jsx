import React from 'react';
import { ButtonMenu } from '@components/ButtonMenu';
import '@styles/Header.css';

const Header = () => {
  
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  console.log(document.querySelector('.navbar__items'));

  return (
    <header className="header">
      <div className="header-container">
        <div className="header--logo"><a href="/">LOGO</a></div>
        <nav className={`header__navbar ${openMenu ? 'active' : ''}`}>
          <ul className="navbar__items">
            <li><a onClick={handleMenu} className="navbar__link" href="#home">Home</a></li>
            <li><a onClick={handleMenu} className="navbar__link" href="#about">About me</a></li>
            <li><a onClick={handleMenu} className="navbar__link" href="#stack">Skills</a></li>
            <li><a onClick={handleMenu} className="navbar__link" href="#projects">Projects</a></li>
            <li><a onClick={handleMenu} className="navbar__link" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className='hamburguer'>
          <ButtonMenu openMenu={openMenu} handleMenu={handleMenu} />
        </div>
      </div>
    </header>
  )
}

export { Header };