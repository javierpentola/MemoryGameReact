import React from 'react';
import Card from './Card';

const GameBoard = ({ cards, onCardClick, flippedCards, matchedCards }) => {
    return (
        <div id="game-board" className="nes-container with-title">
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
    );
};

export default GameBoard;
