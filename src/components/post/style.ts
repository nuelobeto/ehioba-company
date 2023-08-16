import { styled } from "styled-components";
import { COLORS } from "../../utils/colors";

export const PostCard = styled.div`
  min-width: 250px;
  height: 30rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.01;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 6px;
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
    gap: 5px;
    font-weight: 600;
  }

  svg {
    font-size: 20px;
  }
`;

export const PostTitle = styled.h4`
  font-size: 15px;
`;

export const PostContent = styled.div`
  height: 6rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  overflow: hidden;
  font-size: 14px;
`;

export const ReadMore = styled.div`
  border-top: 0.1rem solid ${COLORS.darkGreen};
  padding: 0.5rem 0;
  margin-top: 1rem;
  color: ${COLORS.darkGreen};
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 0.5rem;
  & > p {
    &:hover {
      cursor: pointer;
      color: ${COLORS.lightGreen};
    }
  }
`;
