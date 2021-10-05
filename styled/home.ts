import styled from "styled-components";

export const Box = styled.div`
background: #C4C4C4;
width: 230px;
height: 218px;
`

type ReviewProps = {
    width?: string;
    style?: any;
}
export const ReviewCard = styled.div<ReviewProps>`
display: flex;
height: 180px;
justify-content: center;
align-items: center;
padding: 20px 50px;
background: #303030;
box-shadow: 0px 0px 5px 1px rgba(31, 31, 31, 0.93);
min-width: ${(props) => props.width ? props.width : '450px'};
color: #fff;
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
` 

export const Reel = styled.div`
    width: 55%;
    min-height: 300px;
    background: gray;
    position: relative;
`