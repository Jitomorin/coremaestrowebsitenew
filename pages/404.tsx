import styled from "styled-components";
import Container from "components/Container";
// import NotFoundIllustration from 'components/NotFoundIllustration';

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>{/* <NotFoundIllustration /> */}</ImageContainer>
        <Title>404</Title>
        <Description>Page not found</Description>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgb(251, 251, 253);
  margin: 10rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-top: 5rem;
`;

const Description = styled.div`
  font-size: 3rem;
  opacity: 0.8;
  margin-top: 2.5rem;
`;

const ImageContainer = styled.div`
  width: 25rem;
  margin: auto;
`;
