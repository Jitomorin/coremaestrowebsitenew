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
  getServiceBySlug,
} from "@/sanity/lib/client";
import { readToken } from "@/sanity/env";
import { useRouter } from "next/router";
import service from "@/sanity/schemas/service";
import ServicePage from "@/components/ServicePage";

// interface pageProps extends SharedPageProps {
//     service: Service;
// }
interface ServiceProps extends SharedPageProps {
  service: Service;
}

interface Query {
  [key: string]: string;
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

export default function ServiceSlugRoute(props: ServiceProps) {
  const { service } = props;
  return (
    <ServicePage
      service={service}
      // morePosts={morePosts}
      // settings={settings}
      // categories={categories}
    />
  );
}

export const getStaticProps: GetStaticProps<ServiceProps, Query> = async (
  ctx
) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  console.log("params", params);
  const service = await getServiceBySlug(client, params.slug);
  console.log("service", service);

  if (!service) {
    return {
      notFound: true,
    };
  }

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
