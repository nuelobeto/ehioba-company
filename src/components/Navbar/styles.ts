import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { NavLink as BaseNavLink } from "react-router-dom";

export const Container = {
  maxWidth: "960px",
  margin: "0 auto",
  padding: "0.5rem 2rem",
};

export const Nav = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
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
  color: ${COLORS.black};
  border-radius: 0.2rem;
  &:hover {
    color: ${COLORS.lightGreen};
  }
  &.active {
    background-color: ${COLORS.darkGreen};
    color: ${COLORS.white};
  }
`;

export const iconStyles = {
  fontSize: "2rem",
  color: `${COLORS.black}`,
  zIndex: 100,
};
