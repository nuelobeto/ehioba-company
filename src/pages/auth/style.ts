import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { btn } from "../../utils/btn";

export const AuthWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2a7c6f;
  background-image: linear-gradient(62deg, #2a7c6f 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
`;

export const AuthNav = styled.nav`
  max-width: 400px;
  width: 100%;
  padding: 1.5rem 1rem;
  position: absolute;
  top: 0;

  a {
    width: fit-content;
    border: 1px solid white;
    border-radius: 4px;
    padding: ${btn.xs};
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: ${COLORS.darkGreen};
      border: 1px solid ${COLORS.darkGreen};
    }

    svg {
      font-size: 25px;
    }
  }
`;

export const AuthForm = styled.form`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const AuthHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 25px;
    color: ${COLORS.darkGreen};
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: ${COLORS.textGray};
  }
`;

export const AuthBody = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${COLORS.textGray};
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgb(207, 207, 207);
    outline: none;
    padding-left: 1rem;
    font-size: 15px;
    font-weight: 600;

    &:focus {
      border: 1px solid ${COLORS.darkGreen};
    }
  }
`;

export const SubmitBtn = styled.button`
  height: 45px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${COLORS.darkGreen};
  color: #fff;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.lightGreen};
  }
`;

export const AuthFooter = styled.div`
  padding: 1.5rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    font-size: 14px;
    color: gray;
    font-weight: 500;
  }

  a {
    font-weight: 700;
    color: ${COLORS.lightGreen};
  }
`;
