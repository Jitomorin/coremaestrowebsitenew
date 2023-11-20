import styled from "styled-components";
import Page from "components/Page";
import { media } from "utils/media";
import { getAllServices, getClient } from "@/sanity/lib/client";
import { GetServerSideProps, GetStaticProps } from "next";
import { Service } from "@/sanity/lib/queries";
import { SharedPageProps } from "../_app";
import { readToken } from "@/sanity/env";
import ServiceCard from "@/components/ServiceCard";
import ServicesSection from "@/components/ServicesSection";

export interface ServiceProps extends SharedPageProps {
  services: Service[];
}

export default function ServicesPage(props: ServiceProps) {
  const { services } = props;

  return (
    <Page
      imgURL="/services_stock.webp"
      title="Services"
      description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit."
    >
      <Wrapper>
        {/* <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" /> */}
        {/* "Welcome to [Your Company Name], your trusted partner in human resources management. At the heart of every thriving organization lies a strong and well-managed workforce, and that's where we come in. Our dedicated team of HR experts is committed to helping businesses of all sizes navigate the ever-evolving landscape of human resources with ease. Whether you're seeking assistance with talent acquisition, employee benefits, compliance, or any other HR-related need, we have the expertise and solutions to streamline your operations and empower your workforce. With a focus on delivering personalized services tailored to your unique business goals, we aim to foster a culture of growth, productivity, and employee well-being. Explore our comprehensive range of HR services designed to drive your organization's success." */}
        <ServicesSection title="We offer these professional services">
          Choose Core Maestro Management for an approach that combines
          experience, cost-efficiency, relationship-building, humility,
          customization, and a dedication to continuous improvement. Your HR
          challenges are our opportunities for success.
        </ServicesSection>
        <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32 max-w-[90%]">
          {services.map((singleFeature, idx) => (
            <ServiceCard
              key={singleFeature.slug?.current!}
              title={singleFeature.title}
              imageUrl={singleFeature.coverImage}
              slug={singleFeature.slug?.current!}
            />
          ))}
        </div>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const CustomAutofitGrid = styled.div`
  --autofit-grid-item-size: 30rem;
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  ${media("<largeDesktop")} {
    max-width: 90%;
  }

  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--autofit-grid-item-size), var(--autofit-grid-item-size))
  );
  grid-template-rows: repeat(
    auto-fit,
    minmax(var(--autofit-grid-item-size), var(--autofit-grid-item-size))
  );
  grid-gap: 4rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`;
export const getServerSideProps: GetServerSideProps<ServiceProps> = async (
  ctx
) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const services = await getAllServices(client);

  if (!services) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      services,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
