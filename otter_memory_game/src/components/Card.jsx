import React from 'react';

const Card = ({ card, onCardClick, isFlipped, isMatched }) => {
    const imgPath = `/src/assets/${card.img}`;
    return (
        <div className={`card ${isFlipped || isMatched ? 'flipped' : ''}`} onClick={onCardClick}>
            <div className="card-inner">
                <div className="card-front nes-container is-rounded"></div>
                <div className="card-back nes-container is-rounded">
                    <img src={imgPath} alt={card.name} />
                </div>
            </div>
        </div>
    );
};

export default Card;
