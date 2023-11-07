import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useNewsletterModalContext } from "contexts/newsletter-modal.context";
import {
  ScrollPositionEffectProps,
  useScrollPosition,
} from "hooks/useScrollPosition";
import { NavItems, SingleNavItem } from "types";
import { media } from "utils/media";
import Button from "./Button";
import Container from "./Container";
import Drawer from "./Drawer";
import { HamburgerIcon } from "./HamburgerIcon";
import Logo from "./Logo";
// import { HoverUnderlineAnimation } from 'utils/styled-animations';
import NextImage from "next/image";

type NavbarProps = { items: NavItems };
type ScrollingDirections = "up" | "down" | "none";
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

export default function Navbar({ items }: NavbarProps) {
  const router = useRouter();
  const { toggle } = Drawer.useDrawer();
  const [scrollingDirection, setScrollingDirection] =
    useState<ScrollingDirections>("none");

  let lastScrollY = useRef(0);
  const lastRoute = useRef("");
  const stepSize = useRef(50);
  const currentPage = router.pathname;

  useScrollPosition(
    scrollPositionCallback,
    [router.asPath],
    undefined,
    undefined,
    50
  );

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection("none");
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection("none");
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? "up" : "down");
    lastScrollY.current = currentScrollY;
  }

  const isNavbarHidden = scrollingDirection === "down";
  const isTransparent = scrollingDirection === "none";

  return (
    <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
      <Content>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </NextLink>
        <NavItemList>
          {items.map((singleItem) => {
            if (currentPage === singleItem.href) {
              return (
                <HoverUnderlineAnimation outlined={true} key={singleItem.href}>
                  <NavItem
                    title={singleItem.title}
                    href={singleItem.href}
                    outlined={true}
                  />
                </HoverUnderlineAnimation>
              );
            } else {
              return (
                <HoverUnderlineAnimation outlined={false} key={singleItem.href}>
                  <NavItem
                    title={singleItem.title}
                    href={singleItem.href}
                    outlined={false}
                  />
                </HoverUnderlineAnimation>
              );
            }
          })}
        </NavItemList>
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  const { setIsModalOpened } = useNewsletterModalContext();

  function showNewsletterModal() {
    setIsModalOpened(true);
  }

  return (
    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref>
        <div>{title}</div>
      </NextLink>
    </NavItemWrapper>
  );
}

const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

const NavItemList = styled.div`
  display: flex;
  list-style: none;
  font-weight: 800;

  ${media("<desktop")} {
    display: none;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media(">=desktop")} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  text-decoration: none;

  color: rgb(36, 58, 90);
`;

const HoverUnderlineAnimation = styled.div<Partial<SingleNavItem>>`
  display: inline-block;
  position: relative;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${(props) =>
    props.outlined
      ? css`
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: rgb(255, 175, 1);
          }
        `
      : css`
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: rgb(255, 175, 1);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: transparent;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 1.5;

  &:hover {
    transition: background-color 0.2s;
  }

  div {
    display: flex;
    color: rgb(10, 18, 30, 0.75);
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  position: static;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 6rem;
  z-index: var(--z-navbar);

  background-color: white;

  visibility: ${(p) => (p.hidden ? "hidden" : "visible")};
  transform: ${(p) =>
    p.hidden
      ? `translateY(-8rem) translateZ(0) scale(1)`
      : "translateY(0) translateZ(0) scale(1)"};

  transition-property: transform, visibility, height, box-shadow,
    background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
