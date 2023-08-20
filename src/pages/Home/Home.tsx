import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import { COLORS } from "../../utils/colors";
import { Container } from "../../components/Navbar/styles";
import { OVERVIEW_IMAGE } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  CardsData,
  ServicesData,
  SolutionsCardsData,
} from "../../utils/constants";
import {
  ApproachContainer,
  ApproachImage,
  ApproachText,
  Button,
  Card,
  CardContainer,
  LinkButton,
  OverviewImage,
  Section,
  SectionContainer,
  SectionText,
  SectionTitle,
  SolutionsCard,
} from "./style";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
      <Section>
        <SectionContainer style={Container} $display={"flex"}>
          <SectionText>
            <SectionTitle>Our Overview</SectionTitle>
            <p>
              we are a global and progressive Environmental, Social and
              Governance consultancy committed to building a future where
              economic success and social responsibility co-exist.
            </p>
            <Button
              onClick={() => {
                navigate("/about");
              }}
            >
              ABOUT US
            </Button>
          </SectionText>
          <OverviewImage>
            <img src={OVERVIEW_IMAGE} alt="overview" />
          </OverviewImage>
        </SectionContainer>
      </Section>
      <Section $bg={`${COLORS.lightGray}`}>
        <SectionContainer style={Container}>
          <SectionTitle>Our Services</SectionTitle>
          <CardContainer>
            {CardsData.map((card, index) => (
              <Card key={index}>
                <h3>{card.mainText}</h3>
                <p>{card.subText}</p>
                <LinkButton
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  Learn More
                </LinkButton>
              </Card>
            ))}
          </CardContainer>
        </SectionContainer>
      </Section>
      <Section>
        <SectionContainer style={Container}>
          <SectionTitle>Our Approach</SectionTitle>
          <ApproachContainer>
            {ServicesData.map((service, index) => (
              <div className="common" key={index}>
                <ApproachText>
                  <h3>{service.mainText}</h3>
                  <p>{service.subText}</p>
                </ApproachText>
                <ApproachImage>
                  <img src={service.image} alt={service.mainText} />
                </ApproachImage>
              </div>
            ))}
          </ApproachContainer>
        </SectionContainer>
      </Section>
      <Section $bg={`${COLORS.lightGray}`}>
        <SectionContainer style={Container}>
          <SectionTitle>Our Solution</SectionTitle>
          <CardContainer>
            {SolutionsCardsData.map((card, index) => (
              <SolutionsCard key={index}>
                <h3>{card.mainText}</h3>
                <p>{card.subText}</p>
              </SolutionsCard>
            ))}
          </CardContainer>
        </SectionContainer>
      </Section>
      <Footer />
    </>
  );
};

export default Home;
