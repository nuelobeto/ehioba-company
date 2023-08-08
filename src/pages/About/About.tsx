import styled from "styled-components";
import { ABOUT_IMAGE, WHO_WE_ARE, TEAM } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../../components/Navbar/styles";
import { COLORS } from "../../utils/colors";
import {
  OverviewImage,
  Section,
  SectionContainer,
  SectionText,
  SectionTitle,
} from "../Home/style";
import { HeroContainer, HeroImage, HeroText } from "./style";

const DarkSectionTitle = styled(SectionTitle)`
  text-align: center;
  font-weight: 700;
  &::after {
    content: "";
    background-color: ${COLORS.lightGreen};
    margin: -1rem auto;
  }
`;

const About = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={ABOUT_IMAGE} />
        <HeroText>About US</HeroText>
      </HeroContainer>
      <Section>
        <SectionContainer style={Container} $display={"flex"}>
          <SectionText>
            <SectionTitle>Who We Are</SectionTitle>
            <p>
              We believe that sustainability is not just an obligation, but an
              opportunity, and we are committed to working with our clients to
              help them achieve their sustainability goals in a way that aligns
              with their business objectives and values.
            </p>
          </SectionText>
          <OverviewImage>
            <img src={WHO_WE_ARE} alt="overview" />
          </OverviewImage>
        </SectionContainer>
      </Section>
      <Section $bg={`${COLORS.bgGreen}`}>
        <SectionContainer style={Container}>
          <DarkSectionTitle>Why US</DarkSectionTitle>
          <SectionText style={{ textAlign: "center" }}>
            <p>
              Ehioba & Company is a progressive ESG consultancy committed to
              facilitating businesses on their path toward a more sustainable
              future. We provide practical environmental, social, and governance
              solutions to our clients, ensuring cost-effectiveness while
              gaining strategic advantage.We help our clients build a
              sustainable future for themselves and their environment and the
              future of Humanity.
            </p>
          </SectionText>
        </SectionContainer>
      </Section>
      <Section>
        <SectionContainer style={Container} $display={"flex"}>
          <SectionText>
            <SectionTitle>Meet the Team</SectionTitle>
            <div style={{ height: "10rem" }}></div>
          </SectionText>
          <OverviewImage>
            <img src={TEAM} alt="overview" />
          </OverviewImage>
        </SectionContainer>
      </Section>
      <Footer />
    </>
  );
};

export default About;
