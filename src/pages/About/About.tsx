import { useEffect } from "react";
import { ABOUT_IMAGE, WHO_WE_ARE, EHIOBA_IMG } from "../../assets/images";
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
import { DarkSectionTitle, HeroContainer, HeroImage, HeroText } from "./style";

const About = () => {
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
            <div>
              <h4>FOUNDER</h4>
              <h2> Osayomwanbor Wilfred Ehioba </h2>
              <h4 style={{ marginTop: "2rem" }}>SHORT BIO</h4>
              <p>
                Wilfred is an entrepreneur and a member of the International
                Association of Energy Economies. He has a Master of Arts in
                politics from the University of Lincoln. Currently, he is a
                youth advisor to the European Union Delegation to Nigeria and
                ECOWAS. In 2021, he was invited by the French government as part
                of a delegation from Nigeria to participate in the New Africa
                France Summit in Montpellier, France. Wilfred has a sound
                background in ESG, climate and energy policies, and data
                analysis.
              </p>
            </div>
          </SectionText>
          <OverviewImage>
            <img src={EHIOBA_IMG} alt="ehioba" />
          </OverviewImage>
        </SectionContainer>
      </Section>
      <Section $bg={`${COLORS.bgGreen}`}>
        <SectionContainer style={Container}>
          <DarkSectionTitle>Summary</DarkSectionTitle>
          <SectionText style={{ textAlign: "center" }}>
            <p>
              Join us in building a sustainable future and achieving net zero
              emissions. Let us help you develop and implement a comprehensive
              sustainability strategy today.
            </p>
          </SectionText>
        </SectionContainer>
      </Section>
      <Footer />
    </>
  );
};

export default About;
