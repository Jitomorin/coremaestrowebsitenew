import { media } from "@/utils/media";
import SectionTitle from "components/SectionTitle";
import styled from "styled-components";

export default function InformationSection() {
  return (
    <Wrapper>
      <SectionTitle>Say Hello!</SectionTitle>
      <h5>
        We would love to hear from you and discuss how we can support your
        business needs. Whether you have questions, inquiries, or want to
        explore our services further.
        <br />
        Please reach out to us.
      </h5>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 50rem;
  margin-left: 50rem;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${media("<largeDesktop")} {
    margin-right: 5rem;
    margin-left: 5rem;
  }
  ${media(">=largeDesktop")} {
    margin-right: 30rem;
    margin-left: 30rem;
  }
  h3 {
    font-weight: 550;
    font-size: 3.5rem;
    margin-bottom: 0rem;
  }

  h5 {
    font-size: 2rem;
    font-weight: 800;
    color: rgba(10, 18, 30, 0.6);
    margin-top: 2rem;
  }

  p {
    font-weight: bold;
    font-size: 2rem;
    color: rgba(10, 18, 30, 0.5);
    text-transform: uppercase;
    margin-top: 4rem;
  }

  span {
    opacity: 1;
    color: rgba(10, 18, 30, 1);
  }
`;
