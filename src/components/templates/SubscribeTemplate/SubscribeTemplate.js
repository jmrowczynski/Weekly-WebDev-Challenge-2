import React from 'react';
import styled from 'styled-components';
import bg from 'assets/img/bg3.jpg';
import Title from 'components/atoms/Title/Title';
import Subscribe from 'components/molecules/Subscribe/Subscribe';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  padding: 14rem 56rem 16rem 16rem;
`;
const InnerWrapper = styled.div`
  max-width: 57rem;
  padding-bottom: 1.5rem;
`;

const SmallTitle = styled(Title)`
  font-size: 4rem;
`;

const SubscribeTemplate = () => (
  <StyledWrapper>
    <InnerWrapper>
      <SmallTitle secondary>Subscribe To Us</SmallTitle>
      <Paragraph secondary>
        Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam.
      </Paragraph>
    </InnerWrapper>
    <Subscribe />
  </StyledWrapper>
);

export default SubscribeTemplate;
