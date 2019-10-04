import styled from 'styled-components';
import React from 'react';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import BlogBox from 'components/molecules/BlogBox/BlogBox';
import Button from 'components/atoms/Button/Button';
import bg1 from 'assets/img/grid-blog/Clip1.jpg';
import bg2 from 'assets/img/grid-blog/Clip2.jpg';
import bg3 from 'assets/img/grid-blog/Clip3.jpg';

const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.bg.fourth};
  padding: 8rem 13rem 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.bg.fourth};
  max-width: 57rem;
  text-align: center;
  margin: 0 auto;
`;

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  grid-gap: 2rem;
  justify-items: center;
  margin-top: 3rem;
`;

const BoldParagraph = styled(Paragraph)`
  position: absolute;
  font-weight: 700;
  font-size: 2rem;
  bottom: 3.5rem;
  left: 0;
  right: 0;
  line-height: 1.2;
`;

const SmallParagraph = styled(Paragraph)`
  position: absolute;
  font-size: 1.3rem;
  bottom: 0.5rem;
  left: 0;
  right: 0;
`;

const StyledButton = styled(Button)`
  margin-top: 5rem;
  align-self: center;
`;

const BlogTemplate = () => (
  <StyledWrapper id="blog">
    <HeaderWrapper>
      <Title>Blog</Title>
      <Paragraph>
        Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit.
      </Paragraph>
    </HeaderWrapper>
    <GridWrapper>
      <BlogBox bg={bg1} day="20" month="NOV">
        <BoldParagraph>Green Smoothies: Too Much of a Good Thing?</BoldParagraph>
        <SmallParagraph>By Auskteez - 2 hours ago</SmallParagraph>
      </BlogBox>
      <BlogBox bg={bg2} day="14" month="NOV">
        <BoldParagraph>Growing Food and a “Thirst” for Innovation</BoldParagraph>
        <SmallParagraph>By Auskteez - 3 hours ago</SmallParagraph>
      </BlogBox>
      <BlogBox bg={bg3} day="10" month="NOV">
        <BoldParagraph>Pesticides &amp; Food: What You Need to Know</BoldParagraph>
        <SmallParagraph>By Auskteez - 6 hours ago</SmallParagraph>
      </BlogBox>
    </GridWrapper>
    <StyledButton color="quaternary">view more</StyledButton>
  </StyledWrapper>
);

export default BlogTemplate;
