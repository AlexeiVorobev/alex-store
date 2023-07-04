import React from "react";
import styled from "styled-components";

const LoadingText = styled.div`
  font-weight: bold;
  margin-top: 8px;
  color: #2e2e2e;
  display: inline-block;
  font-family: monospace;
  font-size: 16px;
  clip-path: inset(0 3ch 0 0);
  animation: loading 1s steps(4) infinite;

  @keyframes loading {
    to {
      clip-path: inset(0 -1ch 0 0);
    }
  }
`;

const Spinner = () => {
  return <div><LoadingText>Loading products...</LoadingText></div>;
};

export default Spinner;
