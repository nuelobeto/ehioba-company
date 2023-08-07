import {
  SLIDER_IMAGE_1,
  SLIDER_IMAGE_2,
  SLIDER_IMAGE_3,
} from "../assets/images";
import { CardDataType, CarouselDataType } from "./types";

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
    mainText: "Analysis and Strategic Development",
    subText:
      "Based on our assessment,We provide a comprehensive analysis of your company's ESG performance and develop a strategy to improve your ESG performance.",
  },
];
