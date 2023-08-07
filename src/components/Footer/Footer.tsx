import { Logo } from "../Navbar/styles";
import { LOGO } from "../../assets/images";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {
  Button,
  Container,
  CopyRight,
  FooterContainer,
  FooterSection,
  Input,
  Socials,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterSection>
          <Logo style={{ marginRight: "1rem" }}>
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
