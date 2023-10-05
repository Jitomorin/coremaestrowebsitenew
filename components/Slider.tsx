import { useState } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import ServicesRow from "./ServicesRow";

export default function Slider() {
  const ServicesWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0 0rem;
    height: 20%;
  `;
  const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0rem;
    height: 93.5vh;
    background: url("/stock-image-1.jpg");
    background-size: cover;
  `;

  const Title = styled.div`
    font-weight: bold;
    display: inline-block;
    text-align: center;
    align-self: center;
    max-width: 14em;
    position: relative;
    font-size: 6rem;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-left: 5rem;
    margin-top: 26rem;

    /* when teblet */
    @media (max-width: 768px) {
      font-size: 4rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  `;

  return (
    <>
      <ImageWrapper>
        {/* <NextImage src="/stock-image-1.jpg" alt="image 1" layout="fill" /> */}
        <Title>We are the architects of the thriving workplace</Title>
        <ServicesRow />
      </ImageWrapper>
      {/* <ServicesWrapper>

      </ServicesWrapper> */}
    </>
  );
}
