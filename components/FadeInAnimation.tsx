import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Define a keyframes animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Create a styled component with the animation
const FadeInAnimation = styled.div<{
  playAnimation: boolean;
  duration?: string;
}>`
  ${(props) =>
    props.playAnimation
      ? css`
          animation: ${props.duration || "0.5s"} ${fadeIn} ease-in-out;
          opacity: 1;
        `
      : "opacity: 0"};
`;

interface FadeAnimationProps {
  duration?: string;
  children: React.ReactNode;
}

const FadeAnimationComponent: React.FC<FadeAnimationProps> = ({
  duration,
  children,
}) => {
  const [playAnimation, setPlayAnimation] = useState<boolean>(false);
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlayAnimation(true);
          observer.disconnect(); // Stop observing once animation has played
        }
      });
    }, options);

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  return (
    <FadeInAnimation
      playAnimation={playAnimation}
      duration={duration}
      ref={animationRef}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="flex flex-col justify-center items-center"
    >
      {children}
    </FadeInAnimation>
  );
};

export default FadeAnimationComponent;
