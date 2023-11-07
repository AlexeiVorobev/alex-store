import { Favorite } from "@material-ui/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../redux/favoriteSlice";
import { useDispatch } from "react-redux";

const Icon = styled.div`
    opacity: ${(props) => (props.isFav ? "1" : "0")};
    color: ${(props) => (props.isFav ? "#f44b4b" : "#aaa")};
    width: 35px;
    height: 35px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: 12px;
    bottom: 12px;
    transition: all 0.2s ease;
    font-size: 40px;

    &:hover {
        color: ${(props) => (props.isFav ? "#f66969" : "#333")};
        transform: scale(1.1);
    }

    @media only screen and (max-width: 500px) {
        opacity: 1;
    }
`;

const Title = styled.div`
    margin-bottom: 10px;
    color: gray;
`;

const Price = styled.div``;

const Info = styled.div`
    padding: 14px;
    position: relative;
`;

const Container = styled.div`
    margin: 12px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;

    &:hover ${Icon} {
        opacity: 1;
    }
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media only screen and (max-width: 500px) {
        width: 100%;
        padding: 0;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Product = ({ item, isFav }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleProductClick = (e) => {
        e.stopPropagation();
        if (!isFav) {
            dispatch(addFav(item));
        } else {
            dispatch(removeFav(item));
        }

        navigate(`/product/${item._id}`);
        window.scrollTo(0, 0);
    };
    const handleFavClick = e => {
      e.stopPropagation();
      if (!isFav) {
          dispatch(addFav(item));
      } else {
          dispatch(removeFav(item));
      }
    }

    return (
        <Container onClick={handleProductClick}>
            <ImageContainer>
                <Image src={item.img} />
            </ImageContainer>
            <Info>
                <Icon
                    isFav={isFav}
                    onClick={handleFavClick}
                >
                    <Favorite style={{ fontSize: "28px" }} />
                </Icon>
                <Title>{item.title || "Untitled"}</Title>
                <Price>{item.price + "₽" || "5000₽"}</Price>
            </Info>
        </Container>
    );
};

export default Product;
