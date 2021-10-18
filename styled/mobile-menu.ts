import styled from "styled-components";

export const MobileMenuWrapper = styled.div`
width: 95%;
padding: 1.5rem;
height: 100%;
position: fixed;
background: #EFEFEF;
z-index: 30;
`

export const MobileHead = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;
font-size: 20px;
font-family: ${({theme})=> theme.family.primary};
`
export const MobileSearchBar = styled.input.attrs({
    type: 'text'
})`
outline: none; 
background: transparent;
border: none;
width: 100%; 
padding: 1rem 1.2rem;
font-family: ${({theme})=> theme.family.primary};
font-size: 18px;
`
export const MobileTitle = styled.div`
font-family: ${({theme})=> theme.family.primary};
font-size: 18px;
font-weight: bold;
border-bottom: 1px solid #575757;
margin: 1rem 0;
padding: .7rem 0;
`

type MobType = {
    txtcolor?: string;
}
export const MobileUl = styled.ul<MobType>`
margin: 1rem 0;
padding: 0;
list-style: none;
font-family: ${({theme})=> theme.family.secondary};

    li {
        margin: 1.2rem 0;
        display: flex; 
        justify-content: space-between;
        color: ${({txtcolor})=> txtcolor ? txtcolor : 'none'};

        > div {
            display: flex;
            gap: .3rem;
            align-items: center;
        }
    }
`