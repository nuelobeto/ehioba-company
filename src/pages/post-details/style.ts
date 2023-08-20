import styled from "styled-components";

export const PostContainer = styled.main`
  max-width: 900px;
  width: 100%;
  min-height: 100vh;
  margin: 112px auto 0;
  padding: 3rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PostTitle = styled.h1``;

export const PostImage = styled.img`
  width: 100%;
  aspect-ratio: 2/1;
  object-fit: cover;
`;

export const PostContent = styled.div`
  max-width: 900px;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
