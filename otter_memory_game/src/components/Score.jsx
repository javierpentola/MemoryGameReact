import React from 'react';

const Score = ({ score }) => {
    return (
        <div className="score nes-container is-rounded">
            Score: <span id="score">{score}</span>
        </div>
    );
};

export default Score;
