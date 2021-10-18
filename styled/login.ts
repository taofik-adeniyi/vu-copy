import styled from "styled-components";

export const LogInWrapper = styled.div`
display: flex;
@media (max-width: ${({theme})=> theme.media.mobile}){
    flex-direction: column-reverse;
    margin-top: 5rem;
}
`
export const LogInImageHolder = styled.div`
width: 45%;
min-height: 100vh;
position: relative;
@media (max-width: ${({theme})=> theme.media.mobile}){
  width: 100%;
}
`
export const LogInBox = styled.div`
width: 55%; 
min-height: 100vh;
> div {
    margin: 100px 0 0 100px; color: #F4F4F4; font-family: Overlock
}
@media (max-width: ${({theme})=> theme.media.mobile}){
    width: 100%;
    min-height: fit-content;
    > div {
        margin: 2rem;
    }
}
`