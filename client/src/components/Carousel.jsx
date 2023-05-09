import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";

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
padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bg};
`;

const ImgContainer = styled.div`
  margin-right: 100px;
  margin-left: 40px;
  height: 100%;
  position: relative;

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
    font-size: 1.5rem;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid black;
`;

const Attribution = styled.a`
color: gray;
display: block;
font-size: small;
text-decoration: none;
  position: absolute;
  bottom: 10px;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Image = styled.img`
  height: 100%;
  margin-left: 100px;
`;

export default function Carousel() {

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
        <Slide key={item.id} bg={"#fffcfc"}>
          <ImgContainer>
            <Image src={item.img} />
            <Attribution href="https://www.freepik.com/free-photo/back-young-beautiful-smiling-blond-female-trendy-summer-clothes-sexy-carefree-woman-posing-near-pink-wall-studio-positive-model-having-fun-indoors-cheerful-happy_28673965.htm">Photo by halayalex on Freepik</Attribution>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>
                {item.desc}
            </Description>
            <Button>SHOP NOW</Button>
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
