import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import Login from "../components/Login";
import Register from "../components/Register";

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 340px;
  margin: 0 auto;
  margin-top: 300px;
  margin-bottom: 200px;
  padding: 0 auto;

`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    & button {
        font-size: 22px;
        padding: 5px 10px;
        background-color: #fff;
        color: gray;
        border: none;
        cursor: pointer;
        border-bottom: 2px solid transparent;
    }

    & button:hover {
        border-color: gray;
    }

    & button.active {
        border-bottom: 2px solid #333;
        color: #333;
    }
`

const MyAccount = () => {
  const [state, setState] = useState("login");

  const handleBtnClick = (button) => {
    if (button === "login") {
        setState("login")
    } else {
        setState("register")
    }
  }

  return (
    <Content>
      <Header />
      <Container>
        <Buttons>
            <button onClick={() => handleBtnClick('login')} className={state === "login" ? 'active' : ''} type="button">Login</button>
            <button onClick={() => handleBtnClick('register')} type="button" className={state === "register" ? 'active' : ''}>Create account</button>
        </Buttons>
        {state === "login" ? <Login /> : <Register />}
      </Container>
      <Footer />
    </Content>
  );
};

export default MyAccount;
