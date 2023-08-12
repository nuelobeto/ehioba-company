import { CONTACT_IMAGE } from "../../assets/images";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import {
  DarkSectionTitle,
  HeroContainer,
  HeroImage,
  HeroText,
} from "../About/style";
import {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactButton,
} from "./style";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={CONTACT_IMAGE} />
        <HeroText>Contact US</HeroText>
      </HeroContainer>
      <ContactContainer>
        <DarkSectionTitle>Get in Touch</DarkSectionTitle>
        <p>
          Contact our experienced team to find out how we can help you achieve
          your sustainable business goals.
        </p>
        <ContactForm>
          <ContactInput>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
            />
          </ContactInput>
          <ContactInput>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
            />
          </ContactInput>
          <ContactInput>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Example Company"
            />
          </ContactInput>
          <ContactInput>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jon.doe@example.com"
            />
          </ContactInput>
          <ContactInput className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="write your message here..."
              rows={5}
            />
          </ContactInput>
          <ContactButton>SEND</ContactButton>
        </ContactForm>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;
