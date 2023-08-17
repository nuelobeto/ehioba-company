import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { HeroContainer, HeroImage, HeroText, PostContent } from "./style";
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
      <HeroContainer>
        <HeroImage src={post?.image} />
        <HeroText>
          {post?.title} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum, porro!
        </HeroText>
      </HeroContainer>
      <PostContent>
        <HtmlParser htmlString={post ? post?.content : ""} />
      </PostContent>
      <Footer />
    </>
  );
};

export default PostDetails;
