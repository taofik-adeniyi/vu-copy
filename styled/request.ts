import styled from "styled-components";

interface InputContainerType {
    border?: string;
}

export const InputContainer = styled.div<InputContainerType>`
border-bottom: ${({border})=> border ? border : '0.1px solid #9F9F9F'};
padding: 20px 20px 30px 20px;
margin-bottom: 20px;
`
export const InputTitle = styled.div`

font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 34px;
`

export const StyledLabel = styled.label`
font-style: normal;
font-weight: bold;
font-size: 27px;
line-height: 26px;
color: #3F3F3F;
font-family: Open Sans;
`

export const StyledGroup = styled.div`
display: flex;
border: 0.5px solid #000000;
box-sizing: border-box;
border-radius: 5px;
width: fit-content;

div {
    color: red;
    min-width: 120px;
    text-align: center;
    padding: .8rem 2rem;
    border-right: 1px solid blue;
}
`

export const StyledRow = styled.div`
    width: 100%;
    display: flex;
    `
    
interface ColOneType {
    radius?: string;
}
export const StyledRowColumnOne = styled.div<ColOneType>`
    width: 70%;
    border-radius: ${({radius})=> radius ? '' : '10px 10px 0 0'};
    background: #F7F7F7;
`
export const StyledRowColumnTwo = styled.div`
    width: 30%;
    padding: 0 10px;

`