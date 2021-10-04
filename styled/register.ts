import styled from "styled-components";


export const Input = styled.input`
width: 350px;
background: #F7F7F7;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 10px;
outline: none;
colro: #575757;
font-size: 14px;
font-family: ${({theme})=> theme.family.secondary};
`

export const StyledInputText = styled(Input).attrs({
    type: 'text'
})`
${Input}
display: flex;
padding: 1rem 1.2rem;
`

export const StyledInputEmail = styled(Input).attrs({
    type: 'email'
})`
${Input}
display: flex;
padding: 1rem 1.2rem;
`

export const StyledInputPassword = styled(Input).attrs({
    type: 'password'
})`
${Input}
display: flex;
padding: 1rem 1.2rem;
height: 50px;

`
interface PasswordBar {
    background?: string;
}

export const PassWordStrenght = styled.div<PasswordBar>`
    display: flex;
    height: 4px;
    border-radius: 10px;
    min-width: 16%;
    background: ${({background})=> background ? background : '#F7F7F7'}
`