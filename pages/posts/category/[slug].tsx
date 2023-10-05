import PostPage from "components/PostPage";
import PreviewPostPage from "components/PreviewPostPage";
import { readToken } from "@/sanity/env";
import {
  getAllCategories,
  getAllCategorySlugs,
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
  getPostByCategory,
  getSettings,
} from "@/sanity/lib/client";
import { Category, Post, Settings } from "@/sanity/lib/queries";
import { GetStaticProps } from "next";
import type { SharedPageProps } from "pages/_app";
import IndexPage from "@/components/IndexPage";

interface PageProps extends SharedPageProps {
  posts: Post[];
  categories: Category[];
  settings?: Settings;
}

interface Query {
  [key: string]: string;
}

export default function CategorySlugRoute(props: PageProps) {
  const { settings, posts, categories, draftMode } = props;

  //   if (draftMode) {
  //     return (
  //       <PreviewPostPage
  //         post={post}
  //         morePosts={[]}
  //         settings={settings}
  //         categories={categories}
  //       />
  //     );
  //   }
  console.log("post", posts);
  console.log("categories", categories);
  posts.length > 0;
  return <IndexPage posts={posts} settings={settings} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts, categories] = await Promise.all([
    getSettings(client),
    getPostByCategory(client, params.slug),
    getAllCategories(client),
  ]);

  console.log(categories);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      categories,
      settings,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllCategorySlugs();

  return {
    paths: slugs?.map(({ slug }) => `/posts/category/${slug}`) || [],
    fallback: "blocking",
  };
};
