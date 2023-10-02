import React from "react";
import { SharedPageProps } from "../_app";
import styled from "styled-components";
import Container from "@/components/Container";
import SectionTitle from "components/SectionTitle";
import Page from "@/components/Page";
import { GetStaticProps } from "next";
import { Service } from "@/sanity/lib/queries";
import {
  getAllServiceSlugs,
  getClient,
  getserviceBySlug,
} from "@/sanity/lib/client";
import { readToken } from "@/sanity/env";
import { useRouter } from "next/router";

// interface pageProps extends SharedPageProps {
//     service: Service;
// }
interface PageProps extends SharedPageProps {
  service: Service;
}

interface Query {
  [key: string]: string;
}

export default function ServiceSlugRoute() {
  return (
    <Page title={"Services"} imgURL="/services_stock.jpg">
      <Wrapper>
        <Container>
          <Title>service title</Title>
        </Container>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
const Title = styled.div`
  font-size: xx-large;
  font-weight: bold;
`;
export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  console.log("params", params);
  const service = await getserviceBySlug(client, params.slug);
  console.log("service", service);

  return {
    props: {
      service,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
export const getStaticPaths = async () => {
  const slugs = await getAllServiceSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/services/${slug}`) || [],
    fallback: "blocking",
  };
};
