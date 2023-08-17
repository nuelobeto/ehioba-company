import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  text-align: center;
`;

export const HeroText = styled.h1`
  max-width: 900px;
  width: 100%;
  font-size: clamp(2rem, 3vw, 4rem);
  font-weight: 700;
  color: ${COLORS.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3);
`;

export const PostContent = styled.div`
  max-width: 900px;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
