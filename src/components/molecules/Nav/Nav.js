import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavItem from 'components/atoms/NavItem/NavItem';

const StyledWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  li {
    list-style: none;
    margin-right: 3rem;
  }
`;

const Nav = () => (
  <nav>
    <StyledWrapper>
      <li>
        <NavItem exact as={NavLink} to="/">
          home
        </NavItem>
      </li>
      <li>
        <NavItem as={NavLink} to="/about">
          about
        </NavItem>
      </li>
      <li>
        <NavItem as={NavLink} to="/services">
          services
        </NavItem>
      </li>
      <li>
        <NavItem as={NavLink} to="/gallery">
          gallery
        </NavItem>
      </li>
      <li>
        <NavItem as={NavLink} to="/blog">
          blog
        </NavItem>
      </li>
      <li>
        <NavItem as={NavLink} to="/contact">
          contact
        </NavItem>
      </li>
    </StyledWrapper>
  </nav>
);

export default Nav;
