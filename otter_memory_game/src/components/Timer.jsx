import React from 'react';

const Timer = ({ time }) => {
    return (
        <div className="timer nes-container is-rounded">
            Time: <span id="time">{time}</span> seconds
        </div>
    );
};

export default Timer;
