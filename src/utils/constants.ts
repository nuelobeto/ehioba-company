import {
  SLIDER_IMAGE_1,
  SLIDER_IMAGE_2,
  SLIDER_IMAGE_3,
} from "../assets/images";
import { carouselDataType } from "./types";

export const navLinks: string[] = [
  "home",
  "about",
  "contact",
  "insights",
  "blog",
];

export const carouselData: carouselDataType[] = [
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
