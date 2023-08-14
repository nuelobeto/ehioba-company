import { useState } from "react";
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
import emailjs from "emailjs-com";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  emailjs.init("xqWpsXYZEMl_9cRlJ");

  const sendEmail = (e: any) => {
    e.preventDefault();

    const emailParams = {
      sender: email,
      name: `${lastName} ${firstName}`,
      company: companyName,
      message: message,
    };

    emailjs.send("service_p6so8ya", "template_76l9b8j", emailParams).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
      },
      (error) => {
        console.log("Error sending email:", error);
      }
    );
  };

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
        <ContactForm onSubmit={sendEmail}>
          <ContactInput>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </ContactInput>
          <ContactInput>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </ContactInput>
          <ContactInput>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Example Company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </ContactInput>
          <ContactInput>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jon.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ContactInput>
          <ContactInput className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="write your message here..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
