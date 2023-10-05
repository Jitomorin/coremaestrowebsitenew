import React from "react";
import styled from "styled-components";
import AutofitGrid from "components/AutofitGrid";
import BasicCard from "components/BasicCard";
import { media } from "utils/media";
import SectionTitle from "./SectionTitle";
import OverTitle from "./OverTitle";
import NextImage from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import {
  faAnglesRight,
  faFileSignature,
  faGavel,
  faHandshake,
  faMoneyBillWave,
  faPoll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateSlug } from "@/utils/formatString";

const SERVICES = [
  {
    title: "Payroll Management",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    href: "/services/",
    icon: faMoneyBillWave,
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "HR Outsourcing",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    href: "/services/",
    icon: faHandshake,
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "HR Compliance",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    href: "/services/",
    icon: faGavel,
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Employee Engagement Survey",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    href: "/services/",
    icon: faPoll,
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "HR Policies Development",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    href: "/services/",
    icon: faFileSignature,
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
];

export default function ServicesRow() {
  return (
    <Wrapper>
      <MainContainer>
        {SERVICES.map((singleFeature, idx) => (
          <Card>
            <FontAwesomeIcon
              className="text-white"
              icon={singleFeature.icon}
              width={60}
              height={60}
            />
            <Link href={singleFeature.href + generateSlug(singleFeature.title)}>
              <Title>{singleFeature.title}</Title>
            </Link>
          </Card>
        ))}
        <Card>
          <FontAwesomeIcon
            className="text-white"
            icon={faAnglesRight}
            width={60}
            height={60}
          />
          <Link href="/services">
            <Title>{"More"}</Title>
          </Link>
        </Card>
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 2rem;
  ${media("<tablet")} {
    display: none;
  }
`;
const Row = styled(AutofitGrid)`
  display: flex;
  margin: 0rem 0;
  width: 100%;
  justify-content: space-between;
`;
const MainContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  padding: 0;
`;
const Card = styled.div`
  display: flex;
  /* background: rgb(var(--cardBackground)); */
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20rem;
  height: 15rem;
  border: 4px solid white;
  border-radius: 0.6rem;
  color: rgb(var(--secondary));
  font-size: 1.6rem;
  transition: transform 0.3s ease;
  a {
    text-decoration: none;
    color: rgb(var(--text));
    cursor: pointer;
  }

  &:hover {
    scale: 1.05;
  }

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
  display: inline-block;
  position: relative;
  font-size: 1.4rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  color: white;

  /* &::after {
    content: "";
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
  } */
`;

const Description = styled.div`
  opacity: 0.6;
`;
