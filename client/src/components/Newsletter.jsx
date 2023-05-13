import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 500px) {
    height: 30vh;
  }
`

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: none;
    padding-left: 8px;
    width: 100%;
`

const Button = styled.button`
    width: 60px;
    border: none;
    color: white;
    background-color: #222;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates on your favourite pieces</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <Send></Send>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter