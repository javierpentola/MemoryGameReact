import React from 'react';

const ShareButtons = ({ score }) => {
    const shareText = `I scored ${score} points in the Memory Game! Can you beat my score?`;

    const shareOnX = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
    };

    const shareOnTelegram = () => {
        const url = `https://telegram.me/share/url?url=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
    };

    const shareOnInstagram = () => {
        const url = `https://www.instagram.com/`; // Instagram does not have direct share URL like Twitter and Telegram
        window.open(url, '_blank');
    };

    return (
        <div className="share-buttons">
            <button className="nes-btn is-primary" onClick={shareOnX}>Share on X</button>
            <button className="nes-btn is-success" onClick={shareOnTelegram}>Share on Telegram</button>
            <button className="nes-btn is-warning" onClick={shareOnInstagram}>Share on Instagram</button>
        </div>
    );
};

export default ShareButtons;
