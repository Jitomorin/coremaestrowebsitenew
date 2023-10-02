import { groq } from "next-sanity";

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;
const serviceFields = groq`
  _id,
  title,
  description
  coverImage,
  "slug": slug.current,
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;
export const employeesQuery = groq`
*[_type == "employee"]`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const serviceSlugsQuery = groq`
*[_type == "service" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
export const serviceBySlugQuery = groq`
*[_type == "service" && slug.current == $slug][0] {
  ${serviceFields}
}
`;

export interface Author {
  name?: string;
  picture?: any;
}

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  _updatedAt?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: any;
}
export interface Service {
  title: string;
  coverImage?: any;
  slug?: string;
  description?: any;
}

export interface Employee {
  _type: "employee";
  _id: string;
  fullName: string;
  position: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
}

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}
