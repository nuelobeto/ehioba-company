import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { PostTitle, PostContent, PostContainer, PostImage } from "./style";
import usePost from "../../store/usePost";
import Footer from "../../components/Footer/Footer";
import HtmlParser from "../../components/html-parser/HtmlParser";
import { useEffect } from "react";

const PostDetails = () => {
  const { posts } = usePost((state) => state);
  const params = useParams();
  const postId = params.postId;
  const post = posts.find((post) => post.id === postId);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <PostContainer>
        <PostTitle>{post?.title}</PostTitle>
        <PostImage src={post?.image} />
        <PostContent>
          <HtmlParser htmlString={post ? post?.content : ""} />
        </PostContent>
      </PostContainer>
      <Footer />
    </>
  );
};

export default PostDetails;
