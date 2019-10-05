import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #262626;
  padding: 1.5rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.5rem;
  color: #b9b9b9;
  ${({ title }) =>
    title &&
    css`
      font-family: 'Pacifico', cursive;
      font-size: 2.5rem;
    `}
`;

const StyledText = styled.span`
  color: #ff2b58;
`;

const FooterTemplate = () => (
  <StyledWrapper>
    <StyledParagraph>© 2015 Company. All right reserved.</StyledParagraph>
    <StyledParagraph title>Cahee</StyledParagraph>
    <StyledParagraph>
      Made with<StyledText> love </StyledText>by Auskteez
    </StyledParagraph>
  </StyledWrapper>
);

export default FooterTemplate;
