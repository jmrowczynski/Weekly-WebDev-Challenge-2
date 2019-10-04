import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 5fr;
  grid-row-gap: 1.5rem;
  min-height: 45rem;
`;

const StyledTitle = styled(Input)`
  position: relative;
  opacity: 1;
  font-weight: 700;
  color: white;
  margin: 0;
  &:before {
    content: '';
    position: absolute;
    display: block;
    background-color: #355b82;
    height: 100%;
    width: 0.5rem;
    top: 0;
    left: 0;
  }
`;

const Form = ({ color }) => (
  <StyledWrapper>
    <StyledTitle as="h1" secondary color={color}>
      Auskeetz Tran
    </StyledTitle>
    <Input type="email" secondary color={color} placeholder="Your email..." />
    <Input type="tel" secondary color={color} placeholder="Your phone number..." />
    <Input as="textarea" secondary color={color} placeholder="Your message..." />
  </StyledWrapper>
);

Form.propTypes = {
  color: PropTypes.string,
};

Form.defaultProps = {
  color: 'black',
};

export default Form;
