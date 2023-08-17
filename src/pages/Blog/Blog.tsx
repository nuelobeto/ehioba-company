import { useEffect, useState } from "react";
import { BLOG_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PostsWrapper from "../../components/post-section/PostsWrapper";
import usePost from "../../store/usePost";
import { HeroContainer, HeroImage, HeroText } from "../About/style";
import { PostT } from "../../types/types";

const Blog = () => {
  const { posts } = usePost((state) => state);
  const [blogs, setBlogs] = useState<PostT[]>([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    setBlogs(posts.filter((post) => post.category === "Blog"));
  }, [posts]);

  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={BLOG_IMAGE} />
        <HeroText>Blogs</HeroText>
      </HeroContainer>
      <PostsWrapper posts={blogs} />
      <Footer />
    </>
  );
};

export default Blog;
