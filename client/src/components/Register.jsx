import styled from "styled-components";
import { Button, Form } from "./Login";

const Container = styled.div`
    & p {
        margin-top: 20px;
        color: #555;
    }

    & a {
        text-decoration: none;
        color: gray;
    }
`;

const Register = () => {
  return (
    <Container>
      <Form>
        <input type="email" name="" id="" placeholder="Email *" />
        <input type="password" placeholder="Password *" />
      </Form>
      <Button>Sign up</Button>
      <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="">agreement.</a></p>
    </Container>
  );
};

export default Register;
