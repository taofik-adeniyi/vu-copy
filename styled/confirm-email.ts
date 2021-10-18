import styled from "styled-components";

export const ConfirmEmailWrap = styled.div`
display: flex;
@media (max-width: ${({theme})=> theme.media.mobile}){
    flex-direction: column;
    margin-top: 5rem;
}
`
export const Confirm = styled.div`
width: 55%;
min-height: 100vh;

@media (max-width: ${({theme})=> theme.media.mobile}){
    width: 100%;
    padding: 0 0 5rem 0;
    min-height: fit-content;
    min-height: 450px;
}
`
export const ConfirmSubDiv = styled.div`
margin: 100px 50px 0 100px;
@media (max-width: ${({theme})=> theme.media.mobile}){
    margin: 2rem;
}
`

export const ConfirmImageWrap = styled.div`
width: 45%; 
background-color: #C4C4C4; 
min-height: 100vh;
position: relative;
@media (max-width: ${({theme})=> theme.media.mobile}){
    width: 100%;
    min-height: 350px;
}
`