import { media } from "@/utils/media";
import Container from "components/BlogContainer";
import Layout from "components/BlogLayout";
import PostBody from "components/PostBody";
import PostTitle from "components/PostTitle";
import SectionSeparator from "components/SectionSeparator";
import * as demo from "lib/demo.data";
import type { Category, Post, Service, Settings } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import styled from "styled-components";
import ServiceHeader from "./ServiceHeader";
import Link from "next/link";
import { BackIcon } from "./BackIcon";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  service: Service;
  settings?: Settings;
}

const NO_POSTS: Post[] = [];

const Wrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
`;

export default function ServicePage(props: PostPageProps) {
  const { preview, loading, service, settings } = props;
  const { title = demo.title } = settings || {};

  const slug = service?.slug;
  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      {/* <PostPageHead settings={settings} post={post} /> */}

      <Layout preview={preview} loading={loading}>
        <ServicePageWrapper>
          <div
            className="container justify-start
         mx-auto px-16 md:px-10"
          >
            {/* <BlogHeader title={title} level={2} /> */}
            {preview && !service ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <Wrapper>
                <Link href="/services" className="mr-auto">
                  <BackIcon width={30} height={30} />
                </Link>
                <ArticleWrapper>
                  <ServiceContainer>
                    {/* <SectionTitle>{service.title}</SectionTitle> */}
                    {/* <RichText>{service?.description}</RichText> */}
                    <ServiceHeader
                      title={service.title}
                      coverImage={service.coverImage}
                    />
                    <PostBody content={service?.description} />
                  </ServiceContainer>
                </ArticleWrapper>
                <SectionSeparator />
              </Wrapper>
            )}
          </div>
        </ServicePageWrapper>
      </Layout>
    </>
  );
}

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ${media("<tablet")} {
    flex-direction: column;
  }
`;
const ServiceContainer = styled.div`
  display: flex;
  border: 2px solid rgb(var(--border));
  flex-direction: column;
  /* align-items: flex-start; */
  ${media("<tablet")} {
    flex-direction: column;
  }
`;
const ServicePageWrapper = styled(Container)``;
