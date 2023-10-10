import NextImage from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import Container from "components/Container";
import OverTitle from "components/OverTitle";
import SectionTitle from "components/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { media } from "utils/media";

const TABS = [
  {
    title: "In-Depth Discovery",
    description:
      "We kick off our journey by engaging in an in-depth discovery process. We take the time to understand your organization's history, culture, challenges, and aspirations. Your story becomes our story.",
    imageUrl: "/discovery.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Open Dialogue",
    description:
      "Communication is at the core of our approach. We believe in open and honest conversations. We actively listen to your concerns, ideas, and goals, ensuring that every decision we make aligns with your vision",
    imageUrl: "/dialog.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Trust and Transparency",
    description:
      "Trust is the bedrock of any relationship. We foster trust through transparent interactions, ensuring that you have a clear understanding of our strategies, processes, and outcomes.",
    imageUrl: "/recruitment_image.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Collaboration, Not Dictation",
    description:
      "We don't come with preconceived notions or one-size-fits-all solutions. Instead, we collaborate with you, valuing your insights and expertise, and together, we co-create tailored HR solutions.",
    imageUrl: "/collaboration.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Your Success is Our Success",
    description:
      "At Core Maestro Management, your success is our driving force. We celebrate your achievements and share in your challenges, demonstrating our commitment to your organization's growth.",
    imageUrl: "/success.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Long-Term Commitment",
    description:
      " We don't view our work as short-term transactions. Our goal is to establish long-term partnerships. We'll be by your side, supporting your HR journey year after year.",
    imageUrl: "/commitment.jpg",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
];

export default function ServicesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  // const imagesMarkup = TABS.map((singleTab, idx) => {
  //   const isActive = singleTab.title === currentTab.title;
  //   const isFirst = idx === 0;

  //   return (
  //     <ImageContainer key={singleTab.title} isActive={isActive}>
  //       <NextImage
  //         src={singleTab.imageUrl}
  //         alt={singleTab.title}
  //         layout="fill"
  //         objectFit="fill"
  //         priority={isFirst}
  //       />
  //     </ImageContainer>
  //   );
  // });

  // const tabsMarkup = TABS.map((singleTab, idx) => {
  //   const isActive = singleTab.title === currentTab.title;

  //   return (
  //     <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
  //       <TabTitleContainer>
  //         {/* circle next to title */}
  //         {/* <CircleContainer>
  //           {isActive ? <ThreeLayersCircle baseColor={singleTab.baseColor} secondColor={singleTab.baseColor} /> : <></>}
  //         </CircleContainer> */}
  //         {isActive ? <h2>{singleTab.title}</h2> : <h4>{singleTab.title}</h4>}
  //       </TabTitleContainer>
  //       <Collapse isOpen={isActive} duration={300}>
  //         <TabContent>
  //           <div
  //             dangerouslySetInnerHTML={{ __html: singleTab.description }}
  //           ></div>
  //         </TabContent>
  //       </Collapse>
  //     </Tab>
  //   );
  // });

  // function handleTabClick(idx: number) {
  //   setCurrentTab(TABS[idx]);
  // }

  return (
    <ServicesGalleryWrapper>
      {/* <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
      <SectionTitle className="mb-20">Our Approach</SectionTitle>
      <Tabs>
        <TabList className="text-3xl text-center mb-4 flex font-bold justify-center active:text-[#ffaf01] hover:text-[#ffaf01]">
          {TABS.map((singleTab, idx) => {
            return <Tab key={idx}>{singleTab.title}</Tab>;
          })}
        </TabList>
        {TABS.map((singleTab, idx) => {
          return (
            <TabPanel key={idx}>
              <ImageContainer key={singleTab.title}>
                <NextImage
                  src={singleTab.imageUrl}
                  alt={singleTab.title}
                  layout="fill"
                  objectFit="fill"
                  priority={true}
                />
                <TabContent>
                  <p>{singleTab.description}</p>
                </TabContent>
              </ImageContainer>
            </TabPanel>
          );
        })}
      </Tabs>
    </ServicesGalleryWrapper>
  );
}

const ServicesGalleryWrapper = styled(Container)`
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 5rem;
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

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  flex: 2;
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
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  z-index: 1000;
  background-color: rgb(var(--primary));
  width: 40%;
  padding: 1rem;
  color: white;
  font-size: 3rem;
  align-items: center;
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: bold;
  color: white;
  text-align: celeftnter;
  width: 40%;
  height: 100%;
  justify-content: center;
  background-color: rgb(var(--primary), 0.85);

  padding-left: calc(1rem + 1.5rem);
  padding-right: calc(4rem + 1.5rem);
  p {
    font-size: 3rem;
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  ${media("<desktop")} {
    padding-left: calc(1rem + 1.25rem);
    padding-right: calc(3rem + 1.25rem);
    p {
      font-size: 2rem;
    }
    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
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
