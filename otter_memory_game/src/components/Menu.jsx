import React from "react";
import "./Menu.css";

const Menu = ({ setGameMode }) => {
  return (
    <div className="nes-container is-dark menu-container">
      <h2>Select Game Mode</h2>
      <button className="nes-btn is-primary" onClick={() => setGameMode('contrarreloj')}>Contrarreloj</button>
      <button className="nes-btn is-success" onClick={() => setGameMode('supervivencia')}>Supervivencia</button>
      <button className="nes-btn is-warning" onClick={() => setGameMode('zen')}>Zen</button>
      <button className="nes-btn is-error" onClick={() => setGameMode('infinito')}>Infinito</button>
    </div>
  );
};

export default Menu;
