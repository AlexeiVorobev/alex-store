import styled from "styled-components";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  margin: 20px;
  margin-bottom: 0;
  font-weight: 600;
`;

const Favorite = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title>Favorite</Title>
        <Products />
      </Container>
      <Footer/>
    </div>
  );
};

export default Favorite;
