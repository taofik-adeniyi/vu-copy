import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap');
    
    * {
        box-sizing: border-box;
    }
    .lokistyle{
        background-color: black;
    }
`
export const StyledTable = styled.table`
font-family: 'Open Sans';
overflow: auto;
tr {
    color: #BFBFBF;
    th {
        min-width: 200px;
        padding: 10px 0;
    }
    td {
        border-bottom: 0.5px solid #585858;
        text-align: center;
        padding: 20px 0;
    }
}
`

export default GlobalStyles