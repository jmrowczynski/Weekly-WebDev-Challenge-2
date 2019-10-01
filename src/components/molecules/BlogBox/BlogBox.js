import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DateBox from 'components/atoms/DateBox/DateBox';

const StyledWrapper = styled.section`
  position: relative;
  width: 37rem;
  height: 31rem;
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 13px -2px rgba(0, 0, 0, 0.75);
  &::before {
    content: '';
    position: absolute;
    background-image: linear-gradient(white, black);
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45%;
  }
`;

const StyledDateBox = styled(DateBox)`
  position: absolute;
  top: 3rem;
  left: 3rem;
`;

const BlogBox = ({ bg, day, month, children }) => (
  <StyledWrapper bg={bg}>
    <StyledDateBox day={day} month={month} />
    {children}
  </StyledWrapper>
);

BlogBox.propTypes = {
  bg: PropTypes.string.isRequired,
  day: PropTypes.string,
  month: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BlogBox.defaultProps = {
  day: '1',
  month: 'JAN',
};

export default BlogBox;
