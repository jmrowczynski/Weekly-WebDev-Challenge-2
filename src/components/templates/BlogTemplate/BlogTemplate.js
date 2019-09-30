import styled from 'styled-components';
import React from 'react';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.bg.fourth};
  min-height: 86rem;
  padding: 8rem 16rem 12rem;
`;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.bg.fourth};
  max-width: 57rem;
  text-align: center;
  margin: 0 auto;
`;

const BlogTemplate = () => (
  <StyledWrapper>
    <HeaderWrapper>
      <Title>Blog</Title>
      <Paragraph>
        Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit.
      </Paragraph>
    </HeaderWrapper>
  </StyledWrapper>
);

export default BlogTemplate;
