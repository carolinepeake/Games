import React, { useState } from 'react';
import './index.css';
import './App.css';

export default function StyledSelect({ difficulty, setDifficulty}) {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  function handleClick(option) {
    setDifficulty(option);
  }

  let options = ['Easy', 'Medium', 'Hard'];

  const dropdownOptions = options.map((value, i) => (
    <li
      key={value}
      onClick={() => handleClick(value)}
      className={difficulty === value && 'dropdown-option-selected'}
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
      Difficulty &#9662;

      {dropdownOpened && (
        <ul
          className="header-dropdown"
        >
          {dropdownOptions}
        </ul>)}

    </div>
  );
}

