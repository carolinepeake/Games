import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import DropdownChevron from './DropdownChevron';
import './index.css';
import './App.css';

export default function StyledSelect({
  options = ['Easy', 'Medium', 'Hard'],
  initialValue = 'Easy',
  handleSelect = (value) => console.log(value),
}) {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);

  function handleClick(option) {
    setSelectedValue(option);
    handleSelect(option);
  }

  const dropdownOptions = options.map((value, i) => (
    <DropdownOption
      type="button"
      value={value}
      index={i}
      key={value}
      onClick={() => handleClick(value)}
      selectedValue={selectedValue}
      active={selectedValue === value}
    >
      {value}
    </DropdownOption>
  ));

  return (
    <CustomSelect
      className="header-link header-dropdown"
      dropdownOpened={dropdownOpened}
      onMouseEnter={() => setDropdownOpened(true)}
      onMouseLeave={() => setDropdownOpened(false)}
    >
      <InputWrapper>
        <span>
            difficulty &#9662;
        </span>
        {/* <DropdownChevron dropdownOpened={dropdownOpened} /> */}
      </InputWrapper>
      {/* {dropdownOpened &&  */}
      <Dropdown
      dropdownOpened={dropdownOpened}
      >
        {dropdownOptions}
      </Dropdown>
    </CustomSelect>
  );
}

// StyledSelect.propTypes = {
//   placeholder: PropTypes.string,
//   options: PropTypes.arrayOf(PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.array,
//     PropTypes.shape({
//       id: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.string,
//       ]),
//       value: PropTypes.oneOfType([
//         PropTypes.number,
//         PropTypes.string,
//       ]),
//       label: PropTypes.string,
//     }),
//   ])),
//   initialValue: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.any,
//   ]),
//   disabled: PropTypes.bool,
//   initialDropdownPosition: PropTypes.bool,
//   handleSelect: PropTypes.func,
// };

// StyledSelect.defaultProps = {
//   placeholder: 'Select Dropdown Option',
//   options: [],
//   initialValue: null,
//   disabled: false,
//   initialDropdownPosition: false,
//   handleSelect: (value) => console.log(value),
// };

// TO-DO: make bigger on focus (for mobile)

const CustomSelect = styled.div`
 /* border: thin solid currentColor;
  border-radius: 5px; */
 /* font-size: 1em;
  font-weight: 400;
  cursor: pointer; */

/*  position: relative;
  width: 12.0em;

  @media (min-width: 600px) AND (max-width: 700px) {
    width: 10em;
  } */
  position: relative;
  padding-bottom: 3px;
  padding-top: 3px;
`;

const InputWrapper = styled.div`
 /* display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.25em 0.25em 0.25em 1em;
  transition: 1s ease-in-out;

  @media (min-width: 600px) AND (max-width: 700px) {
    padding: 0.25em;
  } */
`;

const Dropdown = styled.div`
  z-index: 10;
  flex-direction: column;
  display: ${(props) => (props.dropdownOpened ? 'flex' : 'none')};
 /* display: flex; */
  position: absolute;
  margin-top: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 /* border-bottom: ${(props) => props.theme.fontColor} solid 1px;
  border-top: ${(props) => props.theme.fontColor} solid 1px; */
  border-radius: 3px;
  background-color: white;
  gap: 0.5em;
  padding: 0.5em;
  align-items: flex-start;
  width: 100%;
  transition: 1s ease-in-out;
`;

const DropdownOption = styled.div`
  font-size: smaller;

  ${(props) => (props.selectedValue === props.value) && css`
    color: var(--darkBtnColor);
    transition: 0.25s ease;
  `};
`;

