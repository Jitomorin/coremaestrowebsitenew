import PostPage from "components/PostPage";
import PreviewPostPage from "components/PreviewPostPage";
import { readToken } from "@/sanity/env";
import {
  getAllCategories,
  getClient,
  getPostAndMoreStories,
  getSettings,
} from "@/sanity/lib/client";
import { Category, Post, Settings } from "@/sanity/lib/queries";
import { GetServerSideProps, GetStaticProps } from "next";
import type { SharedPageProps } from "pages/_app";
import { useRouter } from "next/router";
import Page from "@/components/Page";

interface PageProps extends SharedPageProps {
  post: Post;
  categories: Category[];
  morePosts: Post[];
  settings?: Settings;
}

interface Query {
  [key: string]: string;
}

export default function ProjectSlugRoute(props: PageProps) {
  const router = useRouter();
  const { settings, post, categories, morePosts, draftMode } = props;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (draftMode) {
    return (
      <PreviewPostPage
        post={post}
        morePosts={morePosts}
        settings={settings}
        categories={categories}
      />
    );
  }
  return (
    <Page imgURL="/resume_image.webp" title="HR News">
      <PostPage
        post={post}
        morePosts={morePosts}
        settings={settings}
        categories={categories}
      />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps, Query> = async (
  ctx
) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, { post, morePosts }, categories] = await Promise.all([
    getSettings(client),
    getPostAndMoreStories(client, params.slug),
    getAllCategories(client),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      categories,
      morePosts,
      settings,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
