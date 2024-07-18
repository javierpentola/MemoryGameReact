import React from 'react';

const DifficultySelector = ({ startGame }) => {
    return (
        <div className="control-bar">
            <label htmlFor="difficulty" className="nes-text is-primary">Difficulty:</label>
            <select id="difficulty" className="nes-select">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button onClick={startGame} className="nes-btn is-primary">Start</button>
        </div>
    );
};

export default DifficultySelector;
