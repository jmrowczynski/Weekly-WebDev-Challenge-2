import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import image from 'assets/img/img.png';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: #00c4c4;
  padding: 0 5rem;
  grid-column-gap: 3rem;
  img {
    width: 100%;
    min-width: 30rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50rem;
  padding: 5rem 0;
`;

const AboutTemplate = () => (
  <StyledWrapper id="about">
    <img src={image} alt="" />
    <InnerWrapper>
      <Title big>About Us</Title>
      <Paragraph>
        Abore Cahee magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </Paragraph>
      <Paragraph>
        Nim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
      </Paragraph>
    </InnerWrapper>
  </StyledWrapper>
);

export default AboutTemplate;
