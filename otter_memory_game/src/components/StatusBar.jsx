import React from 'react';

const StatusBar = ({ time, score, lives, gameMode }) => {
  const renderLives = () => {
    const hearts = [];
    for (let i = 0; i < 5; i++) {
      if (i < lives) {
        hearts.push(<i key={i} className="nes-icon is-medium heart"></i>);
      } else {
        hearts.push(<i key={i} className="nes-icon is-medium heart is-transparent"></i>);
      }
    }
    return hearts;
  };

  return (
    <div className="status-bar">
      {gameMode !== 'zen' && <div className="nes-container is-rounded timer">Time: {time}</div>}
      <div className="nes-container is-rounded score">Score: {score}</div>
      {gameMode === 'supervivencia' && <div className="nes-container is-rounded lives">{renderLives()}</div>}
    </div>
  );
};

export default StatusBar;
