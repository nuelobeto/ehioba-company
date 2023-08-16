import { CONTACT_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PostsWrapper from "../../components/post-section/PostsWrapper";
import usePost from "../../store/usePost";
import { HeroContainer, HeroImage, HeroText } from "../About/style";

const Blog = () => {
  const { posts } = usePost((state) => state);
  const blogs = posts.filter((post) => post.category === "Blog");

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
