import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Favorite, ShoppingCart, CheckCircle } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { addProduct, removeProduct } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

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
  border: 1px solid lightgray;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;

  &.active {
    border: 1px solid #333;
  }
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
  user-select: none;

  &.active {
    border: 1px solid #333;
    background-color: #eee;
  }
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
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [size, setSize] = useState("");
  const [color, setColor] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get("/products/find/" + id);
      setProduct(res.data);
    };
    getProduct();
    setIsInCart(cart.products.filter(product => product._id === id).length != 0 ? true : false)
  }, [id]);

  useEffect(() => {
    if (product) {
      setSize(product.size[0]);
      setColor(product.color[0])
    }
  }, [product]);

  const handleClickCart = () => {
    if (!isInCart) {
      dispatch(addProduct({...product, quantity: 1, color, size }));
    } else {
      dispatch(removeProduct(product._id))
    }
    setIsInCart(!isInCart);
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>

        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.desc}</Desc>
          <Price>1000p</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <div className="panel">
                {product?.color.map((c) => (
                  <FilterColor className={"active"} color={c} key={c} />
                ))}
              </div>
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <div className="panel">
                {product?.size.map((s) => (
                  <FilterSize
                    className={size === s && "active"}
                    onClick={() => setSize(s)}
                    key={s}
                  >
                    {s}
                  </FilterSize>
                ))}
              </div>
            </Filter>
          </FilterContainer>
          <AddContainer onClick={handleClickCart}>
            {isInCart ? (
              <AddButton>
                <CheckCircle />
                IN CART
              </AddButton>
            ) : (
              <AddButton>
                <ShoppingCart />
                ADD TO CART
              </AddButton>
            )}
            <LikeButton>
              <Favorite style={{ fontSize: "30px" }} />
            </LikeButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductPage;
