import styled from "styled-components";

export const StyledNav = styled.nav`
    margin-left: 30px;
    
`
export const StyledLink = styled.a`
    width: 100px;
    color: red;
    margin: 1rem .5rem;
    text-transform: uppercase;
    font-size: 16px;
    font-family: ${({theme})=> theme.family.primary};
  color: ${(props) => (props.theme.colors.secondary)};

`