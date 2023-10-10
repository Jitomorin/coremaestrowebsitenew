import Head from "next/head";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { EnvVars } from "env";
import { media } from "utils/media";
import SectionTitle from "./SectionTitle";
import NextImage from "next/image";

export interface PageProps {
  title: string;
  description?: string;
  imgURL?: string;
}

export default function Page({
  title,
  description,
  imgURL,
  children,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Wrapper>
        <HeaderContainer imgURL={imgURL!}>
          {/* <NextImage src={imgURL} alt="header image" layout="fill" /> */}
          <Container>
            <Title>{title}</Title>
          </Container>
        </HeaderContainer>
        <Container>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

// const Container = styled.div`
//   background: rgb(var(--primary), 0.8);
//   width: 100%;
//   height: 100%;
//   margin: 0 auto;
//   padding: 0 2rem;
// `;
interface props {
  imgURL: string;
}
const HeaderContainer = styled.div<{ imgURL: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  background: rgb(var(--primary), 0.8);
  margin: 0 auto;
  padding: 0 2rem;
  background: url(${(p) => p.imgURL}) no-repeat center center fixed;
  background-size: cover;
`;
const Container = styled.div`
  position: relative;
  max-width: 180em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;
const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;

  ${media("<=tablet")} {
    max-width: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;
