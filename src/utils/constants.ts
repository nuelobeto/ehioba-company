import { ROUTES } from "../app-navigation/routes";
import {
  APPROACH_IMAGE_1,
  APPROACH_IMAGE_2,
  APPROACH_IMAGE_3,
  APPROACH_IMAGE_4,
  APPROACH_IMAGE_5,
  APPROACH_IMAGE_6,
  SLIDER_IMAGE_1,
  SLIDER_IMAGE_2,
  SLIDER_IMAGE_3,
} from "../assets/images";
import { CardDataType, CarouselDataType, FooterLinksType } from "./types";

export const navLinks: string[] = [
  "home",
  "about",
  "contact",
  "insights",
  "blog",
];

export const carouselData: CarouselDataType[] = [
  {
    image: `${SLIDER_IMAGE_1}`,
    mainText: "Empowering a Greener Future",
    subText: "merge economic success and social responsibility.",
  },
  {
    image: `${SLIDER_IMAGE_2}`,
    mainText: "Strategy Development",
    subText: "design ESG strategies that align with your goals and values",
  },
  {
    image: `${SLIDER_IMAGE_3}`,
    mainText: "Supply Chain Sustainability",
    subText: "assess, improve and mitigating risks.",
  },
];

export const CardsData: CardDataType[] = [
  {
    mainText: "Supply Chain Assessment",
    subText:
      "We optimize sustainability across our clients supply chain through collaborative partnership, identifying areas of improvement and mitigating risks.",
  },
  {
    mainText: "ESG Strategy Development",
    subText:
      "We specialize in designing tailored ESG strategies that align with our clients' distinct goals and values. We identify and prioritize ESG issues, set goals, and develop a road map for implementation.",
  },
  {
    mainText: "Sustainable Finance Guide (Available Soon)",
    subText:
      "We provide expert guidance to our clients in accessing sustainable project funding and financial support for the implementation of ESG strategies.",
  },
];

export const ServicesData: CarouselDataType[] = [
  {
    image: `${APPROACH_IMAGE_1}`,
    mainText: "Initial Consultation",
    subText:
      " We meet our clients to discuss their needs and objectives regarding sustainability and ESG. We then develop a tailored strategy to meet their needs and objectives.",
  },
  {
    image: `${APPROACH_IMAGE_2}`,
    mainText: "ESG Assessment",
    subText:
      "We evaluate the current Environmental, Social and Governance practices and performance of our clients and identify opportunities for improvement and potential risk mitigation.",
  },
  {
    image: `${APPROACH_IMAGE_3}`,
    mainText: "ESG Strategy Development",
    subText:
      "We develop action plans, set objectives and ESG strategies that align with our clients' distinct goals and values, Then develop a road map for implementation and actualization.",
  },
  {
    image: `${APPROACH_IMAGE_4}`,
    mainText: "Implementation and verification",
    subText:
      " we guide the implementation of the Designed Strategy and verify the measures of impact by working hand in hand with our clients to implement ESG initiatives, maximizing value and impact",
  },
  {
    image: `${APPROACH_IMAGE_5}`,
    mainText: "Reporting and Communication",
    subText:
      "We provide regular reports to our clients to keep them informed about the progress and effectiveness of their ESG initiatives by communicating their ESG performance and Improvements.",
  },
  {
    image: `${APPROACH_IMAGE_6}`,
    mainText: "Support and Continuous Improvement",
    subText:
      "We maintain relationships with clients to provide ongoing support, assistance and continuously improve their ESG performance and impact by identifying new opportunities, trends and areas of improvement",
  },
];

export const SolutionsCardsData: CardDataType[] = [
  {
    mainText: "VALUE",
    subText:
      "The satisfaction of our clients is our major priority. We take into consideration the needs of our clients and provide quality service that exceeds their expectations.",
  },
  {
    mainText: "CONVENIENCE",
    subText:
      "We render our services to clients with a hassle free and streamlined experience that meet the needs and saves time and effort.",
  },
  {
    mainText: "EXPERTISE AND INNOVATION",
    subText:
      "We are professionals and innovative, and we possess the required skills and training to understand the needs of our clients and deliver excellent service.",
  },
  {
    mainText: "AFFORDABLE",
    subText:
      " Our services are affordable and quality, and we are accessible to our customers.",
  },
];

export const tableHeadData = [
  "Id",
  "Title",
  "Category",
  "Author",
  "Date",
  "Action",
];

export const CompanyLinks: FooterLinksType[] = [
  {
    text: "About",
    link: `${ROUTES.about}`,
  },
  {
    text: "Contact",
    link: `${ROUTES.contact}`,
  },
  {
    text: "Insights",
    link: `${ROUTES.insights}`,
  },
  {
    text: "Blog",
    link: `${ROUTES.blog}`,
  },
];

export const SupportLinks: FooterLinksType[] = [
  {
    text: "FAQ",
    link: `${ROUTES.support}`,
  },

  {
    text: "Privacy Policy",
    link: `${ROUTES.support}`,
  },
  {
    text: "Terms of Use",
    link: `${ROUTES.support}`,
  },
  {
    text: "Admin",
    link: `${ROUTES.admin}`,
  },
];
