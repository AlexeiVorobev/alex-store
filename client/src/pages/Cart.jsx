import { Add, ArrowBack, DeleteOutline, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 20px;
  max-width: 1300px;
margin: 0 auto;
    margin-top: 90px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const BackBtn = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 180px;
  height: 250px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const ProductName = styled.span`
    font-weight: bold;
    margin-bottom: 2px;
`;

const ProductId = styled.span`
    color: gray;
    font-size: 16px;
    margin-bottom: 8px;
`;

const ProductColor = styled.span`
    margin-bottom: 10px;
    color: gray;
`;

const ProductSize = styled.span`
    color: gray;
    margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;


  & svg {
    cursor: pointer;
    width: 16px;
  }
`;

const ProductAmount = styled.div`
  font-size: 18px;
  margin: 5px 10px;
  color: black;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px 40px;
  margin: 40px 0;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 18px;
  background-color: #7fbcf1;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const DeleteBtn = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    color: gray;
    cursor: pointer;

    &:hover {
        color: #333;
    }
`

const Cart = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <TitleContainer>
            <Title>Your bag</Title>
            <BackBtn><ArrowBack/>CONTINUE SHOPPING</BackBtn>
        </TitleContainer>
        
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Details>
                  <ProductName>
                    Flower pattern dress
                  </ProductName>
                  <ProductId>
                    93813718293
                  </ProductId>
                  <ProductColor><b>Color:</b> Beige</ProductColor>
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                  <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                </Details>
              </ProductDetail>
              <Right>
                <DeleteBtn><DeleteOutline/></DeleteBtn>
                <ProductPrice>5000p</ProductPrice>
              </Right>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://img.ostin.com/upload/mdm/media_content/resize/d54/265_357_1073/78690640299.jpg" />
                <Details>
                  <ProductName>
                    Sassy blue dress
                  </ProductName>
                  <ProductId>
                    93813718293
                  </ProductId>
                  <ProductColor><b>Color:</b> Blue</ProductColor>
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                  <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                </Details>
              </ProductDetail>
              <Right>
                <DeleteBtn><DeleteOutline/></DeleteBtn>
                <ProductPrice>3000p</ProductPrice>
              </Right>
            </Product>
          </Info>
        </Bottom>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> 8000p</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>0p</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>8000p</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;