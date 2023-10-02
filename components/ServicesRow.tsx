import React from "react";
import styled from "styled-components";
import AutofitGrid from "components/AutofitGrid";
import BasicCard from "components/BasicCard";
import Container from "components/Container";
import { media } from "utils/media";
import SectionTitle from "./SectionTitle";
import OverTitle from "./OverTitle";
import NextImage from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const SERVICES = [
  {
    title: "Recruitment",
    description:
      "Core Maestro Management links businesses with top global IT specialists, facilitating access to a diverse talent pool that can catalyze innovation and promote success. Come aboard to elevate your business with exceptional IT knowledge.",
    imageUrl: "/recruitment.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Interview Coaching",
    description:
      "At Core Maestro Management, our Interview Coaching service sharpens your interview skills, giving you the edge to confidently secure your dream job.",
    imageUrl: "/coaching.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "CV Writing",
    description:
      "Core Maestro Management specializes in crafting standout CVs that boost your chances in the current competitive job market. Elevate your career with our tailored CVs.",
    imageUrl: "/resume.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Payrol Management",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "HR Outsourcing",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "HR Compliance and Legal Advisory",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Training and Development",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Compensation and Benefits Review",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Performance Management",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
  {
    title: "Employee Engagement Survey",
    description:
      "Core Maestro Management streamlines payroll processes, ensuring accuracy and compliance. Trust us to handle your payroll needs efficiently and hassle-free.",
    imageUrl: "/payroll.png",
    baseColor: "21,35,62",
    secondColor: "21,35,62",
  },
];

export default function ServicesRow() {
  return (
    <Wrapper>
      <Container>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          style={{ width: "90%" }}
        >
          {SERVICES.map((singleFeature, idx) => (
            <SwiperSlide key={singleFeature.title}>
              <Card>
                <NextImage
                  src={singleFeature.imageUrl}
                  width={90}
                  height={90}
                  alt={singleFeature.title}
                />
                <Link href="/services">
                  <Title>{singleFeature.title}</Title>
                </Link>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Row = styled(AutofitGrid)`
  display: flex;
  margin: 0rem 0;
  width: 100%;
  justify-content: space-between;
`;
const Card = styled.div`
  display: flex;
  background: rgb(var(--cardBackground));
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20rem;
  height: 15rem;
  border: 1px solid rgb(var(--primary));
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  transition: transform 0.3s ease;
  a {
    text-decoration: none;
    color: rgb(var(--text));
    cursor: pointer;
  }

  &:hover {
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

  &::after {
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
  }
`;

const Description = styled.div`
  opacity: 0.6;
`;
