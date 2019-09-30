import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 3rem 13rem 3rem 3rem;
  width: 40rem;
  border: none;
  box-shadow: 0px 5px 16px -1px #707070;
  background-color: white;
  &:before {
    content: '';
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    border-left: 1px solid #9d9d9d;
    height: 100%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 10rem;
  }
`;

export default Card;
