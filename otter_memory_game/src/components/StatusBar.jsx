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

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=I%20scored%20${score}%20points%20in%20the%20Memory%20Game!%20Can%20you%20beat%20me?`;
    window.open(url, '_blank');
  };

  const shareOnTelegram = () => {
    const url = `https://telegram.me/share/url?url=${window.location.href}&text=I%20scored%20${score}%20points%20in%20the%20Memory%20Game!%20Can%20you%20beat%20me?`;
    window.open(url, '_blank');
  };

  const shareOnInstagram = () => {
    // Instagram does not have a direct share URL like Twitter or Telegram
    alert('Please share your achievement on Instagram manually!');
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
