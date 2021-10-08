import styled from "styled-components";

export const StyledOverLay = styled.div`
background: #ffffff36;
width: 100%;
height: 100%;
// background-color: transparent;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
`

interface ModalContainerType {
    width?: string;
}

export const ModalContainer = styled.div<ModalContainerType>`
/* padding: 30px 60px; */
background-color : #EFEFEF; 
width: ${({width})=> width ? width : '500px'};
border-radius: 10px; 
position: absolute;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`