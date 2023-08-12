import { styled } from "styled-components";
import { COLORS } from "../../utils/colors";
import { Button } from "../../components/Footer/style";

export const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  & > p {
    text-align: center;
    color: ${COLORS.textGray};
    font-size: 1.2rem;
    padding: 0 5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;
export const ContactForm = styled.form`
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  & > .message {
    height: 10rem;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ContactInput = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
  & > label {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  & > input,
  textarea {
    padding: 0.7rem;
    border: 0.15rem solid ${COLORS.darkGreen};
    border-radius: 0.3rem;
    outline: none;
    &:focus {
      border: 0.15rem solid ${COLORS.lightGreen};
      transition: 0.3s ease-in-out;
    }
    &::placeholder {
      color: ${COLORS.gray};
    }
  }
`;

export const ContactButton = styled(Button)`
  width: 100%;
  margin: 0;
`;
