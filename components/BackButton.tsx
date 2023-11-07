import { faArrowLeft, faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";

export interface BackButtonProps {
  href: string;
  text: string;
  size: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: auto;
`;

export function BackButton(props: BackButtonProps) {
  return (
    <Wrapper>
      <Link href={props.href}>
        <FontAwesomeIcon
          className="hover:text-[#f5bb28]"
          icon={faArrowLeft}
          width={props.size}
          height={props.size}
        />
      </Link>
    </Wrapper>
  );
}
