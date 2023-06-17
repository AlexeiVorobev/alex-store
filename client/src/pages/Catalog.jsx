import styled from "styled-components";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

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
  text-transform: capitalize;
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

  & a {
    text-decoration: none;
  }

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
`;

const Catalog = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[3];
  const gender = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({
    sizes: [],
    colors: [],
  });
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const { name, checked } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: checked
        ? [...filters[name], e.target.value]
        : filters[name].filter((item) => item !== e.target.value),
    };
    setFilters(updatedFilters);
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>{cat}</Title>
        <Main>
          <Categories>
            {gender === "women" ? (
              <div>
                <Link to="/catalog/women/all">
                  <CategoryItem>All</CategoryItem>
                </Link>
                <Link to="/catalog/women/tops">
                  <CategoryItem>Tops/T-shirts</CategoryItem>
                </Link>
                <Link to="/catalog/women/shirts">
                  <CategoryItem>Shirts</CategoryItem>
                </Link>
                <Link to="/catalog/women/pants">
                  <CategoryItem>Pants/shorts</CategoryItem>
                </Link>
                <Link to="/catalog/women/dresses">
                  <CategoryItem>Dresses</CategoryItem>
                </Link>
                <Link to="/catalog/women/outerwear">
                  <CategoryItem>Outerwear</CategoryItem>
                </Link>
                <Link to="/catalog/women/suits">
                  <CategoryItem>Suits</CategoryItem>
                </Link>
                <Link to="/catalog/women/loungewear">
                  <CategoryItem>Loungewear</CategoryItem>
                </Link>
                <Link to="/catalog/women/accessories">
                  <CategoryItem>Accessories</CategoryItem>
                </Link>
              </div>
            ) : (
              <div>
                 <Link to="/catalog/men/all">
                  <CategoryItem>All</CategoryItem>
                </Link>
                <Link to="/catalog/men/tshirts">
                  <CategoryItem>T-shirts</CategoryItem>
                </Link>
                <Link to="/catalog/men/shirts">
                  <CategoryItem>Shirts</CategoryItem>
                </Link>
                <Link to="/catalog/men/pants">
                  <CategoryItem>Pants/shorts</CategoryItem>
                </Link>
                <Link to="/catalog/men/outerwear">
                  <CategoryItem>Outerwear</CategoryItem>
                </Link>
                <Link to="/catalog/men/suits">
                  <CategoryItem>Suits</CategoryItem>
                </Link>
                <Link to="/catalog/men/loungewear">
                  <CategoryItem>Loungewear</CategoryItem>
                </Link>
                <Link to="/catalog/men/accessories">
                  <CategoryItem>Accessories</CategoryItem>
                </Link>
              </div>
            )}

            <h4>Size</h4>
            <CheckboxGroup>
              <label htmlFor="">
                <input
                  name="sizes"
                  value="XS"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                XS
              </label>
              <label htmlFor="">
                <input
                  name="sizes"
                  value="S"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                S
              </label>
              <label htmlFor="">
                <input
                  name="sizes"
                  value="M"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                M
              </label>
              <label htmlFor="">
                <input
                  name="sizes"
                  value="L"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                L
              </label>
            </CheckboxGroup>

            <h4>Color</h4>
            <CheckboxGroup>
              <label htmlFor="">
                <input
                  name="colors"
                  value="beige"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                Beige
              </label>
              <label htmlFor="">
                <input
                  name="colors"
                  value="blue"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                Blue
              </label>
              <label htmlFor="">
                <input
                  name="colors"
                  value="red"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                Red
              </label>
              <label htmlFor="">
                <input
                  name="colors"
                  value="milky"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                Milky
              </label>
              <label htmlFor="">
                <input
                  name="colors"
                  value="pink"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                Pink
              </label>
              <label htmlFor="">
                <input
                  name="colors"
                  value="black"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                Black
              </label>
              <label htmlFor="">
                <input
                  name="colors"
                  value="white"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                White
              </label>
              <label htmlFor="">
                <input
                  name="colors"
                  value="gray"
                  onChange={handleFilters}
                  type="checkbox"
                  id=""
                />
                Gray
              </label>
            </CheckboxGroup>
          </Categories>
          <ProductList>
            <FilterContainer>
              <Filter>
                <FilterText>Sort:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                  <Option value="newest">Newest</Option>
                  <Option value="price-asc">Price (asc)</Option>
                  <Option value="price-desc">Price (desc)</Option>
                </Select>
              </Filter>
            </FilterContainer>
            <Products gender={gender} cat={cat} filters={filters} sort={sort} />
          </ProductList>
        </Main>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Catalog;
