import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ big }) => (big ? '9rem' : '6rem')};
  font-weight: 700;
  margin: 0;
  color: ${({ secondary }) => (secondary ? 'black' : 'white')};
`;

export default Title;
