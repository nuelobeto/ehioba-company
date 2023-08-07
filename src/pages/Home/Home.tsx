import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import { COLORS } from "../../utils/colors";
import { Container } from "../../components/Navbar/styles";
import { OVERVIEW_IMAGE } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { CardsData } from "../../utils/constants";
import {
  Button,
  Card,
  CardContainer,
  LinkButton,
  OverviewImage,
  Section,
  SectionContainer,
  SectionText,
  SectionTitle,
} from "./style";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Carousel />
      <Section>
        <SectionContainer style={Container} $display={"flex"}>
          <SectionText>
            <SectionTitle>Overview</SectionTitle>
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
          <SectionTitle>Services</SectionTitle>
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
      <Footer />
    </>
  );
};

export default Home;
