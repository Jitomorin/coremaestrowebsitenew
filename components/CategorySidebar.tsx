import { useEffect, useState } from "react";
import NextImage from "next/image";
import styled, { css } from "styled-components";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import NextLink from "next/link";
import { media } from "../utils/media";
import { Category } from "@/sanity/lib/queries";
import Link from "next/link";

export default function CategorySidebar({
  categories,
}: {
  categories: Category[];
}) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the scroll threshold as needed
    const scrollThreshold = 200; // Adjust this value as needed
    setIsSticky(scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper isSticky={isSticky}>
      <Heading>Categories</Heading>
      <CategoryBar>
        {categories.map((category) => (
          <Link
            key={category.title}
            href={`/posts/category/${category.slug?.current}`}
          >
            <CategoryLink>{category.title}</CategoryLink>
          </Link>
        ))}
      </CategoryBar>
    </Wrapper>
  );
}
const Wrapper = styled.div<{
  isSticky: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  padding: 2rem;
  /* border: 2px solid rgb(255,175,1); */
  background-color: white;
  ${media("<tablet")} {
    display: none;
  }
`;
const Heading = styled.h3`
  font-size: 1.9rem;
  margin-bottom: 2rem;
  font-weight: bold;
  padding-left: 1rem;
  text-align: left;
  align-self: flex-start;
`;
const CategoryBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 1rem;
`;
const CategoryLink = styled.div`
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  &:hover {
    scale: 1.03;
    color: rgb(255, 175, 1);
  }
`;
