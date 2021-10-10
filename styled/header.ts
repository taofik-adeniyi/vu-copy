import styled from "styled-components";

export const StyledNav = styled.nav`
    margin-left: 30px;
    
`

interface LinkType {
  margin?: string;
  transform?: string;
}

export const StyledLink = styled.a<LinkType>`
    color: red;
    margin: ${({margin})=> margin ? margin : '1rem .5rem;'};
    text-transform: ${({transform})=> transform ? transform : 'uppercase'};
    font-size: 16px;
    font-family: ${({theme})=> theme.family.primary};
  color: ${(props) => (props.theme.colors.secondary)};

`

export const PlainDiv = styled.div<LinkType>`
    color: red;
    margin: ${({margin})=> margin ? margin : '1rem .5rem;'};
    text-transform: ${({transform})=> transform ? transform : 'uppercase'};
    font-size: 16px;
    font-family: ${({theme})=> theme.family.primary};
  color: ${(props) => (props.theme.colors.secondary)};
`


export const StyledMenuLink = styled.a<LinkType>`
display: flex;
align-items: center;
gap: 10px;
padding: 0 10px;
    margin: ${({margin})=> margin ? margin : '1rem .5rem;'};
    text-transform: ${({transform})=> transform ? transform : 'uppercase'};
    font-size: 14px;
    font-family: ${({theme})=> theme.family.primary};
  color: ${(props) => (props.theme.colors.secondary)};

`