import NextImage from "next/image";
import React from "react";
import styled from "styled-components";

import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "components/Container";
import Separator from "components/Separator";
import { media } from "utils/media";
import RichText from "components/RichText";
import { type } from "os";
import { Employee } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import NextLink from "next/link";
import { FacebookIcon, LinkedinIcon } from "react-share";

type OurteamProps = { employees: Employee[] };

export default function OurTeam({ employees }: OurteamProps) {
  return (
    <div>
      <Separator />
      <OurteamWrapper>
        <TitleContent>
          <Title>Meet Our Team:</Title>
          <RichText>
            Our team is a blend of diverse talents, each contributing unique
            expertise and perspectives. Together, we form a powerhouse of HR
            knowledge, creativity, and dedication.
          </RichText>
        </TitleContent>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          slidesPerView={1}
          autoplay={{ delay: 8000 }}
          centeredSlides
          navigation
          loop
        >
          {employees.map((employee, idx) => (
            <SwiperSlide key={idx}>
              <OurteamCard>
                {/* <NextImage
                  src={singleTestimonial.companyLogoUrl}
                  alt={`${singleTestimonial.author.name}'s company logo`}
                  width={200}
                  height={40}
                />
                <Content>“{singleTestimonial.content}”</Content> */}
                <AuthorContainer>
                  <AuthorImageContainer>
                    <NextImage
                      src={urlForImage(employee.image?.asset?._ref).url()}
                      alt={"Author's photo"}
                      width={200}
                      height={200}
                      objectFit="cover"
                    />
                  </AuthorImageContainer>
                  <AuthorContent>
                    <AuthorName>{employee.fullName}</AuthorName>
                    <AuthorTitle>{employee.position}</AuthorTitle>
                    <AuthorSocials>
                      {employee.linkedin && (
                        <SocialmediaLink>
                          <NextLink href={employee.linkedin} passHref>
                            <LinkedinIcon
                              className="pl-6"
                              size={40}
                              round={true}
                            />
                          </NextLink>
                        </SocialmediaLink>
                      )}
                      {employee.facebook && (
                        <SocialmediaLink>
                          <NextLink
                            href={employee.facebook}
                            passHref
                            className="pl-6"
                          >
                            <FacebookIcon size={40} round={true} />
                          </NextLink>
                        </SocialmediaLink>
                      )}
                      {employee.instagram && (
                        <SocialmediaLink>
                          <NextLink href={employee.instagram} passHref>
                            {/* <TwitterIcon size={40} round={true} /> */}
                            <NextImage
                              src="/instagram_logo.png"
                              alt="instagram_link"
                              width={55}
                              height={55}
                            />
                          </NextLink>
                        </SocialmediaLink>
                      )}
                    </AuthorSocials>
                  </AuthorContent>
                </AuthorContainer>
              </OurteamCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </OurteamWrapper>
      {/* <Separator /> */}
    </div>
  );
}

const OurteamWrapper = styled(Container)`
  position: relative;
  margin-bottom: 3rem;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(255, 175, 1);

    ${media("<=desktop")} {
    }
  }

  .swiper-button-prev {
    color: rgb(255, 255, 255);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(255, 255, 255);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const OurteamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;

  ${media("<=tablet")} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const TitleContent = styled.div`
  margin-top: 1rem;
  margin-bottom: 10rem;
  margin: 0 25rem;
  text-align: center;
  ${media("<=tablet")} {
    max-width: 100%;
    margin: 5rem 0;
  }
`;
const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media("<=desktop")} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.8rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;
const AuthorSocials = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const AuthorName = styled.p`
  font-weight: normal;
  font-size: 3rem;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  margin-right: 4rem;
  overflow: hidden;
  height: 15rem;
  width: 15rem;
`;
const SocialmediaLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
  padding: 0, 0.5rem;

  &:not(:last-child) {
    margin-left: 1rem;
  }

  &:hover {
    transform: scale(1.07);
  }
`;
