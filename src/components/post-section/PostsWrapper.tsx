import { AiOutlineFileSearch } from "react-icons/ai";
import {
  NoData,
  PostContainer,
  PostSection,
  PostSectionTitle,
  SearchContainer,
} from "./style";
import Post from "../post/Post";
import { PostT } from "../../types/types";
import { useEffect, useState } from "react";
import { searchPosts } from "../../utils/search-x-filter";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../app-navigation/routes";

type PostSectionProps = {
  posts: PostT[];
};

const PostsWrapper = ({ posts }: PostSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<PostT[]>([]);
  const { pathname } = useLocation();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFilteredPosts(searchPosts(posts, searchQuery));
  };

  useEffect(() => {
    if (posts.length !== 0) {
      setFilteredPosts(posts);
    }
    if (searchQuery === "") {
      setFilteredPosts(posts);
    }
  }, [posts, searchQuery]);

  return (
    <PostSection>
      <PostSectionTitle>
        {pathname.includes(ROUTES.insights)
          ? "Latest Stories & Insights"
          : pathname.includes(ROUTES.blog) && "Latest Stories & blog Posts"}
      </PostSectionTitle>
      <SearchContainer onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by Post Title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AiOutlineFileSearch onClick={handleSearch} />
      </SearchContainer>
      <PostContainer>
        {filteredPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </PostContainer>
      {filteredPosts.length === 0 && (
        <NoData>There are no Posts at the moment</NoData>
      )}
    </PostSection>
  );
};

export default PostsWrapper;
