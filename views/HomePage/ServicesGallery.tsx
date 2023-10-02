import NextImage from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import Collapse from "components/Collapse";
import Container from "components/Container";
import OverTitle from "components/OverTitle";
import SectionTitle from "components/SectionTitle";
import ThreeLayersCircle from "components/ThreeLayersCircle";
import { media } from "utils/media";

const TABS = [
  {
    title: "In-Depth Discovery",
    description:
      "<p>We kick off our journey by engaging in an in-depth discovery process. We take the time to understand your organization&apos;s history, culture, challenges, and aspirations. Your story becomes ourstory.</p>",
    imageUrl: "/discovery.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Open Dialogue",
    description:
      "<p>Communication is at the core of our approach. We believe in open and honest conversations. We actively listen to your concerns, ideas, and goals, ensuring that every decision we make alignswith your vision</p>",
    imageUrl: "/dialog.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Trust and Transparency",
    description:
      "<p>Trust is the bedrock of any relationship. We foster trust through transparent interactions, ensuring that you have a clear understanding of our strategies, processes, and outcomes.</p>",
    imageUrl: "/recruitment_image.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Collaboration, Not Dictation",
    description:
      "<p>We don&apos;t come with preconceived notions or one-size-fits-all solutions. Instead, we collaborate with you, valuing your insights and expertise, and together, we co-create tailored HR solutions.</p>",
    imageUrl: "/collaboration.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Your Success is Our Success",
    description:
      "<p>At Core Maestro Management, your success is our driving force. We celebrate your achievements and share in your challenges, demonstrating our commitment to your organization&apos;s growth.</p>",
    imageUrl: "/success.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Long-Term Commitment",
    description:
      "<p> We don&apos;t view our work as short-term transactions. Our goal is to establish long-term partnerships. We&apos;ll be by your side, supporting your HR journey year after year.</p>",
    imageUrl: "/commitment.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
];

export default function ServicesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        <NextImage
          src={singleTab.imageUrl}
          alt={singleTab.title}
          layout="fill"
          objectFit="fill"
          priority={isFirst}
        />
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          {/* circle next to title */}
          {/* <CircleContainer>
            {isActive ? <ThreeLayersCircle baseColor={singleTab.baseColor} secondColor={singleTab.baseColor} /> : <></>}
          </CircleContainer> */}
          {isActive ? <h2>{singleTab.title}</h2> : <h4>{singleTab.title}</h4>}
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div
              dangerouslySetInnerHTML={{ __html: singleTab.description }}
            ></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <ServicesGalleryWrapper>
      <Content>
        <SectionTitle>Our Approach</SectionTitle>
      </Content>
      <GalleryWrapper>
        {imagesMarkup}
        <TabsContainer>{tabsMarkup}</TabsContainer>
      </GalleryWrapper>
    </ServicesGalleryWrapper>
  );
}

const ServicesGalleryWrapper = styled(Container)`
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${media("<=desktop")} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-left: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media("<=desktop")} {
    margin-left: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? "2" : "0")};
  box-shadow: var(--shadow-md);
  max-width: 100%;
  max-height: 100%;

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
    width: ${(p) => (p.isActive ? "100%" : "0")};
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media("<=desktop")} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
    color: rgb(var(--primary));
  }
  h2 {
    flex: 1;
    color: rgb(var(--primary));
  }
  &:hover {
    h4 {
      color: rgb(var(--secondary));
    }
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(1rem + 1.5rem);
  padding-right: calc(4rem + 1.5rem);

  ${media("<=tablet")} {
    padding-left: calc(1rem + 1.25rem);
    padding-right: calc(3rem + 1.25rem);
  }

  p {
    font-weight: normal;
    border-left: 2px solid rgb(var(--secondary));
    padding-left: 1rem;
  }
`;

const CircleContainer = styled.div`
  ${media("<=tablet")} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
