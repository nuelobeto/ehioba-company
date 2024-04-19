import { LOGO, TwitterXImg } from "../../assets/images";
import { AiFillLinkedin, AiFillMail, AiFillInstagram } from "react-icons/ai";
import {
	Button,
	Container,
	CopyRight,
	FooterContainer,
	FooterLogo,
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
					<FooterLogo onClick={() => navigate("/home")}>
						<img src={LOGO} alt="logo" />
					</FooterLogo>
				</FooterSection>
				<FooterSection>
					<h3>Company</h3>
					{CompanyLinks.map((link, index) => (
						<p onClick={() => navigate(`${link.link}`)} key={index}>
							{link.text}
						</p>
					))}
				</FooterSection>
				<FooterSection>
					<h3>Support</h3>
					{SupportLinks.map((link, index) => (
						<p onClick={() => navigate(`${link.link}`)} key={index}>
							{link.text}
						</p>
					))}
				</FooterSection>
				<FooterSection>
					<h3>Get in touch</h3>
					<p>
						Commerce House, <br /> Carlton Boulevard, <br /> Lincoln, LN2 4WJ
					</p>
					<p>+447988521615</p>
					<Socials>
						<a
							href="https://www.linkedin.com/company/ehioba-company/"
							target="_blank"
							rel="noreferrer">
							<AiFillLinkedin />
						</a>
						<a href="mailto:info@ehioba.com">
							<AiFillMail />
						</a>

						<a
							href="https://www.instagram.com/ecofarm.energy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg=="
							target="_blank"
							rel="noreferrer">
							<AiFillInstagram />
						</a>
						<a
							href="https://twitter.com/ehiobacom"
							target="_blank"
							rel="noreferrer">
							<img src={TwitterXImg} alt="" />
						</a>
					</Socials>
				</FooterSection>
				<FooterSection>
					<h3>Newsletter</h3>
					<p>Subscribe to our newsletter</p>
					<Input type="email" placeholder="Enter your email" required />
					<Button disabled>JOIN</Button>
				</FooterSection>
			</Container>
			<CopyRight>
				<p>©2023 by Ehioba & Company. All rights reserved. </p>
			</CopyRight>
		</FooterContainer>
	);
};

export default Footer;
