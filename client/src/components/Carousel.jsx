import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 1;
  border-radius: 50%;

  @media only screen and (max-width: 500px) {
       /* background-color: white; */
  }
`;

const Slide = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};

  @media only screen and (max-width: 500px) {
    margin-right: 100px;
    display: block;
  }
`;

const ImgContainer = styled.div`
  /* margin-right: 100px; */
  margin-left: 40px;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  @media only screen and (max-width: 500px) {
    position: absolute;
    top: 0;
    transform: translateY(40vh);
    max-width: 100vw;   
  }
`;

const Title = styled.h1`
  font-size: 80px;
  /* text-transform: uppercase; */

  @media only screen and (max-width: 500px) {
    color: white;
    background-color: rgba(0,0,0, 0.8);
    font-size: 50px;
    padding: 2px 10px;
  }
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 24px;
  font-weight: 300;

  @media only screen and (max-width: 500px) {
    & {
      color: white;
      margin: 0;
      margin-top: 10px;
      background-color: rgba(0,0,0, 0.8);
      font-size: 18px;
      padding: 2px 10px;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid black;

  @media only screen and (max-width: 500px) {
    background-color: rgba(0,0,0, 0.8);
    color: white;
    margin-top: 20px;
    border: none;
  }
`;

const Attribution = styled.a`
  color: gray;
  display: block;
  font-size: small;
  text-decoration: none;
  position: absolute;
  bottom: 10px;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  background-color: ${(props) => props.bg};

  @media only screen and (max-width: 500px) {
    transform: translateX(
      calc(
        ${(props) => props.slideIndex * -100}vw - 100px *
          ${(props) => props.slideIndex}
      )
    );
    position: relative;
  }
`;

const Image = styled.img`
  height: 100%;
  margin-left: 100px;

  @media only screen and (max-width: 500px) {
    margin-left: -50px;
  }
`;

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex} bg={"#fff9f2"}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={"#fff9f2"}>
            <ImgContainer>
              <Image src={item.img} />
              <Attribution href="https://www.freepik.com/free-photo/back-young-beautiful-smiling-blond-female-trendy-summer-clothes-sexy-carefree-woman-posing-near-pink-wall-studio-positive-model-having-fun-indoors-cheerful-happy_28673965.htm">
                Photo by halayalex on Freepik
              </Attribution>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link to='/product'><Button>SHOP NOW</Button></Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
}
