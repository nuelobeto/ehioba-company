import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { btn } from "../../utils/btn";

export const TextEditorWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.white};
  top: 0;
  left: 0;
  z-index: 101;
  overflow: auto;

  .quill {
    height: 500px !important;
  }

  .ql-container {
    height: calc(100% - 42px) !important;
    font-size: 15px !important;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    font-size: clamp(22px, 3vw, 25px);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    outline: none;
    border: 1px solid ${COLORS.lightGray};
    background-color: ${COLORS.veryLightGray};
    width: 100%;
    height: 40px;
    border-radius: 12px;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 15px;
  }

  select {
    outline: none;
    border: 1px solid ${COLORS.lightGray};
    background-color: ${COLORS.veryLightGray};
    width: 100%;
    height: 40px;
    border-radius: 12px;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button`
  width: fit-content;
  padding: ${btn.md};
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
  font-size: 15px;

  @media (max-width: 420px) {
    margin-top: 2rem;
  }

  &:hover {
    background-color: ${COLORS.lightGreen};
  }

  svg {
    font-size: 20px;
  }
`;

export const BackBtn = styled.button`
  width: fit-content;
  padding: ${btn.sm};
  color: ${COLORS.darkGreen};
  border-radius: 8px;
  border: 1px solid ${COLORS.darkGreen};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: ${COLORS.bgGreen};
  }

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  svg {
    font-size: 20px;
  }
`;
