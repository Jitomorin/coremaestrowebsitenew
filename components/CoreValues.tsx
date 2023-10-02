import React from "react";
import styled from "styled-components";
import AutofitGrid from "components/AutofitGrid";
import BasicCard from "components/BasicCard";
import Container from "components/Container";
import { media } from "utils/media";
import SectionTitle from "./SectionTitle";
import OverTitle from "./OverTitle";

const SERVICES = [
  {
    imageUrl: "/grid-icons/integrity_icon.png",
    title: "Integrity",
    description:
      "Upholding the highest ethical standards, ensuring honesty, transparency, and trust in all interactions. This means being truthful and transparent in all interactions, consistently making ethical decisions, respecting and protecting confidential information, and taking ownership of actions and their consequences.",
  },
  {
    imageUrl: "/grid-icons/diversity_icon.png",
    title: "Collaboration",
    description:
      "Embracing teamwork, active listening, and effective communication to foster collaboration and resolve conflicts constructively. This means actively listening to colleagues and clients, participating in team projects, communicating clearly and openly, and approaching conflicts constructively.",
  },
  {
    imageUrl: "/grid-icons/adaptability.png",
    title: "Adabtability",
    description:
      " Embracing change, learning continuously, approaching challenges with resilience and flexibility. This means being open to new ideas and approaches, continuously seeking opportunities for learning, approaching problems with a flexible mindset, and maintaining composure in challenging situations.",
  },
  {
    imageUrl: "/grid-icons/innovation.png",
    title: "Innovation",
    description:
      "Encouraging creativity, experimentation, risk-taking, and forward thinking to drive innovative HR solutions. This means encouraging creative ideas, being willing to test new approaches, embracing calculated risks, and continuously exploring emerging trends and technologies",
  },

  {
    imageUrl: "/grid-icons/meditation.png",
    title: "Humility",
    description:
      " Demonstrating humility, open-mindedness, acknowledging mistakes, and showing empathy in all interactions. This means approaching situations with an open mind, admitting when mistakes are made, showing empathy towards colleagues and clients, and celebrating the success of others.",
  },
];

export default function CoreValues() {
  return (
    <Wrapper>
      <Content>
        {/* <OverTitle>Core values</OverTitle> */}
        <SectionTitle>Core Values</SectionTitle>
      </Content>
      <Container>
        <CustomAutofitGrid>
          {SERVICES.map((singleFeature, idx) => (
            <BasicCard
              useImage={true}
              key={singleFeature.title}
              {...singleFeature}
            />
          ))}
        </CustomAutofitGrid>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  text-align: center;
`;
const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  margin: 0 auto;
  padding: 0 5rem;
  

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--autofit-grid-item-size), 1fr)
  );
  justify-items: center; /* Horizontally center-align grid items */
  align-content: center; /* Vertically center-align grid items */

  /* Center the last item */
  & > *:last-child {
    grid-column: span 2; /* Adjust the span value as needed */
    padding: 3rem 15rem;
  }
`;
