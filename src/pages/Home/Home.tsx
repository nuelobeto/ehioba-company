import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import { COLORS } from "../../utils/colors";
import { Container } from "../../components/Navbar/styles";
import {
	ECOFARM,
	OVERVIEW_IMAGE,
	PANEL1,
	PANEL2,
	PARTNER1,
} from "../../assets/images";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import // CardsData,
// ServicesData,
// SolutionsCardsData,
"../../utils/constants";
import {
	// ApproachContainer,
	// ApproachImage,
	// ApproachText,
	Button,
	// Card,
	// CardContainer,
	// LinkButton,
	OverviewImage,
	Section,
	SectionContainer,
	SectionText,
	SectionTitle,
	// SolutionsCard,
} from "./style";
import { useEffect } from "react";
import { DarkSectionTitle } from "../About/style";

const Home = () => {
	const navigate = useNavigate();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	useEffect(() => {
		scrollToTop();
	}, []);

	return (
		<>
			<Navbar />
			<Carousel />
			<Section>
				<SectionContainer style={Container} $display={"flex"}>
					<SectionText>
						<SectionTitle>Who We Are</SectionTitle>
						<p>
							We are a clean energy company passionate about transforming the
							global food system by assisting farmers to produce sustainably and
							reduce the cost of food production.
						</p>
						<Button
							onClick={() => {
								navigate("/about");
							}}>
							ABOUT US
						</Button>
					</SectionText>
					<OverviewImage>
						<img src={OVERVIEW_IMAGE} alt="overview" />
					</OverviewImage>
				</SectionContainer>
			</Section>
			<Section $bg={`${COLORS.lightGray}`}>
				<SectionContainer style={Container} $display={"flex"}>
					<OverviewImage>
						<img src={ECOFARM} alt="overview" />
					</OverviewImage>
					<SectionText>
						<SectionTitle>
							Service: EcoFarm Energy (available soon)
						</SectionTitle>
						<p>
							On our energy-as-a-service platform, farmers and food
							manufacturers can access clean energy solutions, including Solar
							Thermal & Solar PV, Inverter, and Battery Storage, along with
							complimentary sustainability services to meet their energy needs
							and reduce emissions.
						</p>
					</SectionText>
				</SectionContainer>

				<div
					style={{
						display: "flex",
						gap: "1rem",
						maxWidth: "1000px",
						width: "100%",
						margin: "2rem auto 0",
					}}>
					<OverviewImage>
						<img src={PANEL1} alt="overview" />
					</OverviewImage>
					<OverviewImage>
						<img src={PANEL2} alt="overview" />
					</OverviewImage>
				</div>
			</Section>

			<Section $bg={`${COLORS.bgGreen}`}>
				<SectionContainer style={Container}>
					<SectionTitle>Why We Are Different</SectionTitle>
					{/* <CardContainer>
						{SolutionsCardsData.map((card, index) => (
							<SolutionsCard key={index}>
								<h3>{card.mainText}</h3>
								<p>{card.subText}</p>
							</SolutionsCard>
						))}
					</CardContainer> */}
					<p>
						With our platform, customers have the flexibility to subscribe to
						any of our packages tailored to meet their business needs.
						Additionally, customers have their portal where they can create,
						manage their accounts, and track their energy usage. We offer
						complimentary sustainability services, such as carbon accounting and
						reporting, exclusively available for clients subscribed to our
						Standard and Premium plans.
					</p>
				</SectionContainer>
			</Section>
			<Section>
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

export default Home;
