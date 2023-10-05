import NextLink from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import styled from "styled-components";
import Container from "components/Container";
import { media } from "utils/media";
import RichText from "./RichText";
import Logo from "./Logo";
import Link from "next/link";
import WaveCta from "./WaveCta";

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: "Useful Links",
    items: [
      { title: "Something", href: "/Something" },
      { title: "Footer", href: "/Something" },
      { title: "Something else2", href: "/Something" },
      { title: "Something", href: "/Something" },
    ],
  },
  {
    title: "Footer Links",
    items: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Our Services", href: "/services" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {/* <FooterListCompany
            title="Core Maestro Management"
            items={[{ title: "Privacy Policy", href: "/" }]}
          /> */}

          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
          <WaveCta />
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <SocialmediaLink>
              <NextLink
                href="https://www.linkedin.com/company/core-maestro-management/"
                passHref
              >
                <LinkedinIcon size={50} round={true} />
              </NextLink>
            </SocialmediaLink>{" "}
            <SocialmediaLink>
              <NextLink href="https://www.twitter.com/JitomorinT" passHref>
                <TwitterIcon size={50} round={true} />
              </NextLink>
            </SocialmediaLink>{" "}
            <SocialmediaLink>
              <NextLink
                href="https://www.facebook.com/coremaestromanagement/"
                passHref
              >
                <FacebookIcon size={50} round={true} />
              </NextLink>
            </SocialmediaLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2023 MoCapital</Copyright>
          <div>
            {" "}
            Icons made by{" "}
            <Link
              href="https://www.flaticon.com/authors/md-tanvirul-haque"
              title="Md Tanvirul Haque"
            >
              {" "}
              Md Tanvirul Haque{" "}
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </Link>
          </div>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function CompanyInfo({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      <ListDescription></ListDescription>
    </ListWrapper>
  );
}
function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <>{title}</>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--primary));
  color: rgb(var(--textSecondary));
`;

const LogoContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 100%;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media("<=tablet")} {
    justify-content: center;
    text-align: center;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;
const ListDescription = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;
  max-width: 30%;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media("<=tablet")} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media("<=phone")} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
    &:hover {
      color: rgba(var(--secondary));
    }
  }
`;

const ShareBar = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${media("<tablet")} {
    display: flex;
  }
`;
const SocialmediaLink = styled.div`
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media("<=tablet")} {
    flex-direction: column;
    align-items: center;
  }
`;