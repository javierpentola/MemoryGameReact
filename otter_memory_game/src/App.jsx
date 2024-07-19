import React, { useState, useEffect } from 'react';
import DifficultySelector from './components/DifficultySelector';
import StatusBar from './components/StatusBar';
import GameBoard from './components/GameBoard';
import Menu from './components/Menu';
import { easyCards, mediumCards, hardCards, shuffle } from './components/cardsData';
import './App.css';

const App = () => {
  const [gameMode, setGameMode] = useState('');
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [timer, setTimer] = useState(null);
  const [matchedCards, setMatchedCards] = useState([]);
  const [lives, setLives] = useState(5);

  const startGame = (additionalCards = []) => {
    const difficulty = document.getElementById('difficulty').value;
    let cardsArray = [];
    let gameTime = 60;

    if (difficulty === 'easy') {
      cardsArray = [...easyCards];
    } else if (difficulty === 'medium') {
      cardsArray = [...mediumCards];
      gameTime = 90;
    } else if (difficulty === 'hard') {
      cardsArray = [...hardCards];
      gameTime = 120;
    }

    if (gameMode === 'infinito') {
      cardsArray = [...cardsArray, ...additionalCards];
    }

    const shuffledCards = shuffle(cardsArray);
    setCards(shuffledCards);
    setScore(0);
    setMatchedPairs(0);
    setFlippedCards([]);
    setMatchedCards([]);
    setLives(5);
    if (gameMode !== 'zen' && gameMode !== 'infinito') {
      setTime(gameTime);
      clearInterval(timer);
      setTimer(setInterval(updateTimer, 1000));
    }
  };

  const updateTimer = () => {
    setTime((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(timer);
        alert('Time up! Game over!');
        startGame();
        return 0;
      }
      return prevTime - 1;
    });
  };

  const onCardClick = (clickedCard) => {
    if (flippedCards.length < 2 && !flippedCards.includes(clickedCard) && !matchedCards.includes(clickedCard)) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, clickedCard]);

      if (flippedCards.length === 1) {
        checkForMatch(clickedCard);
      }
    }
  };

  const checkForMatch = (newCard) => {
    const [firstCard] = flippedCards;
    if (firstCard.name === newCard.name) {
      setScore((prevScore) => prevScore + 10);
      setMatchedPairs((prevMatchedPairs) => prevMatchedPairs + 1);
      setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstCard, newCard]);
      setFlippedCards([]);
      if (matchedPairs + 1 === cards.length / 2) {
        if (gameMode === 'infinito') {
          const additionalCards = generateAdditionalCards(50);
          setTimeout(() => {
            startGame(additionalCards);
          }, 1000); // Agregamos un pequeño retraso para mostrar las cartas encontradas antes de reiniciar
        } else {
          clearInterval(timer);
          alert('You won!');
          startGame();
        }
      }
    } else {
      setTimeout(() => {
        setFlippedCards([]);
        if (gameMode === 'supervivencia') {
          setLives((prevLives) => {
            if (prevLives <= 1) {
              alert('You lost all your lives! Game over!');
              startGame();
              return 5;
            }
            return prevLives - 1;
          });
        }
      }, 1000);
    }
  };

  const generateAdditionalCards = (numberOfCards) => {
    const newCards = [];
    for (let i = 0; i < numberOfCards / 2; i++) {
      const card = { name: `newCard${i}`, img: `path_to_image_${i}.jpg` };
      newCards.push(card, { ...card });
    }
    return shuffle(newCards);
  };

  useEffect(() => {
    if (gameMode === 'contrarreloj' || gameMode === 'supervivencia' || gameMode === 'zen' || gameMode === 'infinito') {
      startGame();
    }
  }, [gameMode]);

  return (
    <div className="app-container">
      {gameMode === '' ? (
        <Menu setGameMode={setGameMode} />
      ) : (
        <>
          <DifficultySelector startGame={startGame} />
          <StatusBar time={time} score={score} lives={lives} gameMode={gameMode} />
          <GameBoard cards={cards} onCardClick={onCardClick} flippedCards={flippedCards} matchedCards={matchedCards} />
        </>
      )}
    </div>
  );
};

export default App;
