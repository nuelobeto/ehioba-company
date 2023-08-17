import { useEffect } from "react";
import { SUPPORT_IMG } from "../../assets/images";
import Navbar from "../../components/Navbar/Navbar";
import { HeroContainer, HeroImage, HeroText } from "../About/style";

const Support = () => {
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
        <HeroImage src={SUPPORT_IMG} />
        <HeroText>EHIOBA & Company</HeroText>
      </HeroContainer>
    </>
  );
};

export default Support;
