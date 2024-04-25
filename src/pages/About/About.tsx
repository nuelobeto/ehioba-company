import { useEffect } from "react";
import { ABOUT_IMAGE, WHO_WE_ARE, EHIOBA_IMG } from "../../assets/images";
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
							Ehioba and Company is a clean energy company offering farmers and
							food manufacturers access to clean energy solutions, including
							Solar PV, Solar Thermal, Inverter, and Battery Storage, along with
							complimentary sustainability services to meet their energy needs
							and increase the social impact on the environment.
						</p>
					</SectionText>
					<OverviewImage>
						<img src={WHO_WE_ARE} alt="overview" />
					</OverviewImage>
				</SectionContainer>
			</Section>
			<Section $bg={`${COLORS.bgGreen}`}>
				<SectionContainer style={Container}>
					<DarkSectionTitle>Vision</DarkSectionTitle>
					<SectionText style={{ textAlign: "center" }}>
						<p>
							Leading the charge towards a carbon-neutral agriculture industry
							powered by clean, renewable energy.
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
			<Section>
				<SectionContainer style={Container}>
					<div className="flex items-center justify-center mb-[2rem]">
						<SectionTitle>Our Advisory Board</SectionTitle>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem]">
						<div className="flex flex-col gap-[1rem]">
							<img
								src="/assets/images/jaq.jpg"
								alt=""
								className="w-full rounded-[12px] aspect-[1/1.1] object-cover"
							/>
							<div className="flex flex-col gap-[1rem] text-center">
								<h2 className=" font-bold">Jacqueline Gray</h2>
								<p className="text-sm">
									Jacqueline Gray is the Director of Regional
									Engagement(Business & Operations) at the University of
									Lincoln. She joined the University of Lincoln in 2014 to help
									support the launch of the School of Chemistry & the School of
									Maths & Physics and gained further experience working in
									several senior leadership roles in the College of Science.
								</p>
							</div>
						</div>

						<div className="flex flex-col gap-[1rem]">
							<img
								src="/assets/images/ginny.jpg"
								alt=""
								className="w-full rounded-[12px] aspect-[1/1.1] object-cover"
							/>
							<div className="flex flex-col gap-[1rem] text-center">
								<h2 className=" font-bold">Ginny Walker</h2>
								<p className="text-sm">
									Ginny Walker works as a Business Advisor for the City of
									Lincoln Council,supporting businesses and enterprising
									individuals achieve their goals. She has 18 years’ experience
									running a family owned business, nurturing it from start up
									through to a successful management buy out.
								</p>
							</div>
						</div>

						<div className="flex flex-col gap-[1rem]">
							<img
								src="/assets/images/reece.jpg"
								alt=""
								className="w-full rounded-[12px] aspect-[1/1.1] object-cover"
							/>
							<div className="flex flex-col gap-[1rem] text-center">
								<h2 className=" font-bold">Reece Leggett</h2>
								<p className="text-sm">
									Reece is the Student Enterprise Manager at the University of
									Lincoln. He leads the Student Enterprise activity across the
									institution and support students in crafting their business
									plans, developing their pitches, and identifying the resources
									they need to launch their businesses.
								</p>
							</div>
						</div>

						<div className="flex flex-col gap-[1rem]">
							<img
								src="/assets/images/dominic.jpg"
								alt=""
								className="w-full rounded-[12px] aspect-[1/1.1] object-cover"
							/>
							<div className="flex flex-col gap-[1rem] text-center">
								<h2 className=" font-bold">Dominick McOmish</h2>
								<p className="text-sm">
									Dominick currently works as the Marketing and Events Officer
									for the University of Lincoln's Enterprise and Innovation
									team, supporting the university's managed office spaces and
									business support.
								</p>
							</div>
						</div>
					</div>
				</SectionContainer>
			</Section>
			<Section $bg={`${COLORS.bgGreen}`}>
				<SectionContainer style={Container}>
					<SectionText style={{ textAlign: "center" }}>
						<p style={{ fontSize: "25px", fontWeight: 500 }}>
							Position your business to harness future opportunities by adopting
							net zero practices.
						</p>
					</SectionText>
				</SectionContainer>
			</Section>
			<Section>
				<SectionContainer style={Container}>
					<h2 className="text-2xl text-center font-bold mb-[32px]">
						Membership and companies we are working with
					</h2>

					<div className="flex flex-wrap justify-center gap-[16px] w-full mx-auto">
						<div className="w-[200px] h-[200px] flex items-center justify-center rounded-[20px] bg-white p-[16px] shadow-xl border">
							<img
								src="/assets/images/partner1.png"
								alt=""
								className="w-full block"
							/>
						</div>
						<div className="w-[200px] h-[200px] flex items-center justify-center rounded-[20px] bg-white p-[16px] shadow-xl border">
							<img
								src="/assets/images/powervault.png"
								alt=""
								className="w-full block"
							/>
						</div>
					</div>
				</SectionContainer>
			</Section>
			<Footer />
		</>
	);
};

export default About;
