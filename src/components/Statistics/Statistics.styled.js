import styled from 'styled-components';

export const Paragraph = styled.li`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
  &:nth-child(1) > span {
    margin-left: 12px;
    color: green;
    font-size: 24px;
  }
  &:nth-child(2) > span {
    margin-left: 12px;
    color: orange;
    font-size: 24px;
  }
  &:nth-child(3) > span {
    margin-left: 12px;
    color: red;
    font-size: 24px;
  }
  &:nth-child(4) > span {
    margin-left: 12px;
    color: blue;
    font-size: 24px;
  }
  &:nth-child(5) > span {
    margin-left: 12px;
    color: teal;
    font-size: 24px;
  }
`;

export const ButtonReload = styled.button`
  margin-top: 18px;
  border: 1px solid red;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  transition: color 250ms ease-in, background-color 250ms ease-in;
  &:is(:hover, :focus) {
    color: white;
    background-color: red;
  }
`;
