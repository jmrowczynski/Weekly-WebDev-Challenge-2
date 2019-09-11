import React from 'react';
import styled from 'styled-components';
import Nav from 'components/molecules/Nav/Nav';

const StyledWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
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
