import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";
import {
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
  employeesQuery,
  Employee,
  serviceBySlugQuery,
} from "./queries";
import { createClient, type SanityClient } from "next-sanity";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}

export const getSanityImageConfig = () => getClient();

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {};
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || [];
}
export async function getAllEmployees(
  client: SanityClient
): Promise<Employee[]> {
  return (await client.fetch(employeesQuery)) || [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, "slug">[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}
export async function getAllServiceSlugs(): Promise<Pick<Post, "slug">[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
}
export async function getserviceBySlug(
  client: SanityClient,
  slug: string
): Promise<Post> {
  return (await client.fetch(serviceBySlugQuery, { slug })) || ({} as any);
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug });
}

// export async function getBlogs() {
//   const blogs = await client.fetch(`*[_type == "post"]`);
//   // console.log("Sanity Client:", blogs);
//   return blogs;
// }
