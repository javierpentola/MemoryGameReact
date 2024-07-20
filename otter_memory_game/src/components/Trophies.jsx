import React, { useState } from 'react';
import './Trophies.css';

const Trophies = ({ setGameMode }) => {
    const trophies = [
        { name: 'First Win', description: 'Win your first game' },
        { name: 'Speed Runner', description: 'Win a game in under 1 minute' },
        { name: 'Persistent', description: 'Play 10 games' },
        { name: 'Unstoppable', description: 'Win 5 games in a row' },
        { name: 'Collector', description: 'Match 100 pairs of cards' },
        { name: 'Expert', description: 'Win a game on hard difficulty' },
        { name: 'Flawless', description: 'Win a game without making a mistake' },
        { name: 'Quick Learner', description: 'Match a pair within 10 seconds' },
        { name: 'Focused', description: 'Play for 30 minutes without a break' },
        { name: 'Champion', description: 'Win 50 games' },
        { name: 'Marathon', description: 'Play for 1 hour' },
        { name: 'Night Owl', description: 'Play a game between 12 AM and 6 AM' },
        { name: 'Early Bird', description: 'Play a game between 6 AM and 9 AM' },
        { name: 'Lucky Guess', description: 'Match a pair on your first try' },
        { name: 'Perfectionist', description: 'Win a game with 100% accuracy' },
        { name: 'Strategist', description: 'Plan 5 moves ahead and win' },
        { name: 'Explorer', description: 'Play all difficulty levels' },
        { name: 'Veteran', description: 'Play 100 games' },
        { name: 'Achiever', description: 'Complete 10 different achievements' },
        { name: 'Enthusiast', description: 'Play every day for a week' },
        { name: 'Seasoned', description: 'Play every day for a month' },
        { name: 'Master', description: 'Win a game on hard difficulty without mistakes' },
        { name: 'Survivor', description: 'Survive 5 rounds in Survival mode' },
        { name: 'Zen Master', description: 'Play Zen mode for 1 hour' },
        { name: 'Speed Demon', description: 'Match 5 pairs in under 30 seconds' },
        { name: 'Puzzle Lover', description: 'Complete 50 games' },
        { name: 'Card Shark', description: 'Win 20 games without a loss' },
        { name: 'Memorization Pro', description: 'Win 10 games with 90% accuracy' },
        { name: 'Fast Fingers', description: 'Make 10 correct matches in 1 minute' },
        { name: 'Daily Player', description: 'Play 30 daily challenges' },
        { name: 'Ultimate Winner', description: 'Win 200 games' },
        { name: 'Lucky Streak', description: 'Win 10 games in a row' },
        { name: 'Night Gamer', description: 'Play 50 games at night' },
        { name: 'Morning Gamer', description: 'Play 50 games in the morning' },
        { name: 'Perfect Pair', description: 'Match 200 pairs of cards' },
        { name: 'Quick Thinker', description: 'Match 3 pairs in under 15 seconds' },
        { name: 'Persistent Player', description: 'Play 200 games' },
        { name: 'Collector Master', description: 'Match 500 pairs of cards' },
        { name: 'Ultimate Achiever', description: 'Complete all achievements' },
      ];

  const [checkedTrophies, setCheckedTrophies] = useState(
    Array(trophies.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedTrophies = [...checkedTrophies];
    newCheckedTrophies[index] = !newCheckedTrophies[index];
    setCheckedTrophies(newCheckedTrophies);
  };

  return (
    <div className="nes-container is-dark trophies-container">
      <h2>Trofeos</h2>
      <ul>
        {trophies.map((trophy, index) => (
          <li key={index} className="nes-container is-rounded trophy">
            <label>
              <input
                type="checkbox"
                checked={checkedTrophies[index]}
                onChange={() => handleCheckboxChange(index)}
                className="nes-checkbox"
              />
              <span>{trophy.name}</span>
            </label>
            <p>{trophy.description}</p>
          </li>
        ))}
      </ul>
      <button className="nes-btn is-primary" onClick={() => setGameMode('')}>
        Volver
      </button>
    </div>
  );
};

export default Trophies;
