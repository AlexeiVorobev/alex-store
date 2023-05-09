import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Icon = styled.div`
  opacity: 0;
  color: gray;
  width: 40px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
  transition: all 0.2s ease;
  font-size: 40px;

  &:hover {
    color: #222;
    transform: scale(1.1);
  }
`;

const Title = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    color: gray;
`;

const Price = styled.div``;

const Info = styled.div`
    padding: 20px;
`;

const Container = styled.div`
  margin: 8px;
  min-width: 280px;
  border: 1px solid #ccc;
  overflow: hidden;
  max-width: 280px;
  cursor: pointer;

  &:hover ${Icon} {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: 350px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.img} />
        <Icon>
          <FavoriteBorderOutlined style={{fontSize: "30px"}} />
        </Icon>
      </ImageContainer>
      <Info>
        <Title>{item.name ? item.name : "Untitled"}</Title>
        <Price>1000 ₽</Price>
      </Info>
    </Container>
  );
};

export default Product;
