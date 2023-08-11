import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { SectionTitle } from "../Home/style";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
`;

export const HeroText = styled.h1`
  font-size: clamp(2rem, 4rem, 6rem);
  font-weight: 700;
  color: ${COLORS.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroSubText = styled(HeroText)`
  font-size: 1rem;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3);
`;

export const DarkSectionTitle = styled(SectionTitle)`
  text-align: center;
  font-weight: 700;
  &::after {
    content: "";
    background-color: ${COLORS.lightGreen};
    margin: -1rem auto;
  }
`;
