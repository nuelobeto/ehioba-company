import { BLOG_IMAGE, COMING_SOON } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  HeroContainer,
  HeroImage,
  HeroSubText,
  HeroText,
} from "../About/style";

const Insights = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={BLOG_IMAGE} />
        <HeroText>Insights</HeroText>
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

export default Insights;
