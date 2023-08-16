import { SUPPORT_IMG } from "../../assets/images";
import Navbar from "../../components/Navbar/Navbar";
import { HeroContainer, HeroImage, HeroText } from "../About/style";

const Support = () => {
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
