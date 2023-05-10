import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Products from "../components/Products";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const H1 = styled.h1`

  font-weight: 500;
  margin-top: 20px;
  margin-left: 40px;
`

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Wrapper>
        <Categories />
        <H1>Popular Products</H1>
        <Products />
        <Newsletter />
      </Wrapper>
      <Footer></Footer>
    </div>
  );
}