import styled from "styled-components";

interface ImageType {
    width?: string;
    height?: string;
    rounded?: string;
    onClick?: any;
}
export const StyledImageContainer = styled.div<ImageType>`
    position: relative;
    width: ${({width})=> width ? width : '200px'};
    height: ${({height})=> height ? height : '200px'};
    border-radius: ${({rounded})=> rounded ? rounded : '50%'};
    cursor: pointer;
    
    
    
`

export const StyledDisplayPicture = styled.div<ImageType>`
    position: relative;
    width: ${({width})=> width ? width : '200px'};
    height: ${({height})=> height ? height : '200px'};
    
    div {
        img {
            border-radius: ${({rounded})=> rounded ? rounded : ''}
        }
    }
    
`

export const RequestShoot = styled.div`
    width: 100%;
    background-color: #EFEFEF;
    padding: 80px 0;
    text-align: center;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
`


interface NewInputType {
    width?: string;
}
export const NewStyledInput = styled.input.attrs({
    type: 'text',
})`
width: ${({width}:any)=> width ? width : '300px'};

border: 0.5px solid #000000;
box-sizing: border-box;
border-radius: 5px;
padding: 1em 1.5em;
outline: none;
font-family: 'Avenir';
font-size: 12px;
min-height: 30px;
`

export const NewStyledTextArea = styled.textarea<NewInputType>`
width: ${({width})=> width ? width : '300px'};
height: 150px;
border: 0.5px solid #000000;
box-sizing: border-box;
border-radius: 5px;
outline: none;
padding: 1em 1em;


/* min-height: 117px;
width: 350px;
background: #F7F7F7;
border: 1px solid #C4C4C4;
border-radius: 10px;
outline: none;
padding: 1rem 1.2rem; */
`