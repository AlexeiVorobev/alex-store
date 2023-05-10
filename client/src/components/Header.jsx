import React from "react";
import styled from "styled-components";
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const MenuItem = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  

  & a {
    font-weight: bold;
  font-family: "Italiana";
  cursor: pointer;
  color: black;
  text-decoration: none;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><a href="">ALEX</a></Logo>
        </Center>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <FavoriteBorderOutlined color="action" />
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
