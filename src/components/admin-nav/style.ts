import styled from "styled-components";
import { btn } from "../../utils/btn";
import { COLORS } from "../../utils/colors";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.lightGray};

  h1 {
    font-size: 18px;
  }
`;

export const NavContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const AddNewPostBtn = styled.button`
  padding: ${btn.sm};
  color: #fff;
  background-color: ${COLORS.darkGreen};
  border-radius: 8px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: ${COLORS.lightGreen};
  }

  svg {
    font-size: 25px;
  }

  span {
    color: ${COLORS.white};
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;
