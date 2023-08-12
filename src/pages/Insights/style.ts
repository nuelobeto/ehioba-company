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

export const SearchContainer = styled.div`
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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const PostCard = styled.div`
  width: 30%;
  height: 30rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.01;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  & > div {
    font-size: 0.8rem;
    color: ${COLORS.darkGreen};
    display: flex;
    align-items: center;
  }
`;

export const PostTitle = styled.h4``;

export const PostContent = styled.p`
  height: 6rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  overflow: hidden;
`;

export const ReadMore = styled.div`
  border-top: 0.1rem solid ${COLORS.darkGreen};
  padding: 0.5rem 0;
  margin-top: 1rem;
  color: ${COLORS.darkGreen};
  display: flex;
  align-items: center;
  & > p {
    &:hover {
      cursor: pointer;
      color: ${COLORS.lightGreen};
    }
  }
`;
