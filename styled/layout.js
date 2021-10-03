import styled from 'styled-components'


export const StyledHeader = styled.header`
margin: 0;
padding: 1rem 5rem;
display: flex;
justify-content: space-between;
align-items: center;
    width: 100%;
    height: fit-content;
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