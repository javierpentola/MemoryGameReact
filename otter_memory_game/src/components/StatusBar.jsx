import React from 'react';

const StatusBar = ({ time, score }) => {
    return (
        <div className="status-bar">
            <div className="timer nes-container is-rounded">
                <span>Time: {time}</span>
            </div>
            <div className="score nes-container is-rounded">
                <span>Score: {score}</span>
            </div>
        </div>
    );
};

export default StatusBar;
