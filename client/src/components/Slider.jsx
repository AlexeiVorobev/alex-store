import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
import Girl01 from "../assets/img/girl_01.png";
import Girl02 from "../assets/img/girl_02.png"
import Girl03 from "../assets/img/girl_03.png"

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
  z-index: 2;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  width: fit-content;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
`;
const Description = styled.p`
    margin: 50px 0;
    font-size: 1.2rem;
    font-weight: 500;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 1.2rem;
    background-color: transparent;
    cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Image = styled.img`
  height: 80%;
  margin-left: 100px;
`;

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
        } else {
            setSlideIndex(slideIndex < (sliderItems.length - 1) ? slideIndex + 1 : 0)
        }
    }
    
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
        <Slide bg={item.bg}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>
                {item.desc}
            </Description>
            <Button>Shop now</Button>
          </InfoContainer>
        </Slide>
        ))}

       

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
}
