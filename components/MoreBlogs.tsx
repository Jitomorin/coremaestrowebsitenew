import PostPreview from "components/PostPreview";
import type { Post } from "@/sanity/lib/queries";
import styled from "styled-components";
import { media } from "@/utils/media";

export default function MoreBlogs({ posts }: { posts: Post[] }) {
  return (
    <Wrapper className="mx-auto">
      {/* <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        HR News
      </h2> */}
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            categories={post.categories}
          />
        ))}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  align-self: center;
  ${media("<largeDesktop")} {
    max-width: 90%;
  }
`;
