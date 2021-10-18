import styled from "styled-components";

export const NewUser = styled.div`
display: flex;
@media (max-width: ${({theme})=> theme.media.mobile}){
    flex-direction: column;
}
`
export const NewUserFormWrapper = styled.div`
    width: 55%;
    min-height: 100vh;
    @media (max-width: ${({theme})=> theme.media.mobile}){
        width: 100%;
    }
`
export const NewUserFormHolder = styled.div`
width: 350px;
margin: 60px 0 0 100px; 
font-family: ${({theme})=>theme.family.primary};
@media (max-width: ${({theme})=> theme.media.mobile}){
    margin: 2rem;
}
`
export const NewUserImageWrap = styled.div`
width: 45%; 
min-height: 100vh; 
position: relative;
@media (max-width: ${({theme})=> theme.media.mobile}){
    width: 100%;
    min-height: 650px;
}
`