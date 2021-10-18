import styled from "styled-components";
import mycamerastand from '../assets/images/camerastanddark.png'

export const HomeTagWrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
padding: 50px 0 0 0;

@media (max-width: ${({theme})=> theme.media.mobile}){
    padding: 50px 0 0 0;
    }

`


type ReviewProps = {
    width?: string;
    style?: any;
}

export const TheBoxWrapper = styled.div`
    background-color: #272727;
          width: 100%;
          text-align: center;
          margin: 0 auto;
          height: fit-content;
          padding: 50px 0;

          h2 {
            font-family: Overlock;
            color: white;
            padding: 0 0 3rem 0;
            margin: 0;
            @media (max-width: ${({theme})=> theme.media.mobile}){
                padding: 1rem 3rem 3rem 3rem;
            }
          }
`
export const TheBoxSubWrapper = styled.div`
display: flex;
gap: 20px;
justify-content: center;
@media (max-width: ${({theme})=> theme.media.mobile}){
    flex-direction: column;
    align-items: center;
}
`

export const Box = styled.div`
background: #C4C4C4;
width: 230px;
height: 218px;
@media (max-width: ${({theme})=> theme.media.mobile}){
    width: 70%;
}
`

export const ReviewWrapper = styled.div`
display: flex;
/* flex-wrap: wrap; */
width: 70%;
margin: 50px auto 0 auto; 
justify-content: center;
gap: 30px;
@media (max-width: ${({theme})=> theme.media.mobile}){
        flex-direction: column;
        width: 90%;
    }
`
export const ReviewCard = styled.div<ReviewProps>`
display: flex;
height: 180px;
justify-content: center;
align-items: center;
padding: 20px 50px;
background: #303030;
box-shadow: 0px 0px 5px 1px rgba(31, 31, 31, 0.93);
min-width: ${(props) => props.width ? props.width : '30%'};
color: #fff;
@media (max-width: ${({theme})=> theme.media.mobile}){
        width: 100%;
        flex-direction: column;
        min-height: 300px;
        background: #303030;
        box-shadow: 0px 0px 5px 1px rgba(31, 31, 31, 0.93);
        border-radius: 13px;
    }
`

export const ReviewCardImage = styled.div`
width: 102px;
height: 102px;
display: flex;
border-radius: 50%;
background: ${({theme}) => theme.colors.primary};
margin-right: 20px;
`

export const ReviewCardText = styled.div`
display: flex;
width: 280px;
line-height: 1.4rem;
@media (max-width: ${({theme})=> theme.media.mobile}){
    margin-top: 2rem;
    text-align: center;
}
` 

export const ReelWrapper = styled.div`
padding: 50px 0; 
width: 100%; 
color: white;

@media (max-width: ${({theme})=> theme.media.mobile}){
    position: relative;
    
}
`

export const Comments = styled.div`
width: 100%;
font-family: Overlock;
min-height: 400px;
padding: 50px 0 150px 0;
background-color: #EFEFEF;
display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
@media (max-width: ${({theme})=> theme.media.mobile}){
    /* padding: relative; */
    padding: 1rem 1rem 5rem 1rem;
    background: #E1E1E1;
}
`

export const Reel = styled.div`
    width: 55%;
    min-height: 300px;
    background: gray;
    position: relative;
`

export const HomeContentBox = styled.div`
width: 100%; 
display: flex;
  background-color: rgba(0, 0, 0, 0.62);
  background: url('./camerastanddark.png') no-repeat;
  background-color: lightgray;
  @media (max-width: ${({theme})=> theme.media.mobile}){
      flex-direction: column;
      min-height: 700px;
    }
    `
export const FirstSection = styled.div`
    width: 45%; 
    height: 100%; 
    padding: 250px 0 50px 80px;
    @media (max-width: ${({theme})=> theme.media.mobile}){
        margin-top: 5rem;
        width: 100%;
        padding: 2rem;
    }
`

export const EmptyBox = styled.div`
width: 55%;
padding: 5em;
@media (max-width: ${({theme})=> theme.media.mobile}){
        display: none;
    }

`
export const JoinBox = styled.div`
    background-color: #fff;
    font-family: ${({theme})=> theme.family.primary};
    display: flex;

    @media (max-width: ${({theme})=> theme.media.mobile}){
        flex-direction: column;
    }
`
export const JoinBoxOne = styled.div`
width: 40%;
            margin: 30px 0 0 0;
            padding: 20px 0 0 80px;
            @media (max-width: ${({theme})=> theme.media.mobile}){
        width: 100%;
        padding: 2rem 7rem 2rem 2rem;
    }
` 
export const JoinBoxImage = styled.div`
width: 60%; margin: 60px 0; text-align: right;
@media (max-width: ${({theme})=> theme.media.mobile}){
        width: 100%;
        margin: 3.5rem 0 0 0;
    }
`