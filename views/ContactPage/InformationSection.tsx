import SectionTitle from 'components/SectionTitle';
import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <SectionTitle>Hello there!</SectionTitle>
      <p>
        {/* <span>Email:</span> info@CoreMaestro.com */}
        Get in Touch
      </p>
      <h3>Do you have any questions?</h3>
      <h3> Feel free to contact us</h3>
      <h5>Email: info@coremaestro.co.ke</h5>
      <h5>Phone: +254 702 127417 / +254 717 591 702</h5>
      <h5>P O Box: 77523-00611</h5>
      <h5>Saku Business park, Embakassi,</h5>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 3.5rem;
    margin-bottom: 0rem;
  }

  h5 {
    font-size: 1.4rem;
    color: rgba(var(--text), 0.6);
    margin-bottom: 0;
    margin-top: 1rem;
  }

  p {
    font-weight: bold;
    font-size: 2rem;
    color: rgba(var(--text), 0.5);
    text-transform: uppercase;
    margin-top: 4rem;
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
