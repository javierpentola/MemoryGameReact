import React from 'react';
import './GameOver.css';

const GameOver = ({ setGameMode, setIsGameOver }) => {
  const handleBackToMenu = () => {
    setIsGameOver(false);
    setGameMode('');
  };

  return (
    <div className="game-over-container">
      <h1>Game Over</h1>
      <button className="nes-btn is-primary" onClick={handleBackToMenu}>
        Volver al Menú Principal
      </button>
    </div>
  );
};

export default GameOver;
