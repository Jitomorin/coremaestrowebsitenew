import NextLink from "next/link";
import styled from "styled-components";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import Container from "components/Container";
import SectionTitle from "components/SectionTitle";
import { useNewsletterModalContext } from "contexts/newsletter-modal.context";
import { media } from "utils/media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { height } from "./OpenGraphImage";
import Link from "next/link";
import { WhatsappIcon } from "./WhatsappIcon";

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      <CtaWrapper>
        <Container>
          <List>
            <p>Saku Business park Embakasi</p>
            <p>Mobile: +254 702 127417 / +254 718 820586</p>

            {/* <p>whatsapp: +254 702 127417</p> */}
          </List>
          <Title>Subscribe to Our Newsletter</Title>
          <CustomButtonGroup>
            <SubscribeButton onClick={() => setIsModalOpened(true)}>
              Subscribe
            </SubscribeButton>

            {/* <NextLink href="/features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink> */}
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: rgb(21, 35, 62);
  margin-top: -1rem;
  padding-bottom: 6rem;

  ${media("<=tablet")} {
    margin-top: 5rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2.7rem;
  color: #fff;
  p {
    color: #fff;
    font-size: 1.5rem;
    text-align: left;
    margin: 0.2rem 0;
    ${media("<=tablet")} {
      text-align: center;
    }
  }
`;
const Title = styled(SectionTitle)`
  font-size: 2.3rem;
  color: rgb(255, 255, 255);
  padding-top: 2rem;
  margin-bottom: 4rem;
`;
// subscribe button

const SubscribeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  background: transparent;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  border: 3px solid rgb(255, 255, 255);
  transition: all 0.35s;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    width: 200px;
    letter-spacing: 2px;
    border: 3px solid rgb(255, 175, 1);
    background: rgb(255, 175, 1);
    color: rgb(255, 255, 255);
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  top: 0;
  z-index: -1;
  transition: all 0.35s;
`;

// end subscribe button
const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;
