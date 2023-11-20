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
import { GetServerSideProps, GetStaticProps } from "next";
import type { SharedPageProps } from "pages/_app";
import IndexPage from "@/components/IndexPage";
import { useRouter } from "next/router";
import Page from "@/components/Page";
import CategoryIndexPage from "@/components/CategoryIndexPage";

interface PageProps extends SharedPageProps {
  posts: Post[];
  categories: Category[];
  settings?: Settings;
}

interface Query {
  [key: string]: string;
}

export default function CategorySlugRoute(props: PageProps) {
  const router = useRouter();
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

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Page imgURL="/resume_image.webp" title="HR News">
      <CategoryIndexPage posts={posts} settings={settings!} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps, Query> = async (
  ctx
) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts, categories] = await Promise.all([
    getSettings(client),
    getPostByCategory(client, params.slug),
    getAllCategories(client),
  ]);

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

// export const getStaticPaths = async () => {
//   const slugs = await getAllCategorySlugs();

//   return {
//     paths: slugs?.map(({ slug }) => `/posts/category/${slug}`) || [],
//     fallback: true,
//   };
// };
