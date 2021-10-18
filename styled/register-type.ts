import styled from "styled-components";

export const StyledRegisterType = styled.div`
width: 100%; 
height: 100%; 
color: white;
@media (max-width: ${({theme})=> theme.media.mobile}){
margin-top: 5rem;
}
`

export const RegisterTypeFlex = styled.div`
    display: flex;
    font-family: Avenir;
    width: 100%;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: ${({theme})=> theme.media.mobile}){
    padding: 2rem 0 20rem 0;
    flex-direction: column;
    align-items: center;
}
`
export const Create = styled.div`
    color: #00F0FE;
    padding: 50px 100px 0 100px;
    font-family: ${({theme})=>theme.family.primary};
    font-size: 36px;
    
    @media (max-width: ${({theme})=> theme.media.mobile}){
    padding: 2rem 18rem 2rem 2rem;
}
`
export const Choose = styled.div`
    text-align: center;
    font-family: ${({theme})=>theme.family.primary};
    padding: 0 0 20px 0;
    font-size: 24px;
    
    @media (max-width: ${({theme})=> theme.media.mobile}){
    padding: 0 0 2rem 2rem;
    text-align: start;
    }
`

export const TypeCreator = styled.div`
min-height: 350px;
padding: 2rem;
text-align: center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
width: 25%;
border-radius: 10px;
background-color: white;

@media (max-width: ${({theme})=> theme.media.mobile}){
    width: 85%;
    }
`