import { useState } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import NextLink from "next/link";
import { media } from "../utils/media";
import Link from "next/link";

export default function StickySocialMediaBar() {
  return (
    <Wrapper>
      <ShareBar>
        <SocialmediaLink>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/core-maestro-management/"
            passHref
          >
            <LinkedinIcon size={50} round={true} />
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link
            target="_blank"
            href="https://www.instagram.com/core.maestro.management/"
            passHref
          >
            {/* <TwitterIcon size={50} round={true} /> */}
            <NextImage
              src="/instagram_logo.png"
              alt="instagram_link"
              width={65}
              height={65}
            />
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link
            target="_blank"
            href="https://www.facebook.com/coremaestromanagement/"
            passHref
          >
            <FacebookIcon size={50} round={true} />
          </Link>
        </SocialmediaLink>
      </ShareBar>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 1rem;
  z-index: 1000;
  ${media("<tablet")} {
    display: none;
  }
`;
const ShareBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SocialmediaLink = styled.div`
  cursor: pointer;
  padding: 0, 0.5rem;
  &:hover {
    scale: 1.2;
  }
`;
