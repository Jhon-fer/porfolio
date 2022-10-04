import React from 'react';
import '@styles/ButtonMenu.css';

const ButtonMenu = (props) => {
  return (
    <div 
      onClick={props.handleMenu}
      className={`icon nav-icon-5 ${props.openMenu ? 'open' : ''}`}
    >
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}

export { ButtonMenu };