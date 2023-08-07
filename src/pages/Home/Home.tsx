import styled from "styled-components";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import { COLORS } from "../../utils/colors";
import { Container } from "../../components/Navbar/styles";
import { OVERVIEW_IMAGE } from "../../assets/images";

const Overview = styled.div`
  width: 100%;
  padding: 5rem 0;
  background-color: ${COLORS.lightGray};
`;
const OverviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OverviewText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.5;
  padding: 0 2rem;
  @media (max-width: 768px) {
    padding: 2rem 0;
    margin: 1rem auto;
  }

  & > h2 {
    font-size: clamp(1.5rem, 2rem, 3rem);
    font-weight: 600;
    margin-bottom: 3rem;
    &::after {
      content: "";
      display: block;
      width: 6rem;
      height: 0.5rem;
      background-color: ${COLORS.lightGreen};
      margin: -1rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
  & > p {
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.textGray};
  }
`;

const OverviewImage = styled.div`
  display: flex;
  flex: 1;
  & > img {
    object-fit: cover;
    width: 100%;
    border-radius: 0.5rem;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Overview>
        <OverviewContainer style={Container}>
          <OverviewText>
            <h2>Overview</h2>
            <p>
              we are a global and progressive Environmental, Social and
              Governance consultancy committed to building a future where
              economic success and social responsibility co-exist.
            </p>
          </OverviewText>
          <OverviewImage>
            <img src={OVERVIEW_IMAGE} alt="overview" />
          </OverviewImage>
        </OverviewContainer>
      </Overview>
    </>
  );
};

export default Home;
