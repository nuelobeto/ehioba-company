import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { NavLink as BaseNavLink } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export const Container = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "0.5rem 2rem",
};

export const Nav = styled.nav<{ $scrolled: boolean }>`
  height: 7rem;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$scrolled ? `${COLORS.black}` : `${COLORS.white}`};
  background-color: ${(props) => (props.$scrolled ? `${COLORS.white}` : "")};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  position: ${(props) => (props.$scrolled ? "sticky" : "absolute")};
  opacity: 0.99;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    height: 5rem;
  }
`;

export const NavContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  flex: 1;
  & img {
    width: 12rem;
  }
  @media (max-width: 768px) {
    & img {
      width: 7rem;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  flex: 2;
  justify-content: flex-end;
`;

export const NavLink = styled(BaseNavLink)`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  border-radius: 0.2rem;
  &:hover {
    color: ${COLORS.lightGreen};
  }
  &.active {
    background-color: ${COLORS.darkGreen};
    color: ${COLORS.white};
  }
`;

export const OpenBtn = styled(AiOutlineMenuFold)<{ $scrolled: boolean }>`
  font-size: 2rem;
  color: ${(props) =>
    props.$scrolled ? `${COLORS.black}` : `${COLORS.white}`};
  z-index: 100;
`;

export const CloseBtn = styled(AiOutlineMenuUnfold)<{ $scrolled: boolean }>`
  font-size: 2rem;
  color: ${(props) =>
    props.$scrolled ? `${COLORS.white}` : `${COLORS.black}`};
  z-index: 100;
`;
