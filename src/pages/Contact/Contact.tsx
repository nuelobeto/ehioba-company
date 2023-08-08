import { COMING_SOON, CONTACT_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  HeroContainer,
  HeroImage,
  HeroSubText,
  HeroText,
} from "../About/style";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={CONTACT_IMAGE} />
        <HeroText>Contact US</HeroText>
      </HeroContainer>
      <HeroContainer>
        <HeroImage src={COMING_SOON} />
        <HeroSubText>
          we are making some Changes in other to better serve you
        </HeroSubText>
      </HeroContainer>
      <Footer />
    </>
  );
};

export default Contact;
