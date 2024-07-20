import React from 'react';
import './Menu.css';

const Menu = ({ setGameMode, toggleDarkMode, isDarkMode }) => {
  return (
    <div className="menu-container">
      <div className="toggle-buttons">
      </div>
      <h2>Select Game Mode</h2>
      <button className="nes-btn is-primary" onClick={() => setGameMode('contrarreloj')}>Contrarreloj</button>
      <button className="nes-btn is-success" onClick={() => setGameMode('supervivencia')}>Supervivencia</button>
      <button className="nes-btn is-warning" onClick={() => setGameMode('zen')}>Modo Zen</button>
      <button className="nes-btn is-error" onClick={() => setGameMode('infinito')}>Infinito</button>
      <button className="nes-btn is-primary" onClick={() => setGameMode('trofeos')}>Trofeos</button>
    </div>
  );
};

export default Menu;
