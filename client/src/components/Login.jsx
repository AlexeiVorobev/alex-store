import styled from "styled-components"

const Container = styled.div`
    width: 100%;
     & a {
        color: gray;
        text-decoration: none;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 30px;
     }
`

export const Form = styled.form`
    
    & input {
        width: 100%;
        padding: 10px 5px;
        font-size: 16px;
        color: gray;
        border: none;
        border-bottom: 1px solid lightgray;
        margin-bottom: 28px;
        transition: all 0.2s ease;
    }

    & input:hover {
        border-color: #333;
    }

    & input:focus {
        outline: none;
    }
`

export const Button = styled.button`
    width: 100%;
    background-color: white;
    border: 2px solid #333;
    padding: 18px 5px;
    font-size: large;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Form>
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" placeholder="Password" />
        </Form>
        <Button>Sign in</Button>
        <a href="">I forgot my password</a>
    </Container>
  )
}

export default Login