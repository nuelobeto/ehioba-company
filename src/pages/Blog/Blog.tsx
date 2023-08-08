import { COMING_SOON, CONTACT_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  HeroContainer,
  HeroImage,
  HeroSubText,
  HeroText,
} from "../About/style";

const Blog = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={CONTACT_IMAGE} />
        <HeroText>Blogs</HeroText>
      </HeroContainer>
      <HeroContainer>
        <HeroImage src={COMING_SOON} />
        <HeroSubText>
          Making some changes to improve your experience.
        </HeroSubText>
      </HeroContainer>
      <Footer />
    </>
  );
};

export default Blog;
