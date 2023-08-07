import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { Logo } from "../Navbar/styles";
import { LOGO } from "../../assets/images";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: rgb(36, 36, 36);
  color: ${COLORS.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem 0;
  & > h3 {
    color: ${COLORS.gray};
  }
  & > p {
    margin: 0.5rem 0;
    color: ${COLORS.textGray};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Input = styled.input`
  padding: 1rem 2rem;
`;
const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 0.3rem;
  align-self: flex-start;
  background-color: ${COLORS.darkGreen};
  color: ${COLORS.white};
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
const Socials = styled.div`
  display: flex;
  & > svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;
const CopyRight = styled.div`
  text-align: center;
  width: 100%;
  border-top: 0.1rem solid ${COLORS.gray};
  padding: 1rem 0;
  font-size: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterSection>
          <Logo>
            <img src={LOGO} alt="logo" />
          </Logo>
        </FooterSection>
        <FooterSection>
          <h3>Company</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Insights</p>
          <p>Blog</p>
        </FooterSection>
        <FooterSection>
          <h3>Support</h3>
          <p>FAQs</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <Socials></Socials>
        </FooterSection>
        <FooterSection>
          <h3>Get in touch</h3>
          <p>86 - 90 Paul Street,</p>
          <p>London.EC2A 4NE.</p>
          <p>+44 7310 152929</p>
          <Socials>
            <AiFillLinkedin />
            <AiFillMail />
            <AiFillTwitterSquare />
          </Socials>
        </FooterSection>
        <FooterSection>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter</p>
          <Input type="text" placeholder="Enter your email" />
          <Button>JOIN</Button>
        </FooterSection>
      </Container>
      <CopyRight>
        <p>©2023 by Ehioba & Company. All rights reserved. </p>
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
