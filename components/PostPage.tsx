import { media } from "@/utils/media";
import Container from "components/BlogContainer";
import BlogHeader from "components/BlogHeader";
import Layout from "components/BlogLayout";
import MoreBlogs from "components/MoreBlogs";
import PostBody from "components/PostBody";
import PostHeader from "components/PostHeader";
import PostPageHead from "components/PostPageHead";
import PostTitle from "components/PostTitle";
import SectionSeparator from "components/SectionSeparator";
import * as demo from "lib/demo.data";
import type { Category, Post, Settings } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import styled from "styled-components";
import CategorySidebar from "./CategorySidebar";
import { useEffect, useState } from "react";
import Button from "./Button";
import { getPostByCategory } from "@/sanity/lib/client";
import { useClient } from "sanity";
import { BackButton } from "./BackButton";
import Link from "next/link";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  categories: Category[];
  morePosts: Post[];
  settings?: Settings;
}

const NO_POSTS: Post[] = [];

const Wrapper = styled.div`
  margin: 5rem 0;
  ${media("<largeDesktop")} {
    max-width: 90%;
  }
`;

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;
  const { title = demo.title } = settings || {};

  const slug = post?.slug;
  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          {/* <BlogHeader title={title} level={2} /> */}
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <Wrapper className="mx-auto">
              <Link
                href="/posts"
                className="hover:text-[#f3bb2a] text-3xl font-bold ml-10"
              >
                Back to blogs
              </Link>
              <ArticleWrapper className="">
                <PostContainer>
                  <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    categories={post.categories}
                  />
                  <PostBody content={post.content} />
                </PostContainer>

                <CategorySidebar categories={props.categories} />
              </ArticleWrapper>
              {/* <BackButton size={100} text="Back to blogs" href="/posts" /> */}
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreBlogs posts={morePosts} />}
            </Wrapper>
          )}
        </Container>
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
    margin-left: 5rem;
  }
`;
const PostContainer = styled.div`
  display: flex;
  border: 2px solid rgb(var(--border));
  flex-direction: column;
  /* align-items: flex-start; */
  ${media("<tablet")} {
    flex-direction: column;
  }
`;
