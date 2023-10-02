import Container from "components/BlogContainer";
import BlogHeader from "components/BlogHeader";
import Layout from "components/BlogLayout";
import HeroPost from "components/HeroPost";
import IndexPageHead from "components/IndexPageHead";
import MoreBlogs from "@/components/MoreBlogs";
import * as demo from "lib/demo.data";
import type { Post, Settings } from "lib/sanity.queries";
import Page from "./Page";

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  // const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {};

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Page
          imgURL="/resume_image.jpg"
          title="Blogs"
          description="Culpa duis reprehenderit in ex amet cillum nulla do in enim commodo. Sunt ut excepteur et est aliqua anim ea excepteur fugiat voluptate. Fugiat exercitation dolore laboris do quis consectetur eiusmod tempor consequat."
        >
          <Container>
            {/* <BlogHeader title={title} description={description} level={1} /> */}
            {/* {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )} */}
            {posts.length > 0 && <MoreBlogs posts={posts} />}
          </Container>
        </Page>
      </Layout>
    </>
  );
}
