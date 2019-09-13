import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Card from 'components/atoms/Card/Card';
import tomato from 'assets/img/tomato.png';
import shopIcon from 'assets/icons/icon.svg';
import qualityIcon from 'assets/icons/icon2.svg';
import deliveryIcon from 'assets/icons/icon3.svg';
import organizeIcon from 'assets/icons/icon4.svg';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  justify-content: center;
  background-color: #70bfff;
  padding: 10rem 16rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin-bottom: 1.5rem;
  }
  ${({ photo }) =>
    photo &&
    css`
      background-image: url(${tomato});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 100%;
      max-width: 55rem;
    `}
`;

const ServicesTemplate = () => (
  <div id="services">
    <StyledWrapper>
      <InnerWrapper>
        <Card icon={shopIcon}>Online Shopping</Card>
        <Card icon={qualityIcon}>Quality Product</Card>
        <Card icon={deliveryIcon}>Domestic &amp; International Delivery</Card>
        <Card icon={organizeIcon}>Well Organized</Card>
      </InnerWrapper>
      <InnerWrapper photo>
        <Title big>Our Services</Title>
      </InnerWrapper>
    </StyledWrapper>
  </div>
);

export default ServicesTemplate;
