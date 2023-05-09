import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div``;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const ProductPage = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Dresses</Title>
        <FilterContainer>
          
        </FilterContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
