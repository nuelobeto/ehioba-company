/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
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
import { ImSpinner8 } from "react-icons/im";
import { toast } from "react-toastify";

const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	emailjs.init("8O5VNpUZ4qhHc44MY");

	const sendEmail = (e: any) => {
		e.preventDefault();

		const emailParams = {
			sender: email,
			name: `${lastName} ${firstName}`,
			company: companyName,
			message: message,
		};

		setLoading(true);
		emailjs.send("service_4ddvjnh", "template_bh10qba", emailParams).then(
			(result) => {
				console.log("Email sent successfully:", result.text);
				setLoading(false);
				toast.success("Email sent successfully.");
			},
			(error) => {
				console.log("Error sending email:", error);
				setLoading(false);
				toast.success("Email sent successfully.");
			}
		);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	useEffect(() => {
		scrollToTop();
	}, []);

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
							required
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
							required
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
							required
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
							required
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
							required
						/>
					</ContactInput>
					<ContactButton>
						{loading ? <ImSpinner8 className="spinner font-[18px]" /> : "Send"}
					</ContactButton>
				</ContactForm>
			</ContactContainer>
			<Footer />
		</>
	);
};

export default Contact;
