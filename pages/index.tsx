import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";
import styled from "styled-components";
import BasicSection from "components/BasicSection";
// import Link from "components/Link";
import { EnvVars } from "env";
import Cta from "views/HomePage/Cta";
import ServicesGallery from "views/HomePage/ServicesGallery";
import Partners from "views/HomePage/Partners";
import Divider from "components/Divider";
import Slider from "components/Slider";
import BlogPostSlider from "@/views/HomePage/BlogPostSlider";
import { getAllPartners, getAllPosts, getClient } from "@/sanity/lib/client";
import HomeBasicSection from "@/components/HomeBasicSection";

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
  partners,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="We empower organizations through strategic HR solutions. We bridge skill gaps, foster diversity, and optimize workforce potential, delivering comprehensive HR consultancy services that ensure compliance, boost engagement, and drive sustainable growth."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Slider />
          <HomeBasicSection
            styledImage={false}
            imageUrl="/why-choose-us.webp"
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
                <strong>Customized Solutions:</strong>
                <br />
                We understand that one size does not fit all. We take a
                personalized approach to address your specific challenges,
                ensuring our HR strategies align seamlessly with your
                organization&apos;s objectives.
              </li>
            </ul>
          </HomeBasicSection>
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
          <Partners partners={partners} />
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
  background: rgb(251, 251, 253);
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(255, 255, 255);
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

export async function getServerSideProps() {
  return {
    props: {
      posts: await getAllPosts(client),
      partners: await getAllPartners(client),
    },
  };
}
