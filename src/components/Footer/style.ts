import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;
  background-color: rgb(36, 36, 36);
  color: ${COLORS.white};
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem 0;
  & > h3 {
    color: ${COLORS.gray};
  }
  & > p {
    margin: 0.5rem 0;
    color: ${COLORS.textGray};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Input = styled.input`
  padding: 1rem 2rem;
`;
export const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
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
export const Socials = styled.div`
  display: flex;
  & > svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;
export const CopyRight = styled.div`
  text-align: center;
  width: 100%;
  border-top: 0.1rem solid ${COLORS.gray};
  padding: 1rem 0;
  font-size: 0.5rem;
`;
