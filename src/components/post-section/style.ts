import { styled } from "styled-components";
import { COLORS } from "../../utils/colors";

export const PostSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PostSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 0.2rem 0.2rem 0.2rem 0.5rem;
  border: 0.12rem solid ${COLORS.darkGreen};
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:focus-within {
    border: 0.12rem solid ${COLORS.lightGreen};
  }
  & > input {
    width: 100%;
    height: 2rem;
    border: none;
    &:focus {
      outline: none;
    }
  }
  & > svg {
    font-size: 2rem;
    color: ${COLORS.darkGreen};
    &:hover {
      color: ${COLORS.lightGreen};
      cursor: pointer;
    }
  }
`;

export const PostContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const NoData = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 0 0 2rem;
`;
