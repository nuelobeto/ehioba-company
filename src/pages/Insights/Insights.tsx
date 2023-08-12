import {
  AiFillClockCircle,
  AiOutlineFileSearch,
  AiFillCalendar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BLOG_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { HeroContainer, HeroImage, HeroText } from "../About/style";
import {
  PostContainer,
  PostSectionTitle,
  PostTitle,
  SearchContainer,
  PostSection,
  PostCard,
  PostDetails,
  PostImage,
  PostContent,
  ReadMore,
} from "./style";

const Insights = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={BLOG_IMAGE} />
        <HeroText>Latest ESG Trends</HeroText>
      </HeroContainer>
      <PostSection>
        <PostSectionTitle>Latest Stories & Insights</PostSectionTitle>
        <SearchContainer>
          <input type="text" placeholder="Search by Post Title..." />
          <AiOutlineFileSearch />
        </SearchContainer>
        <PostContainer>
          <PostCard>
            <PostImage src={BLOG_IMAGE} />
            <PostDetails>
              <div>
                <AiFillCalendar /> 12th May 2021
              </div>
              <div>
                <AiFillClockCircle /> 5 mins read
              </div>
            </PostDetails>
            <PostTitle>
              ESG Investing: A Brief History of the Pussy Flowing Juices
            </PostTitle>
            <PostContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              tempore ad provident in iusto possimus, commodi optio, beatae
              dolore nesciunt sapiente cum quisquam unde quas eius? Dolorum
              quasi harum quas.
            </PostContent>
            <ReadMore>
              <p>Read More</p> <AiOutlineArrowRight />
            </ReadMore>
          </PostCard>
        </PostContainer>
      </PostSection>
      <Footer />
    </>
  );
};

export default Insights;
