import React from 'react';
import Card from './Card';

const GameBoard = ({ cards, onCardClick, flippedCards, matchedCards, setGameMode }) => {
    return (
        <div id="game-board" className="nes-container with-title game-board-container">
            <div className="cards-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        card={card}
                        onCardClick={() => onCardClick(card)}
                        isFlipped={flippedCards.includes(card)}
                        isMatched={matchedCards.includes(card)}
                    />
                ))}
            </div>
            <div className="control-bar-bottom">
                <button onClick={() => setGameMode('')} className="nes-btn is-error">Volver</button>
            </div>
        </div>
    );
};

export default GameBoard;
