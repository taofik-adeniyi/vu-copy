import styled from 'styled-components'


interface HeaderType {
    border?: boolean;
    hideheader?: boolean;
}
export const StyledHeader = styled.header<HeaderType>`
    margin: 0;
    padding: 1rem 5%;
    display: ${({hideheader})=> hideheader ? 'none': 'flex'};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
    border-bottom: ${({border})=> border ? '1px solid #aaaaaa' : ''};
    @media (max-width: ${({theme})=> theme.media.mobile}){
        display: none;
    }
  
`

export const StyledMobileHeder = styled.div`
    display: none;
    @media (max-width: ${({theme})=> theme.media.mobile}){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: transparent;
        position: fixed;
        z-index: 20;
        max-height: 5rem;
    }
`
export const StyledFooter = styled.footer`
padding: 50px 0 0 0;
color: white;
    width: 100%;
    min-height: fit-content;
    bottom: 0;
    font-family: Overlock;

    strong {
        font-size: 20px;
        text-transform: capitalize;
    }
    ul {
        list-style-type: none;
        margin: 20px 0;
        padding: 0;
        li {
            margin: .6rem 0;
            font-size: 14px;
        }
    }
`
export const FooterColWrapper = styled.div`
width: 90%; 
display: flex; 
justify-content: space-between; 
margin: 0 auto;
@media (max-width: ${({theme})=> theme.media.mobile}){
    flex-direction: column;
}
`
export const FooterColumnOne = styled.div`
    width: 25%;
    @media (max-width: ${({theme})=> theme.media.mobile}){
        width: 100%;
        > p {
            padding: 0;
        }
    }
`
export const FooterColumnTwo = styled.div`
display: flex; 
width: 70%;
@media (max-width: ${({theme})=> theme.media.mobile}){
    flex-direction: column;
    width: 100%;
}
`
export const FCols = styled.div`
    width: 100%;
    @media (max-width: ${({theme})=> theme.media.mobile}){
        width: 100%;
        margin-bottom: 1.8rem;
    }
`