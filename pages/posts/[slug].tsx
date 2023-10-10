import PostPage from "components/PostPage";
import PreviewPostPage from "components/PreviewPostPage";
import { readToken } from "@/sanity/env";
import {
  getAllCategories,
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
  getSettings,
} from "@/sanity/lib/client";
import { Category, Post, Settings } from "@/sanity/lib/queries";
import { GetStaticProps } from "next";
import type { SharedPageProps } from "pages/_app";
import { useRouter } from "next/router";

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
    <PostPage
      post={post}
      morePosts={morePosts}
      settings={settings}
      categories={categories}
    />
  );
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
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

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: true,
  };
};
