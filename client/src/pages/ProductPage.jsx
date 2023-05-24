import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Favorite, ShoppingCart } from "@material-ui/icons";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px;
  display: flex;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Container = styled.div`
  margin-top: 70px;
`;

const ImgContainer = styled.div`
  flex: 1;

  @media only screen and (max-width: 500px) {
    
  }
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  @media only screen and (max-width: 500px) {
   height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  @media only screen and (max-width: 500px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;

  @media only screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const Desc = styled.p`
  margin: 0;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 38px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
`;

const Filter = styled.div`
  & .panel {
    display: flex;
  }
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 10px;
`;

const FilterColor = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
`;

const FilterSize = styled.div`
  margin-right: 10px;
  border: 1px solid lightgray;
  padding: 5px;
  width: 54px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const AddContainer = styled.div`
  max-width: 380px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px;
  border: 0px solid gray;
  background-color: #7fbcf1;
  color: white;
  cursor: pointer;
  font-weight: 500;
  width: 100%;

  &:hover {
    background-color: #71acdf;
    color: white;
  }
`;

const LikeButton = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: gray;

  &:hover {
    color: #f44b4b;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1612878569417-a62601be8d7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
        </ImgContainer>

        <InfoContainer>
          <Title>Sassy dress</Title>
          <Desc>
            Add a splash of personality to your wardrobe with our stylish
            dress featuring a captivating pattern. Crafted from soft, breathable
            fabric, this dress is comfortable and durable, making it perfect
            for everyday wear. With its eye-catching design, this dress is
            sure to turn heads wherever you go.
          </Desc>
          <Price>1000p</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <div className="panel">
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </div>
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <div className="panel">
                <FilterSize>XS</FilterSize>
                <FilterSize>S</FilterSize>
                <FilterSize>M</FilterSize>
                <FilterSize>L</FilterSize>
              </div>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AddButton>
              <ShoppingCart />
              ADD TO CART
            </AddButton>
            <LikeButton>
              <Favorite style={{fontSize: "30px"}} />
            </LikeButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductPage;
