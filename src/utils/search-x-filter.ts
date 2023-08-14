import { PostT } from "../types/types";

export const searchPosts = (posts: PostT[], query: string) => {
  query = query.toLowerCase();
  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });
};
