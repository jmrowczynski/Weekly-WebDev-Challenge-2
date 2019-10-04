import React from 'react';
import styled from 'styled-components';
import bg from 'assets/img/bg5.jpg';
import Form from 'components/molecules/Form/Form';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 8rem 4.5rem 12rem;
`;

const HeaderWrapper = styled.header`
  max-width: 34rem;
  text-align: center;
  margin: 0 auto;
`;

const InnerWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15rem;
  margin-top: 3rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ size }) => size || '2rem'};
  font-weight: ${({ bold }) => (bold ? 700 : 300)};
  padding: ${({ padd }) => padd || '1rem'};
`;

const ContactTemplate = () => (
  <StyledWrapper id="contact">
    <HeaderWrapper>
      <Title secondary>Contact</Title>
      <StyledParagraph size="1.5rem" secondary>
        For new projects, ideas, business or anything youd like to discuss, contact with me!
      </StyledParagraph>
    </HeaderWrapper>
    <InnerWrapper>
      <Form color="form" />
      <div>
        <StyledParagraph padd="0" size="1.5rem" secondary bold>
          ADDRESS
        </StyledParagraph>
        <StyledParagraph padd="0" secondary>
          123 City name, Street, City, Country
        </StyledParagraph>
        <StyledParagraph padd="0" size="1.5rem" secondary bold>
          EMAIL
        </StyledParagraph>
        <StyledParagraph padd="0" secondary>
          cahee@domain.com
        </StyledParagraph>
        <StyledParagraph padd="0" size="1.5rem" secondary bold>
          PHONE
        </StyledParagraph>
        <StyledParagraph padd="0" secondary>
          +012 345 6789
        </StyledParagraph>
      </div>
    </InnerWrapper>
  </StyledWrapper>
);

export default ContactTemplate;
