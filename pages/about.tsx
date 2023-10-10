import styled from "styled-components";
import Page from "components/Page";
import { media } from "utils/media";
import BasicSection from "components/BasicSection";
import Divider from "components/Divider";
import CoreValues from "components/CoreValues";
import OurTeam from "views/AboutPage/OurTeam";
import AboutSection from "components/AboutSection";
import FadeAnimationComponent from "@/components/FadeInAnimation";
import { SharedPageProps } from "./_app";
import { Employee } from "@/sanity/lib/queries";
import { GetStaticProps } from "next";
import { readToken } from "@/sanity/env";
import {
  getAllEmployees,
  getAllServiceSlugs,
  getClient,
} from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface AboutProps extends SharedPageProps {
  employees: Employee[];
}
interface Query {
  [key: string]: string;
}

export default function AboutPage() {
  const [EmployeeList, setEmployeeList] = useState<Employee[]>([]);
  useEffect(() => {
    const client = getClient();
    const fetchEmployees = async () => {
      const slugs = await getAllServiceSlugs();
      console.log(slugs);
      const employees = await getAllEmployees(client);
      setEmployeeList(employees);
    };
    fetchEmployees();
  }, []);

  return (
    <Page
      title="About Us"
      imgURL="/job-interview_image.jpg"
      description="Minim sint aliquip nostrud excepteur cupidatat amet do laborum exercitation cupidatat ea proident."
    >
      <AboutContainer>
        <AboutSection title="Core Maestro Management">
          At Core Maestro Management, we are the architects of thriving
          workplaces. Our passion lies in empowering organizations to reach
          their full potential by harnessing the power of their people.
        </AboutSection>

        <BasicSection styledImage imageUrl="/mission.jpg" title="Our Mission">
          <p>
            At <strong>Core Maestro Management</strong>, our mission is crystal
            clear: We empower organizations within Kenya and beyond through
            strategic HR solutions. We bridge skill gaps, foster diversity, and
            optimize workforce potential, delivering comprehensive HR
            consultancy services that ensure compliance, boost engagement, and
            drive sustainable growth.
          </p>
        </BasicSection>
        <BasicSection
          styledImage
          imageUrl="/vision.jpg"
          title="Our Vision"
          reversed
        >
          <p>
            Our vision is to be the premier HR consultancy partner, not only in
            Kenya but across the region. We aspire to be renowned for our
            steadfast dedication to cultivating skilled, diverse, and engaged
            workforces. We aim to be the catalyst for positive change, guiding
            organizations toward a future where their HR practices contribute
            significantly to the social and economic development of our region.
          </p>
        </BasicSection>
        <Divider />
        <FadeAnimationComponent>
          <CoreValues />
        </FadeAnimationComponent>
        <OurteamSection>
          <FadeAnimationComponent>
            <OurTeam employees={EmployeeList} />
          </FadeAnimationComponent>
        </OurteamSection>
      </AboutContainer>
    </Page>
  );
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
const OurteamSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const getStaticProps: GetStaticProps<AboutProps, Query> = async (
  ctx
) => {
  const { draftMode = false } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const employees = await getAllEmployees(client);

  return {
    props: {
      employees,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
