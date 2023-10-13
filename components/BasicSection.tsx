import NextImage from "next/image";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { media } from "utils/media";
import Container from "./Container";
import OverTitle from "./OverTitle";
import RichText from "./RichText";
import StyledImage from "./StyledImage";

export interface BasicSectionProps {
  imageUrl: string;
  title: string;
  overTitle?: string;
  reversed?: boolean;
  styledImage: boolean;
}

export default function BasicSection({
  imageUrl,
  title,
  overTitle,
  reversed,
  children,
  styledImage,
}: PropsWithChildren<BasicSectionProps>) {
  function isStringEmpty(str: string): boolean {
    return str.trim() === "";
  }
  return (
    <BasicSectionWrapper reversed={reversed}>
      <ImageContainer>
        {/* <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" /> */}
        {styledImage ? (
          <StyledImage imageURL={imageUrl} />
        ) : (
          <NextImage src={imageUrl} alt={title} layout="fill" />
        )}
      </ImageContainer>

      <ContentContainer>
        {overTitle == null ? null : (
          <CustomOverTitle>{overTitle}</CustomOverTitle>
        )}
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media("<=tablet")} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 80vh;
  width: 50%;
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media("<=desktop")} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

type Props = Pick<BasicSectionProps, "reversed">;
const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: ${(p: Props) => (p.reversed ? "row-reverse" : "row")};
  margin-top: 2rem;
  margin-bottom: 10rem;

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? "0 0 0 5rem" : "0 5rem 0 0")};
  }
  ${media("<largeDesktop")} {
    max-width: 90%;
  }
  ${media("<=tablet")} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
