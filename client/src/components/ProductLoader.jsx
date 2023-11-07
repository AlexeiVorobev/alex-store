import React from "react";
import styled, { keyframes } from "styled-components";

const PlaceholderAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const Placeholder = styled.div`
  margin: 12px;
`

const PlaceholderImage = styled.div`
    width: 100%;
    height: 400px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${PlaceholderAnimation} 1.5s infinite;
    margin-bottom: 10px;
`;

const TitlePlaceholder = styled.div`
    width: 60%;
    height: 20px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
`;

const PricePlaceholder = styled.div`
    width: 40%;
    height: 16px;
    background-color: #f0f0f0;
`;

const ProductLoader = () => {
    return (
        <Placeholder>
            <PlaceholderImage />
            <TitlePlaceholder />
            <PricePlaceholder />
        </Placeholder>
    );
};

export default ProductLoader;
