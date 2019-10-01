import styled from 'styled-components';

const DateBox = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  text-align: center;
  padding: 0 .5rem;
  &:before {
    content: '${({ day }) => day}';
    display: block;
    font-size: 3.2rem;
  }
  &:after {
    content: '${({ month }) => month}';
    display: block;
    font-size: 2.1rem;
  }
`;

export default DateBox;
