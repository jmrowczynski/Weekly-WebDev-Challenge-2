import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/theme';

const StyledWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.25fr;
  grid-column-gap: 2rem;
`;

const Subscribe = () => (
  <StyledWrapper>
    <Input type="email" placeholder="Your email address..." />
    <Button color={theme.tertiary}>subscribe</Button>
  </StyledWrapper>
);

export default Subscribe;
