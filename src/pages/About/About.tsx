import { useEffect } from "react";
import {
	ABOUT_IMAGE,
	WHO_WE_ARE,
	EHIOBA_IMG,
	PARTNERS_IMG,
	PARTNER1,
} from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../../components/Navbar/styles";
import { COLORS } from "../../utils/colors";
import {
	OverviewImage,
	Section,
	SectionContainer,
	SectionText,
	SectionTitle,
} from "../Home/style";
import { DarkSectionTitle, HeroContainer, HeroImage, HeroText } from "./style";

const About = () => {
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
				<HeroImage src={ABOUT_IMAGE} />
				<HeroText>About US</HeroText>
			</HeroContainer>
			<Section>
				<SectionContainer style={Container} $display={"flex"}>
					<SectionText>
						<SectionTitle>Who We Are</SectionTitle>
						<p>
							We believe that sustainability is not just an obligation, but an
							opportunity, and we are committed to working with our clients to
							help them achieve their sustainability goals in a way that aligns
							with their business objectives and values.
						</p>
					</SectionText>
					<OverviewImage>
						<img src={WHO_WE_ARE} alt="overview" />
					</OverviewImage>
				</SectionContainer>
			</Section>
			<Section $bg={`${COLORS.bgGreen}`}>
				<SectionContainer style={Container}>
					<DarkSectionTitle>Why US</DarkSectionTitle>
					<SectionText style={{ textAlign: "center" }}>
						<p>
							Ehioba & Company is committed to delivering a standardize, cost -
							effective and digitalised process, ensuring a smooth and effective
							transition for your organisation.
						</p>
					</SectionText>
				</SectionContainer>
			</Section>

			<Section>
				<SectionContainer style={Container} $display={"flex"}>
					<SectionText>
						<SectionTitle>Meet the Chief Executive Officer</SectionTitle>
						<div>
							<h2> Osayomwanbor Wilfred Ehioba </h2>
							<h4 style={{ marginTop: "2rem" }}>SHORT BIO</h4>
							<p>
								Wilfred is an entrepreneur. He has a Master of Arts in politics
								from the University of Lincoln. Currently, he is a youth advisor
								to the European Union Delegation to Nigeria and ECOWAS. In 2021,
								he was invited by the French government as part of a delegation
								from Nigeria to participate in the New Africa France Summit in
								Montpellier, France. Wilfred has a sound background in ESG,
								climate and energy policies, and data analysis.
							</p>
						</div>
					</SectionText>
					<OverviewImage>
						<img src={EHIOBA_IMG} alt="ehioba" />
					</OverviewImage>
				</SectionContainer>
			</Section>
			<Section $bg={`${COLORS.bgGreen}`}>
				<SectionContainer style={Container}>
					{/* <DarkSectionTitle>Summary</DarkSectionTitle> */}
					<SectionText style={{ textAlign: "center" }}>
						<p style={{ fontSize: "25px", fontWeight: 500 }}>
							Position your business to harness future opportunities by adopting
							net zero practices.
						</p>
					</SectionText>
				</SectionContainer>
			</Section>
			<Section>
				<SectionContainer style={Container} $display={"flex"}>
					<SectionText>
						<SectionTitle>Key Partnership Benefits</SectionTitle>
						<div>
							<h4>OPERATIONAL RESILIENCE</h4>
							<p>
								Mitigate risk and adapt to changing regulatory requirements,
								ensuring long-term operational stability
							</p>
							<h4 style={{ marginTop: "2rem" }}>ENHANCED BRAND REPUTATION</h4>
							<p>
								Establish your brand as a sustainable leader, gaining a
								competitive edge in the market.
							</p>
						</div>
					</SectionText>
					<OverviewImage>
						<img src={PARTNERS_IMG} alt="partnership" />
					</OverviewImage>
				</SectionContainer>
			</Section>
			<Section $bg={`${COLORS.bgGreen}`}>
				<SectionContainer style={Container}>
					<DarkSectionTitle>Our Partners</DarkSectionTitle>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							paddingTop: "2rem",
						}}>
						<img
							src={PARTNER1}
							alt=""
							style={{ width: "200px", display: "block" }}
						/>
					</div>
				</SectionContainer>
			</Section>
			<Footer />
		</>
	);
};

export default About;
