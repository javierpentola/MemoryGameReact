import React, { useState, useEffect } from 'react';
import DifficultySelector from './components/DifficultySelector';
import StatusBar from './components/StatusBar';
import GameBoard from './components/GameBoard';
import { easyCards, mediumCards, hardCards, shuffle } from './components/cardsData';
import './App.css';

const App = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState(0);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(60);
    const [timer, setTimer] = useState(null);
    const [matchedCards, setMatchedCards] = useState([]);

    const startGame = () => {
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

        const shuffledCards = shuffle(cardsArray);
        setCards(shuffledCards);
        setScore(0);
        setMatchedPairs(0);
        setFlippedCards([]);
        setMatchedCards([]);
        setTime(gameTime);
        clearInterval(timer);
        setTimer(setInterval(updateTimer, 1000));
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
                clearInterval(timer);
                alert('You won!');
            }
        } else {
            setTimeout(() => {
                setFlippedCards([]);
            }, 1000);
        }
    };

    useEffect(() => {
        startGame();
    }, []);

    return (
        <div className="app-container">
            <DifficultySelector startGame={startGame} />
            <StatusBar time={time} score={score} />
            <GameBoard cards={cards} onCardClick={onCardClick} flippedCards={flippedCards} matchedCards={matchedCards} />
        </div>
    );
};

export default App;
