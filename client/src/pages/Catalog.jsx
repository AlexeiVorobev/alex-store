import styled from "styled-components";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Container = styled.div`
  border-top: 1px solid gray;
  padding-top: 70px;
`;

const Title = styled.h1`
  margin: 20px;
  font-weight: 600;
  margin-top: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const Filter = styled.div`
  margin: 0 20px;
  margin-bottom: 0;
  margin-left: 20px;
  margin-top: 20px;

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 4px;
  margin-right: 20px;
`;

const Option = styled.option`
  line-height: 30px;
`;

const ProductList = styled.div`
  flex: 4;
`;

const Categories = styled.div`
  flex: 1;
  padding-right: 50px;

  & h4 {
    margin-top: 20px;
    margin-bottom: 5px;
    color: gray;
  }

  & label {
    display: flex;
    margin-left: 10px;
    align-items: center;
    gap: 5px;
    margin-bottom: 2px;
    color: gray;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #cccc;
  cursor: pointer;
  color: gray;
  /* text-transform: uppercase; */
  font-weight: 400;
  font-size: 16px;

  &:hover {
    background-color: aliceblue;
  }
`;

const Main = styled.div`
  display: flex;
  margin: 0 20px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const CheckboxGroup = styled.div`
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 4px;
    margin-bottom: 20px;
  }
`

const Catalog = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Catalog</Title>
        <Main>
          <Categories>
            <CategoryItem>All</CategoryItem>
            <CategoryItem>New</CategoryItem>
            <CategoryItem>Sale</CategoryItem>
            <CategoryItem>Tops/T-shirts</CategoryItem>
            <CategoryItem>Shirts</CategoryItem>
            <CategoryItem>Pants/shorts</CategoryItem>
            <CategoryItem>Dresses</CategoryItem>
            <CategoryItem>Jackets</CategoryItem>
            <CategoryItem>Suits</CategoryItem>
            <CategoryItem>Loungewear</CategoryItem>
            <CategoryItem>Accessories</CategoryItem>

            <h4>Size</h4>
            <CheckboxGroup>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                XS
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />S
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />M
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />L
              </label>
            </CheckboxGroup>

            <h4>Color</h4>
            <CheckboxGroup>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />Beige
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />Blue
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />Red
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />Milky
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />Pink
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />Peach
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />White
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />Gray
              </label>
            </CheckboxGroup>
          </Categories>
          <ProductList>
            <FilterContainer>
              <Filter>
                <FilterText>Sort:</FilterText>
                <Select>
                  <Option>Newest</Option>
                  <Option>Price (asc)</Option>
                  <Option>Price (desc)</Option>
                </Select>
              </Filter>
            </FilterContainer>
            <Products />
          </ProductList>
        </Main>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Catalog;
