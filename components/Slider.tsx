import { useState } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import ServicesRow from "./ServicesRow";
import { media } from "@/utils/media";

export default function Slider() {
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
    margin-bottom: 2rem;
    margin-right: 5rem;
    margin-left: 5rem;
    margin-top: 20rem;
    color: white;

    /* When screen is less or equal to desktop */
    ${media("<largeDesktop")} {
      font-size: 4.6rem;
      margin-top: 20rem;
    }
    /* when screen is less than tablet */
    ${media("<tablet")} {
      margin-left: 2rem;
      margin-right: 2rem;
      align-self: center;
      justify-self: center;
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
