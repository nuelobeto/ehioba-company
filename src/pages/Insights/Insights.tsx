import { BLOG_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { HeroContainer, HeroImage, HeroText } from "../About/style";
import PostsWrapper from "../../components/post-section/PostsWrapper";
import usePost from "../../store/usePost";
import { useEffect, useState } from "react";
import { PostT } from "../../types/types";

const Insights = () => {
  const { posts } = usePost((state) => state);
  const [insights, setInsights] = useState<PostT[]>([]);

  useEffect(() => {
    setInsights(posts.filter((post) => post.category === "Insight"));
  }, [posts]);

  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={BLOG_IMAGE} />
        <HeroText>Latest ESG Trends</HeroText>
      </HeroContainer>
      <PostsWrapper posts={insights} />
      <Footer />
    </>
  );
};

export default Insights;
