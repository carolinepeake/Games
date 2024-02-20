import React, { useState } from 'react';
// import './index.css';
import './Header/Header.css';
import { capitalizeFirstLetter } from './utils/capitalize'

type DropdownProps = {
  value: '5000' | '3000' | '1000';
  label: 'Easy' | 'Medium' | 'Hard';
  id: '1' | '2' | '3';
  // clickHandler
  // difficulty:
  // selected:
};

export default function Dropdown({
  value,
  label,
  id,
  clickHandler,
  difficulty,
  selected
}: DropdownProps) {

  // const [, setClassName] = useState('dropdown-option');

  function clickDropdownOption(id) {
    clickHandler(id);
    // setClassName('dropdown-option selected');
  };

  const className = id === difficulty ? 'dropdown-option selected' : 'dropdown-option';
  // const className = selected ? 'dropdown-option selected' : 'dropdown-option';

  return (
    <li
      onClick={() => clickDropdownOption(id)} // or just value, but maybe event is better in case event doesnt fire
      className={className} // selected initially
      value={value}
      id={id}
    >
      {capitalizeFirstLetter(label)}
    </li>
  );
}