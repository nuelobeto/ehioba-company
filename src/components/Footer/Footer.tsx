/* eslint-disable @typescript-eslint/no-explicit-any */
import { LOGO, TwitterXImg } from "../../assets/images";
import { AiFillLinkedin, AiFillMail, AiFillInstagram } from "react-icons/ai";
import {
	Container,
	CopyRight,
	FooterContainer,
	FooterLogo,
	FooterSection,
	Socials,
} from "./style";
import { useNavigate } from "react-router-dom";
import { CompanyLinks, SupportLinks } from "../../utils/constants";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { ImSpinner8 } from "react-icons/im";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	emailjs.init("8O5VNpUZ4qhHc44MY");

	const sendEmail = (e: any) => {
		e.preventDefault();

		const emailParams = {
			sender: email,
			name: email,
			message: `${email} subscribed to your newsletter.`,
		};

		setLoading(true);
		emailjs.send("service_4ddvjnh", "template_dcofa6l", emailParams).then(
			(result) => {
				console.log("Email sent successfully:", result.text);
				setLoading(false);
				toast.success("You have subscribed to our Newsletter.");
			},
			(error) => {
				console.log("Error sending email:", error);
				setLoading(false);
				toast.error("An error occured. Try again.");
			}
		);
	};

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
							href="https://www.linkedin.com/company/ecofarm-energy/"
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
							href="https://twitter.com/EcoFarmEnergy"
							target="_blank"
							rel="noreferrer">
							<img src={TwitterXImg} alt="" />
						</a>
					</Socials>
				</FooterSection>
				<FooterSection>
					<h3>Newsletter</h3>
					<p>Subscribe to our newsletter</p>
					<input
						type="email"
						placeholder="Enter your Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="border w-full text-black h-[44px] rounded-[6px] outline-none px-[14px] mb-[8px]"
					/>
					<button
						className="py-[1rem] px-[1.5rem] bg-[#2A7C6F] text-white rounded-[6px] h-[44px] flex items-center justify-center"
						onClick={sendEmail}>
						{loading ? (
							<ImSpinner8 className="spinner font-[18px]" />
						) : (
							"Subscribe"
						)}
					</button>
				</FooterSection>
			</Container>
			<CopyRight>
				<p>©2023 by Ehioba & Company. All rights reserved. </p>
			</CopyRight>
		</FooterContainer>
	);
};

export default Footer;
