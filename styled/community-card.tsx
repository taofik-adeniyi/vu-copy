import styled from "styled-components";

type ComCardType = {
    background?: string;
}
export const StyledComCard = styled.div<ComCardType>`
background: ${(props)=> props.background ? props.background : 'lightgray'};
padding: 20px 50px 0 20px;
min-height: 400px;
min-width: 290px;
border-radius: 10px;
`