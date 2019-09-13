import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, color }) => color || theme.primary};
  color: white;
  border: none;
  padding: 1.5rem 2rem;
  border-radius: 0.1rem;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 2rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
`;

export default Button;
