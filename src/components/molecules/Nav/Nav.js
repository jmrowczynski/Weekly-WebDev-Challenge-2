import React from 'react';
import styled from 'styled-components';
import NavItem from 'components/atoms/NavItem/NavItem';
import { Link } from 'react-scroll';

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
        <NavItem as={Link} to="home" spy smooth offset={-50} duration={500}>
          home
        </NavItem>
      </li>
      <li>
        <NavItem as={Link} to="about" spy smooth offset={-50} duration={500}>
          about
        </NavItem>
      </li>
      <li>
        <NavItem as={Link} to="services" spy smooth offset={-50} duration={500}>
          services
        </NavItem>
      </li>
      <li>
        <NavItem as={Link} to="gallery" spy smooth offset={-50} duration={500}>
          gallery
        </NavItem>
      </li>
      <li>
        <NavItem as={Link} to="blog" spy smooth offset={-50} duration={500}>
          blog
        </NavItem>
      </li>
      <li>
        <NavItem as={Link} to="contact" spy smooth offset={-50} duration={500}>
          contact
        </NavItem>
      </li>
    </StyledWrapper>
  </nav>
);

export default Nav;
