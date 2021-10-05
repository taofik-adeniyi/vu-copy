import styled from "styled-components";
import mybg from '../assets/images/camerastanddark.png'
import img from './assets/images/camerastanddark.png';

interface Display  {
    img?: any;
}
export const MyBigDisplay = styled.div<Display>`
    width: 100%;
    min-height: 460px;
    position: relative;
    text-align: center;
    background-image: url(${props => props.img});
`