import React from "react";
import styled from "styled-components";
import {
  ArrowDropDown,
  Close,
  FavoriteBorderOutlined,
  Menu,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.1s ease;

  &.white {
    background-color: white;
    border-bottom: 1px solid #eee;
  }

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const Language = styled.span`
  font-size: 14px;
  color: gray;
  font-weight: 500;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  align-items: center;

  &:hover {
    color: #222;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  border-bottom: 1px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 3px 6px;
  background-color: white;
  top: 71px;
  padding: 5px;
`;

const MenuItem = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 14px;f
  cursor: pointer;
  margin-left: 20px;

  & a {
    text-decoration: none;
    color: gray;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 15px;
  }

  &:hover, svg:hover {
    color: #222;
  }

  &.hide-on-mobile {
    @media only screen and (max-width: 500px) {
      display: none;
    }
  }
`;

const SearchField = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  width: 80%;
  max-width: 800px;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  outline: none;
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 50px;
  }
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

  @media only screen and (max-width: 500px) {
  }
`;

const SearchContainerWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const MenuBtn = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: gray;

  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const SearchBtn = styled.button`
  background-color: transparent;
  border: none;
  color: gray;
  cursor: pointer;

  &:hover {
    color: #222;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileClose = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 15px;
  border-bottom: 1px solid lightgray;

  & button {
    border: none;
    background-color: transparent;
    color: gray;
  }
`;

const MobileMenuItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid lightgray;
  color: gray;

  &.language {
    display: flex;
    justify-content: space-between;
  }

  & ${Language} {
    display: flex;
    margin-right: 10px;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: ${props => props.isActive ? 0 : "-100vw"};
  transition: all 0.5s ease;
  background-color: white;
  width: 100vw;
  height: 100vh;
  opacity: ${props => props.isActive ? 1 : 0};

  & a {
    text-decoration: none;
    color: gray;
  }
`;

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false)
  const mobileMenu = useRef();

  const handleClickSearch = () => {
    setShowSearch(!showSearch);
    header.classList.add("white");
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "searchWrapper") {
      setShowSearch(false);
      if (window.pageYOffset <= 0)
      header.classList.remove("white");
    }
  };

  return (
    <Container id="header" classList='white'>
      {showSearch && (
        <SearchContainerWrapper
          id="searchWrapper"
          onClick={(e) => handleClickOutside(e)}
        >
          <SearchContainer>
            <SearchField type="search" placeholder="Search..."></SearchField>
          </SearchContainer>
        </SearchContainerWrapper>
      )}
      <MobileMenu ref={mobileMenu} isActive={showMenu}>
        <MobileClose>
          <button onClick={() => setShowMenu(false)}>
            <Close />
          </button>
        </MobileClose>
        <SearchField type="search" placeholder="Search..."></SearchField>
        <Link to='/'>
          <MobileMenuItem>Home</MobileMenuItem>
        </Link>
        <Link to='/catalog'>
          <MobileMenuItem>Catalog</MobileMenuItem>
        </Link>
        <Link to='/my-account'>
          <MobileMenuItem>Login</MobileMenuItem>
        </Link>
        <MobileMenuItem className="language">
          <div>Language</div>
          <Language className="mobile-only">EN <ArrowDropDown/></Language>
        </MobileMenuItem>
      </MobileMenu>
      <Wrapper>
        <Left>
          <SearchBtn>
            <SearchOutlined onClick={handleClickSearch} />
          </SearchBtn>
          <MenuItem className="hide-on-mobile"><Link to='/catalog'>CATALOG</Link></MenuItem>
          <MenuBtn onClick={() => setShowMenu(true)}>
            <Menu />
          </MenuBtn>
          <Language>EN <ArrowDropDown/></Language>
        </Left>
        <Center>
          <Logo>
            <Link to='/'>ALEX</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem className="hide-on-mobile"><Link to='/my-account'>SIGN IN</Link></MenuItem>
          <MenuItem>
            <Link to='/favorite'>
              <FavoriteBorderOutlined color="action" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/cart'>
              <Badge badgeContent={3} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

window.onscroll = () => {
  const header = document.getElementById('header')
  if (window.pageYOffset > 0) {
    header.classList.add("white");
  } else {
    header.classList.remove("white");
  }
}