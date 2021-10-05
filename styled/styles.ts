import styled from "styled-components";

interface ImageType {
    width?: string;
    height?: string;
}
export const StyledImageContainer = styled.div<ImageType>`
    position: relative;
    width: ${({width})=> width ? width : '200px'};
    height: ${({height})=> height ? height : '200px'};
`

export const RequestShoot = styled.div`
    width: 100%;
    background-color: #EFEFEF;
    padding: 80px 0;
    text-align: center;
`