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
import type { Post, Settings } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import styled from "styled-components";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings?: Settings;
}

const NO_POSTS: Post[] = [];

const Wrapper = styled.div`
  margin: 5rem 0;
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
            <Wrapper>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreBlogs posts={morePosts} />}
            </Wrapper>
          )}
        </Container>
      </Layout>
    </>
  );
}
