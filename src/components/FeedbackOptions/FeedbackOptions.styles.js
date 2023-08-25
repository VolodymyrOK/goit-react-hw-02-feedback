import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const ButtonListItem = styled.li`
  &:nth-child(1) button {
    border: 1px solid green;
    &:is(:hover, :focus) {
      color: white;
      background-color: green;
    }
  }
  &:nth-child(2) button {
    border: 1px solid orange;
    &:is(:hover, :focus) {
      color: white;
      background-color: orange;
    }
  }
  &:nth-child(3) button {
    border: 1px solid red;
    &:is(:hover, :focus) {
      color: white;
      background-color: red;
    }
  }
`;

export const Button = styled.button`
  text-transform: capitalize;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background-color 250ms ease-in, color 250ms ease-in;
`;
