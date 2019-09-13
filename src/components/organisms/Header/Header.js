import React from 'react';
import styled from 'styled-components';
import Nav from 'components/molecules/Nav/Nav';

const StyledWrapper = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  left: 5rem;
  right: 0;
  padding: 0 10rem;
  z-index: 9;
  h1 {
    font-family: 'Pacifico', cursive;
    font-weight: 300;
    font-size: 5rem;
    margin: 0;
    padding: 0 1rem;
  }
`;

const Header = () => (
  <StyledWrapper>
    <h1>Cahee</h1>
    <Nav />
  </StyledWrapper>
);

export default Header;
