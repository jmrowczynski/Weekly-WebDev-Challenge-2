import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Header from 'components/organisms/Header/Header';
import bg from 'assets/img/img1.jpg';
import scrollIcon from 'assets/icons/scroll.svg';

const StyledWrapper = styled.div`
  position: relative;
  padding: 4rem 16rem 7rem 16rem;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 37rem;
  margin-top: 30rem;
`;

const Icon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  position: absolute;
  background-image: url(${scrollIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
`;

const HeaderTemplate = () => (
  <StyledWrapper id="home">
    <Header />
    <InnerWrapper>
      <Title secondary>Fresh Life</Title>
      <Paragraph secondary>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco.
      </Paragraph>
      <Button>get free now</Button>
    </InnerWrapper>
    <Icon />
  </StyledWrapper>
);

export default HeaderTemplate;
