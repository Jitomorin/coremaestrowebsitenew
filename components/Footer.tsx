import NextLink from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import styled from "styled-components";
import Container from "components/Container";
import { media } from "utils/media";
import RichText from "./RichText";
import Logo from "./Logo";
import Link from "next/link";
import WaveCta from "./WaveCta";
import NextImage from "next/image";

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: "Useful Links",
    items: [
      { title: "Performance Management System", href: "/services" },
      { title: "Payroll Management System", href: "/services" },
      { title: "Learning Management System", href: "/services" },
      { title: "ATS Job Board", href: "/services" },
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Footer Links",
    items: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Our Services", href: "/services" },
      { title: "HR News", href: "/posts" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
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
              <Link
                href="https://www.linkedin.com/company/core-maestro-management/"
                passHref
                target="_blank"
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
                  src="/instagram_logo.webp"
                  alt="instagram_link"
                  width={65}
                  height={65}
                />
              </Link>
            </SocialmediaLink>{" "}
            <SocialmediaLink>
              <Link
                href="https://www.facebook.com/coremaestromanagement/"
                passHref
                target="_blank"
              >
                <FacebookIcon size={50} round={true} />
              </Link>
            </SocialmediaLink>
            <SocialmediaLink>
              <Link
                target="_blank"
                href="https://wa.me/message/ODRQQDIW57LEN1"
                passHref
              >
                {/* <TwitterIcon size={50} round={true} /> */}
                <NextImage
                  src="/whatsapp_logo.webp"
                  alt="Whatsapp Link"
                  width={60}
                  height={60}
                />
              </Link>
            </SocialmediaLink>
          </ShareBar>
          <div>
            {/* <Copyright>&copy; Copyright 2023 MoCapital</Copyright> */}
            <Copyright>
              &copy; 2024 Copyright Core Maestro Management | Powered by{" "}
              <Link
                target="_blank"
                className="hover:text-[#ffaf01]"
                href="https://mocapital.co.ke/"
              >
                Mo Capital Company Limited
              </Link>
            </Copyright>
          </div>

          {/* <div>
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
          </div> */}
        </BottomBar>
      </FooterContainer>
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
  padding-top: 7rem;
  padding-bottom: 4rem;
  background: rgb(21, 35, 62);
  color: rgb(255, 255, 255);
`;

const FooterContainer = styled(Container)`
  ${media("<=largeDesktop")} {
    max-width: 90%;
  }
  ${media("<=phone")} {
    max-width: 100%;
  }
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
  width: 100%;
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
  margin: 0 1.5rem;
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
    color: rgba(255, 255, 255, 0.75);
    &:hover {
      color: rgba(255, 175, 1);
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
  margin-top: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media("<=tablet")} {
    flex-direction: column;
    align-items: center;
  }
`;
