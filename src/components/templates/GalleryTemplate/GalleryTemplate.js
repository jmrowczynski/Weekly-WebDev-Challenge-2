import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import img1 from 'assets/img/grid/img.jpg';
import img2 from 'assets/img/grid/img2.jpg';
import img3 from 'assets/img/grid/img3.jpg';
import img4 from 'assets/img/grid/img4.jpg';
import img5 from 'assets/img/grid/img5.jpg';

const StyledWrapper = styled.div`
  background-color: #ffe92f;
  padding: 8rem 17rem;
`;

const InnerWrapper = styled.header`
  text-align: center;
  max-width: 63rem;
  margin: 0 auto 2rem;
`;

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 1rem;
  div:first-child {
    grid-row: 1/5;
    grid-column: 1/5;
    overflow: hidden;
  }
  div:nth-child(2) {
    grid-row: 1/3;
    grid-column: 5/7;
  }
  div:nth-child(3) {
    grid-row: 3/5;
    grid-column: 5/7;
  }
  div:nth-child(4) {
    grid-row: 5/8;
    grid-column: 1/4;
  }
  div:last-child {
    grid-row: 5/8;
    grid-column: 4/7;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const GalleryTemplate = () => (
  <div id="gallery">
    <StyledWrapper>
      <InnerWrapper>
        <Title secondary big>
          Gallery
        </Title>
        <Paragraph secondary>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </Paragraph>
      </InnerWrapper>
      <GridWrapper>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
      </GridWrapper>
    </StyledWrapper>
  </div>
);

export default GalleryTemplate;
