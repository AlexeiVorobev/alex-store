import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"

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

const Error = styled.span`
    color: red;
    font-size: 14px;
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
    background-color: #7fbcf1;
    color: white;
    text-transform: upper;
    padding: 18px 5px;
    font-size: large;
    cursor: pointer;
    border: none;

    &:disabled {
        color: gray;
        cursor: not-allowed;
    }
`

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector((state) => state.user)

    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch, {email, password})
    }
    
  return (
    <Container>
        <Form>
            <input type="email" name="" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form>
        <Button onClick={handleLogin} disabled={isFetching }>Sign in</Button>
       {error && <Error>Something went wrong...</Error>}
        <a href="">I forgot my password</a>
    </Container>
  )
}

export default Login