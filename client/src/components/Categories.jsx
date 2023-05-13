import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media only screen and (max-width: 500px) {
      flex-direction: column;
      padding: 0;
      margin-top: 8px;
}
      
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
}
