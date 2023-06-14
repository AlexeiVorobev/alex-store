import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media only screen and (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Products = ({ cat, filters, sort, max }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const favorite = useSelector(state => state.favorite.products)

  const getProducts = async () => {
    try {
      const res = await axios.get(
        cat === 'all'
        ? `http://localhost:5000/api/products`
        : `http://localhost:5000/api/products?category=${cat}`
        );
      setProducts(res.data);
    } catch (err) {}
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
      
      // Apply sorting
      if (sort === 'newest') {
        filteredProducts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      } else if (sort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (max && filteredProducts.length > 8) {
        filteredProducts = filteredProducts.slice(0, 8 )
      }
      
      setFilteredProducts(filteredProducts);
    };
    
    // Call the filter function
    filterProducts();
  }, [filters, products, sort]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product isFav={favorite.filter(product => product._id === item._id).length !== 0 ? true : false} item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
