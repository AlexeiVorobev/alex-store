import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Title = styled.h1`
  font-weight: 500;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 0px;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  @media only screen and (max-width: 500px) {
  }
`;

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Wrapper>
        <Categories />
        <Title>New Products</Title>
        <Products
          cat="all"
          filters={{
            sizes: [],
            colors: [],
          }}
          sort="newest"
          max="8"
        />
        <Newsletter />
      </Wrapper>
      <Footer></Footer>
    </div>
  );
}
