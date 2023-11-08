import styled from "styled-components";
import Page from "components/Page";
import { media } from "utils/media";
import FormSection from "views/ContactPage/FormSection";
import InformationSection from "views/ContactPage/InformationSection";
import MapSection from "views/ContactPage/MapSection";
import Divider from "components/Divider";

export default function ContactPage() {
  return (
    <Page
      imgURL="/contact.webp"
      title="Contact Us"
      description="Minim sint aliquip nostrud excepteur cupidatat amet do laborum exercitation cupidatat ea proident."
    >
      <ContactContainer>
        <InformationSection />
        <FormSection />
        <Divider />
        <MapSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
