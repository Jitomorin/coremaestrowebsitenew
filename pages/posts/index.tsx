import IndexPage from "components/IndexPage";
import PreviewIndexPage from "components/PreviewIndexPage";
import { readToken } from "@/sanity/env";
import { getAllPosts, getClient, getSettings } from "@/sanity/lib/client";
import { Post, Settings } from "@/sanity/lib/queries";
import { GetServerSideProps, GetStaticProps } from "next";
import type { SharedPageProps } from "pages/_app";

interface PageProps extends SharedPageProps {
  posts: Post[];
  settings: Settings;
}

interface Query {
  [key: string]: string;
}

export default function Page(props: PageProps) {
  const { posts, settings, draftMode } = props;

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />;
  }

  return <IndexPage posts={posts} settings={settings} />;
}

export const getServerSideProps: GetServerSideProps<PageProps, Query> = async (
  ctx
) => {
  const { draftMode = false } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ]);

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
