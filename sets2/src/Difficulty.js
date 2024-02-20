import React, { useState } from 'react';
// import './index.css';
import './Header/Header.css';
import Dropdown from './Dropdown';
import { DIFFICULTY_VALUES } from './State/gameConstants';

type DifficultyProps = {
  difficulty: '1' | '2' | '3';
  // handleSelectDifficulty:
};

export default function Difficulty({
  difficulty,
  handleSelectDifficulty
}: DifficultyProps) {

  const [dropdownOpened, setDropdownOpened] = useState(false);

  const dropdownOptions = DIFFICULTY_VALUES.map(({ id, label, speed }) => (
    <Dropdown
      clickHandler={handleSelectDifficulty}
      key={id}
      value={speed}
      id={id}
      label={label}
      selected={difficulty === id}
      difficulty={difficulty}
    />
  ));

  return (
    <div
      className="header-link"
      onMouseEnter={() => setDropdownOpened(true)}
      onMouseLeave={() => setDropdownOpened(false)}
    >
      difficulty
      &#9662;

      {dropdownOpened && (
        <ul
          className="header-dropdown"
        >
          {dropdownOptions}
        </ul>)}

    </div>
  );
}

