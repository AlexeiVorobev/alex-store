import { Add, ArrowBack, DeleteOutline, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import {userRequest} from '../requestMethods'
import {useNavigate} from 'react-router-dom'
import { addProduct, removeProduct, updateQuantity } from "../redux/cartSlice";

const Container = styled.div``;
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
`;

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

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 180px;
  height: 250px;
  object-fit: cover;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    width: 70px;
    height: 70px;
  }
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
  cursor: pointer;
`;

const ProductId = styled.span`
  color: #aaa;
  font-size: 14px;
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

  @media only screen and (max-width: 500px) {
    flex-direction: row-reverse;
    padding: 0 10px;
  }
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

  @media only screen and (max-width: 500px) {
    font-size: 24px;
  }
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
`;

const Cart = () => {
  const KEY = import.meta.env.VITE_STRIPE_KEY;
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try{
        const res = await userRequest('/checkout/payment', {
          tokenId: stripeId,
          amount: cart.total * 100,
        })
        navigate('/success', { state: { data: res.data } });
      } catch {}
      makeRequest()
    }
  }, [stripeToken, cart.total, history])

  const onProductClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <TitleContainer>
          <Title>Your bag</Title>
          <BackBtn onClick={() => navigate(-1)}>
            <ArrowBack />
            CONTINUE SHOPPING
          </BackBtn>
        </TitleContainer>

        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image onClick={() => onProductClick(product._id)} src={product.img} />
                  <Details>
                    <ProductName onClick={() => onProductClick(product._id)}>{product.title}</ProductName>
                    <ProductId>{product._id}</ProductId>
                    <ProductColor>
                      <b>Color:</b> {product.color}
                    </ProductColor>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                    <ProductAmountContainer>
                      <Remove onClick={() => product.quantity > 0 && dispatch(updateQuantity({id: product._id, quantity: product.quantity -1 }))} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add onClick={() => dispatch(updateQuantity({id: product._id, quantity: product.quantity +1 }))} />
                    </ProductAmountContainer>
                  </Details>
                </ProductDetail>
                <Right>
                  <DeleteBtn onClick={() =>  dispatch(removeProduct(product._id))}>
                    <DeleteOutline />
                  </DeleteBtn>
                  <ProductPrice>
                    {product.price * product.quantity}p.
                  </ProductPrice>
                </Right>
              </Product>
            ))}
            <Hr />
          </Info>
        </Bottom>
        <Summary>
          <SummaryTitle>Order summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Discount</SummaryItemText>
            <SummaryItemPrice>0p</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
          </SummaryItem>
          <StripeCheckout
            name="Alex Fashion"
            billingAddress
            shippingAddress
            description={`Your total is ${cart.total}p`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <Button>CHECKOUT NOW</Button>
          </StripeCheckout>
        </Summary>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
