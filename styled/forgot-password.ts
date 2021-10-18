import styled from "styled-components";

export const FogotPasswordWrap = styled.div`
display: flex;
width: 100%;
@media(max-width: ${({theme})=> theme.media.mobile}){
    flex-direction: column-reverse;
    margin-top: 5rem;
}
`
export const FogotPasswordImageWrap = styled.div`
width: 45%; 
min-height: 100vh; 
position: relative;
@media(max-width: ${({theme})=> theme.media.mobile}){
    width: 100%;
}
`
export const FogotPasswordWrapper = styled.div`
width: 55%;
@media(max-width: ${({theme})=> theme.media.mobile}){
    width: 100%;
}
`

export const FogotPasswordHolder = styled.div`
width: 350px;
margin: 100px 0 0 100px;
@media(max-width: ${({theme})=> theme.media.mobile}){
    margin: 2rem;
}
`