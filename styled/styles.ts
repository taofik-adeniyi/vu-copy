import styled from "styled-components";

interface ImageType {
    width?: string;
    height?: string;
    rounded?: string;
}
export const StyledImageContainer = styled.div<ImageType>`
    position: relative;
    width: ${({width})=> width ? width : '200px'};
    height: ${({height})=> height ? height : '200px'};
    border-radius: ${({rounded})=> rounded ? rounded : '50%'}
    
    
    
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