import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Section = styled.div<{ $bg?: string }>`
  width: 100%;
  padding: 5rem 0;
  background-color: ${(props) => props.$bg || ""};
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;
export const SectionContainer = styled.div<{ $display?: string }>`
  display: ${(props) => props.$display || ""};
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.5;
  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 1rem 0;
    margin: 1rem auto;
  }
  & > p {
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.textGray};
  }
`;
export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 2rem, 3rem);
  font-weight: 600;
  margin-bottom: 3rem;
  &::after {
    content: "";
    display: block;
    width: 6rem;
    height: 0.5rem;
    background-color: ${COLORS.lightGreen};
    margin: -1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;
export const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem 0rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.3rem;
  align-self: flex-start;
  background-color: ${COLORS.darkGreen};
  color: ${COLORS.white};
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
export const OverviewImage = styled.div`
  display: flex;
  flex: 1;
  & > img {
    object-fit: cover;
    width: 100%;
    border-radius: 0.5rem;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  background-color: ${COLORS.white};
  font-weight: 400;
  margin: 1rem;
  & > h3 {
    line-height: 2rem;
    margin: 1rem auto 0 auto;
  }
  & > p {
    color: ${COLORS.textGray};
    line-height: 1.5;
    margin: 2rem 0;
    @media (max-width: 768px) {
      margin: 1rem 0;
    }
  }
`;
export const LinkButton = styled(Button)`
  background-color: ${COLORS.white};
  color: ${COLORS.darkGreen};
  border: 0.1rem solid ${COLORS.darkGreen};
  &:hover {
    color: ${COLORS.lightGreen};
    border: 0.1rem solid ${COLORS.lightGreen};
  }
`;
export const ApproachContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > :nth-child(even) {
    flex-direction: row-reverse;
    & img {
      margin-right: auto;
    }
  }
  & .common {
    display: flex;
    width: 100%;
    margin: 2rem 0;
    padding: 0 2rem;
    @media (max-width: 768px) {
      flex-direction: column;
      margin: 1rem 0;
    }
  }
`;
export const ApproachText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  & > h3 {
    margin: 1rem 0;
  }
`;
export const ApproachImage = styled(OverviewImage)`
  justify-content: flex-end;
  & > img {
    width: 50%;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
      width: 80%;
      margin: 1.5rem auto;
    }
  }
`;
