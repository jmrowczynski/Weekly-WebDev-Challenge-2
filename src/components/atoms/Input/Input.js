import styled, { css } from 'styled-components';

const Input = styled.input`
  border: 1px solid;
  padding: 2rem 0 2rem 1.5rem;
  font-size: 1.5rem;
  font-family: 'Raleway', sans-serif;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 1.5rem;
      font-weight: 300
      background-color: ${({ color, theme }) => (color ? theme[color] : 'white')};
      opacity: 0.5;
      border: none;
      &::placeholder {
        color: white;
      }
    `};
`;

export default Input;
