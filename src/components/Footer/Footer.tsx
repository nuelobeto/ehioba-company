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
import { useNavigate } from "react-router-dom";
import { CompanyLinks, SupportLinks } from "../../utils/constants";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <Container>
        <FooterSection>
          <Logo onClick={() => navigate("/home")}>
            <img src={LOGO} alt="logo" />
          </Logo>
        </FooterSection>
        <FooterSection>
          <h3>Company</h3>
          {CompanyLinks.map((link, index) => (
            <p key={index}>{link.text}</p>
          ))}
        </FooterSection>
        <FooterSection>
          <h3>Support</h3>
          {SupportLinks.map((link, index) => (
            <p key={index}>{link.text}</p>
          ))}
        </FooterSection>
        <FooterSection>
          <h3>Get in touch</h3>
          <p>86 - 90 Paul Street,</p>
          <p>London.EC2A 4NE.</p>
          <p>+44 7310 152929</p>
          <Socials>
            <a href="https://www.linkedin.com/company/ehioba-company/">
              <AiFillLinkedin />
            </a>
            <a href="">
              <AiFillMail />
            </a>
            <a href="https://twitter.com/ehiobacom">
              <AiFillTwitterSquare />
            </a>
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
