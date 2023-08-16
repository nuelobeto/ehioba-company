import { useEffect, useState } from "react";
import { CONTACT_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PostsWrapper from "../../components/post-section/PostsWrapper";
import usePost from "../../store/usePost";
import { HeroContainer, HeroImage, HeroText } from "../About/style";
import { PostT } from "../../types/types";

const Blog = () => {
  const { posts } = usePost((state) => state);
  const [blogs, setBlogs] = useState<PostT[]>([]);

  useEffect(() => {
    setBlogs(posts.filter((post) => post.category === "Blog"));
  }, [posts]);

  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={CONTACT_IMAGE} />
        <HeroText>Blogs</HeroText>
      </HeroContainer>
      <PostsWrapper posts={blogs} />
      <Footer />
    </>
  );
};

export default Blog;
