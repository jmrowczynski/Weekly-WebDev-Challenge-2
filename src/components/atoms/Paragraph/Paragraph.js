import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
  padding: 1rem 0;
  color: ${({ secondary }) => (secondary ? 'black' : 'white')};
`;

export default Paragraph;
