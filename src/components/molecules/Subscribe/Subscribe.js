import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.25fr;
  grid-column-gap: 2rem;
`;

const Subscribe = ({ color }) => (
  <StyledWrapper>
    <Input type="email" placeholder="Your email address..." />
    <Button color={color}>subscribe</Button>
  </StyledWrapper>
);

Subscribe.propTypes = {
  color: PropTypes.string,
};

Subscribe.defaultProps = {
  color: 'black',
};

export default Subscribe;
