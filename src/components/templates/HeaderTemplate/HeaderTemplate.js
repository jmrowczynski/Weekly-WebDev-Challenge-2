import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Header from 'components/organisms/Header/Header';
import bg from 'assets/img/img1.jpg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 16rem;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 37rem;
  margin-top: 22rem;
`;

const HeaderTemplate = () => (
  <StyledWrapper>
    <Header />
    <InnerWrapper>
      <Title secondary>Fresh Life</Title>
      <Paragraph secondary>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco.
      </Paragraph>
      <Button>get free now</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default HeaderTemplate;
