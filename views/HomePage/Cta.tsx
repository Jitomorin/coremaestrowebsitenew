import NextLink from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
// import Container from 'components/Container';
import OverTitle from "components/OverTitle";
// import SectionTitle from 'components/SectionTitle';
import { media } from "utils/media";

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          {/* <OverTitle>Lorem ipsum dolor sit amet</OverTitle> */}
          <SectionTitle>Ready to Boost Employee Engagement?</SectionTitle>
          <Description> Contact Us Today to Get Started!</Description>
          <ButtonGroup>
            <NextLink href="contact" passHref>
              <Link>
                Reach Out <span>&rarr;</span>
              </Link>
              {/* <Button>
                Reach Out <span>&rarr;</span>
              </Button> */}
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 1);
`;

const SectionTitle = styled.div`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--textSecondary));

  ${media("<=tablet")} {
    font-size: 4.6rem;
  }
`;

const Container = styled.div`
  background: rgb(var(--primary), 0.8);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Link = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  background: transparent;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  border: 3px solid rgb(var(--textSecondary));
  transition: all 0.35s;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    width: 200px;
    letter-spacing: 2px;
    border: 3px solid rgb(var(--secondary));
    background: rgb(var(--secondary));
    color: rgb(var(--textSecondary));
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media("<=tablet")} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

// const OutlinedButton = styled(Button)`
//   border: 1px solid rgb(var(--textSecondary));
//   color: rgb(var(--textSecondary));
// `;

const CtaWrapper = styled.div`
  background: url("/pexels-pixabay-416405.jpg") no-repeat center center;
  height: 50vh;
  min-height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* to change later */
  ${media("<=tablet")} {
    height: 60vh;
  }
`;
