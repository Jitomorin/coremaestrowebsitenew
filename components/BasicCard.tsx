import NextImage from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { generateSlug } from "@/utils/formatString";

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  useImage: boolean;
  FaIcon?: any;
  istransparent?: boolean;
}

export default function BasicCard({
  title,
  description,
  imageUrl,
  useImage,
  FaIcon,
  istransparent,
}: BasicCardProps) {
  return (
    <Card isTransparent={istransparent}>
      {useImage ? (
        <NextImage src={imageUrl} alt="header image" width={100} height={100} />
      ) : (
        <FontAwesomeIcon icon={FaIcon} width={90} height={90} />
      )}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}
const Title = styled.div`
  font-weight: bold;
  display: inline-block;
  position: relative;
  font-size: 2.2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: rgb(var(--secondary));
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  /* &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } */
`;

const Card = styled.div<{ isTransparent: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  ${(props) =>
    props.isTransparent
      ? "background: transparent;"
      : "background: rgb(var(--cardBackground));"}

  /* box-shadow: var(--shadow-md); */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  padding: 3 2rem;
  /* increase scale on hover */
  /* &:hover {
    scale: 1.07;
    ${Title} {
      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  } */

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Description = styled.div`
  opacity: 0.6;
  font-size: 1.7rem;
`;
