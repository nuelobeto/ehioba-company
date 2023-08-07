import { carouselData } from "../../utils/constants";
import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { useNavigate } from "react-router-dom";

interface PropType {
  side: string;
  slide: number;
  contact: string;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div<PropType>`
  width: 3rem;
  height: 3rem;
  color: ${COLORS.white};
  font-size: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.$side === "left" && "1rem"};
  right: ${(props) => props.$side === "right" && "1rem"};
  margin: auto;
  cursor: pointer;
  z-index: 1;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${COLORS.darkGreen};
    opacity: 0.8;
  }
`;
const Wrapper = styled.div<PropType>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.$slide * -100}vw);
  transition: all 1s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3);
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Title = styled.h1`
  font-size: clamp(2rem, 3rem, 5rem);
  color: ${COLORS.white};
  font-weight: bold;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const SubText = styled.h6`
  font-size: clamp(0.5rem, 1.3rem, 2rem);
  color: ${COLORS.gray};
  font-weight: 500;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Button = styled.button<PropType>`
  padding: 1rem 2rem;
  margin: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.3rem;
  background-color: ${(props) =>
    props.$contact ? COLORS.darkGreen : COLORS.lightGreen};
  color: ${COLORS.white};
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;

const Carousel = () => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : carouselData.length - 1);
    } else {
      setSlideIndex(slideIndex < carouselData.length - 1 ? slideIndex + 1 : 0);
    }
  };
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((prevIndex: number) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);
  const navigate = useNavigate();

  return (
    <Container>
      <Arrow $side="left" onClick={() => handleClick("left")}>
        <AiOutlineLeft />
      </Arrow>
      <Wrapper $slide={slideIndex}>
        {carouselData.map((slide, index) => (
          <Slide key={index}>
            <Image src={slide.image} />
            <InfoContainer>
              <Title>{slide.mainText}</Title>
              <SubText>{slide.subText}</SubText>
              <div>
                <Button
                  $contact={"contact"}
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  LEARN MORE
                </Button>
                <Button
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  CONTACT US
                </Button>
              </div>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow $side="right" onClick={() => handleClick("right")}>
        <AiOutlineRight />
      </Arrow>
    </Container>
  );
};

export default Carousel;
