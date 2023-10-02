import { useState } from 'react'
import NextImage from 'next/image'
import styled from 'styled-components'
import ServicesRow from './ServicesRow'

export default function Slider() {
  const ServicesWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0 0rem;
    height: 20%;
  `
  const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0rem;
    height: 70vh;
    background: url('/stock-image-1.jpg');
    background-size: cover;
  `

  const Title = styled.div`
    font-weight: bold;
    display: inline-block;
    position: relative;
    font-size: 1.4rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: rgb(var(--secondary));
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `

  return (
    <>
      <ImageWrapper>
        {/* <NextImage src="/stock-image-1.jpg" alt="image 1" layout="fill" /> */}
      </ImageWrapper>
      <ServicesWrapper></ServicesWrapper>
    </>
  )
}
