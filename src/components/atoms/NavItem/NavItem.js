import styled from 'styled-components';

const NavItem = styled.a`
  position: relative;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  list-style: none;
  position: relative;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:before {
    content: '';
    transform: translateX(-100%);
    transition: transform 0.5s;
  }
  &.active {
    &::before {
      content: '';
      width: 100%;
      height: 3px;
      top: -5px;
      position: absolute;
      background-color: ${({ theme }) => theme.primary};
      transform: translateX(0);
    }
  }
`;

export default NavItem;
