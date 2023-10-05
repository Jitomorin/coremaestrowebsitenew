import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styled from "styled-components";
import BasicSection from "components/BasicSection";
// import Link from "components/Link";
import { EnvVars } from "env";
// import { getAllPosts } from "utils/postsFetcher";
import Cta from "views/HomePage/Cta";
import Services from "views/HomePage/Services";
import ServicesGallery from "views/HomePage/ServicesGallery";
import Hero from "views/HomePage/Hero";
import Partners from "views/HomePage/Partners";
import ScrollableBlogPosts from "views/HomePage/ScrollableBlogPosts";
import Divider from "components/Divider";
// import WordCycle from "components/WordCycle";
import Slider from "components/Slider";
import BasicSectionNoImage from "components/BasicSectionNoImage";
import StyledTabs from "@/views/HomePage/StyledTabs";
import { useEffect, useState } from "react";
// import { getBlogs } from "@/sanity/lib/client";
import BlogPostSlider from "@/views/HomePage/BlogPostSlider";
import { getAllPosts, getClient, getPostByCategory } from "@/sanity/lib/client";
import post from "@/sanity/schemas/post";
import Button from "@/components/Button";

const client = getClient();
const tabsData = [
  {
    id: "tab1",
    title: "Features",
    content: (
      <>
        Features go here Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ea dolorem sequi, quo tempore in eum obcaecati atque quibusdam
        officiis est dolorum minima deleniti ratione molestias numquam. Voluptas
        voluptates quibusdam cum?
      </>
    ),
  },
  // Add more tab data as needed
];
export default function Homepage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const blogList = useState([]);
  // useEffect(() => {
  //   getBlogs().then((doc) => {
  //     var data = doc;
  //     console.log(data);
  //     blogList.push(data);
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Slider />
          <BasicSection
            imageUrl="/why-choose-us.jpg"
            title="Why Choose Us:"
            reversed
          >
            <p>We&apos;ve Been There and Done It</p>
            <ul>
              <li>
                <strong>Experience Matters:</strong>
                <br />
                We understand your HR challenges because we&apos;ve navigated
                them ourselves. Our team brings real-world experience, ensuring
                we grasp the complexities of your industry.
              </li>
              <li>
                <strong>Cost-Efficiency:</strong>
                <br />
                We believe in delivering exceptional value without straining
                your budget. Our services are cost-effective, offering a high
                return on investment for your HR needs.
              </li>
              <li>
                <strong>Building Relationships:</strong>
                <br />
                We don&apos;t just provide solutions; we cultivate lasting
                relationships. At Core Maestro Management, we prioritize
                long-term partnerships. Your success is our success, and
                we&apos;re committed to walking this journey with you
              </li>
              <li>
                <strong>Listening with Humility:</strong>
                <br />
                We recognize that every organization is unique, and we
                don&apos;t claim to have all the answers. Our approach is rooted
                in humility. We listen attentively to your needs, concerns, and
                aspirations before tailoring HR solutions.
              </li>
              <li>
                <strong>Customized Solutions:</strong>
                <br />
                We understand that one size does not fit all. We take a
                personalized approach to address your specific challenges,
                ensuring our HR strategies align seamlessly with your
                organization&apos;s objectives.
              </li>
              <li>
                <strong>Continuous Improvement:</strong>
                <br />
                We&apos;re always learning and evolving. Our commitment to
                ongoing improvement means you benefit from the latest HR
                innovations and best practices.
              </li>
            </ul>
          </BasicSection>
          <Divider />
          {/* <Button
            onClick={async () => {
              var data = await getPostByCategory(
                client,
                "Recruitment and Talent Acquisition"
              );
              console.log(data);
            }}
          >
            Subscribe
          </Button> */}
          <Partners />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <ServicesGallery />
          {/* <StyledTabs /> */}
          <Cta />

          {/* <ScrollableBlogPosts posts={posts} /> */}
          {posts && <BlogPostSlider posts={posts} />}
          {/* <BlogPostSlider posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 0rem;
  padding-right: 0rem;

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(client),
    },
  };
}
