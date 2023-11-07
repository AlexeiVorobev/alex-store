import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import Spinner from "./Spinner";

const BASE_URL = "https://alex-store-api.onrender.com/api/";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  /* @media only screen and (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  } */
`;

const SpinnerContainer = styled.div`
  
`;

const Products = ({ cat, filters, sort, max, gender }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const favorite = useSelector((state) => state.favorite.products);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        cat === "all"
          ? BASE_URL + "products"
          : `${BASE_URL}products?category=${cat}`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [cat]);

  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = [...products];

      // Apply size filter
      if (filters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.sizes.some((size) => product.size.includes(size))
        );
      }

      // Apply color filter
      if (filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.colors.some((color) => product.color.includes(color))
        );
      }

      // Apply gender filter
      if (gender) {
        filteredProducts = filteredProducts.filter((product) =>
          product.categories.includes(gender.toLowerCase())
        );
      }

      // Apply sorting
      if (sort === "newest") {
        182;
        filteredProducts.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
      } else if (sort === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sort === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (max && filteredProducts.length > 8) {
        filteredProducts = filteredProducts.slice(0, 8);
      }

      setFilteredProducts(filteredProducts);
    };

    // Call the filter function
    filterProducts();
  }, [filters, products, sort, gender]);

  return (
    <Container>
      {loading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        filteredProducts.map((item) => (
          <Product
            isFav={
              favorite.filter((product) => product._id === item._id).length !==
              0
                ? true
                : false
            }
            item={item}
            key={item._id}
          />
        ))
      )}
    </Container>
  );
};

export default Products;
