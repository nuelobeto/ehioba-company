import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { StyledPropBool } from "../../utils/types";
import { NavLink as BaseNavLink } from "react-router-dom";

export const OverLay = styled.div<StyledPropBool>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  z-index: 2;
`;
export const SideNavContainer = styled.div`
  height: 100vh;
  width: 60%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5rem 1rem;
  background-color: ${COLORS.white};
  opacity: 0.9;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
`;
export const SideNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  border-top: 0.1rem solid ${COLORS.gray};
  padding: 1.5rem 0;
`;
export const SideNavLink = styled(BaseNavLink)`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  padding: 1.5rem 0;
  text-decoration: none;
  color: ${COLORS.black};
  width: 100%;

  &.active {
    color: ${COLORS.lightGreen};
    border-bottom: 0.2rem solid ${COLORS.darkGreen};
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;
