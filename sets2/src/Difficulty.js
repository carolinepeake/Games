import React, { useState } from 'react';
import './index.css';
import './App.css';
import { DIFFICULTY_VALUES } from './State/gameConstants';

type DifficultyProps = {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};

export default function Difficulty({ difficulty, setDifficulty}: DifficultyProps) {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  function handleClick(option) {
    setDifficulty(option);
  }

  let options = ['Easy', 'Medium', 'Hard'];

  const dropdownOptions = options.map((value, i) => (
    <li
      key={value}
      onClick={() => handleClick(value)}
      className={difficulty === value ? 'dropdown-option-selected' : undefined}
    >
      {value}
    </li>
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

