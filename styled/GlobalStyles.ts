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

    

    /*  Toggle Switch  */

.toggleSwitch span span {
  display: none;
}

@media only screen {
  .toggleSwitch {
    display: inline-block;
    height: 18px;
    position: relative;
    overflow: visible;
    padding: 0;
    margin-left: 50px;
    cursor: pointer;
    width: 40px
  }
  .toggleSwitch * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .toggleSwitch label,
  .toggleSwitch > span {
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .toggleSwitch input:focus ~ a,
  .toggleSwitch input:focus + label {
    outline: none;
  }
  .toggleSwitch label {
    position: relative;
    z-index: 3;
    display: block;
    width: 100%;
  }
  .toggleSwitch input {
    position: absolute;
    opacity: 0;
    z-index: 5;
  }
  .toggleSwitch > span {
    position: absolute;
    left: -50px;
    width: 100%;
    margin: 0;
    padding-right: 50px;
    text-align: left;
    white-space: nowrap;
  }
  .toggleSwitch > span span {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: block;
    width: 50%;
    margin-left: 50px;
    text-align: left;
    font-size: 0.9em;
    width: 100%;
    left: 15%;
    top: -1px;
    opacity: 0;
  }
  .toggleSwitch a {
    position: absolute;
    right: 50%;
    z-index: 4;
    display: block;
    height: 100%;
    padding: 0;
    left: 2px;
    width: 18px;
    background-color: #fff;
    border: 1px solid #CCC;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  .toggleSwitch > span span:first-of-type {
    color: #ccc;
    opacity: 1;
    left: 45%;
  }
  .toggleSwitch > span:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50px;
    top: -2px;
    background-color: #fafafa;
    border: 1px solid #ccc;
    border-radius: 30px;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
  .toggleSwitch input:checked ~ a {
    border-color: #fff;
    left: 100%;
    margin-left: -8px;
  }
  .toggleSwitch input:checked ~ span:before {
    border-color: #0097D1;
    box-shadow: inset 0 0 0 30px #0097D1;
  }
  .toggleSwitch input:checked ~ span span:first-of-type {
    opacity: 0;
  }
  .toggleSwitch input:checked ~ span span:last-of-type {
    opacity: 1;
    color: #fff;
  }
  /* Switch Sizes */
  .toggleSwitch.large {
    width: 60px;
    height: 27px;
  }
  .toggleSwitch.large a {
    width: 27px;
  }
  .toggleSwitch.large > span {
    height: 29px;
    line-height: 28px;
  }
  .toggleSwitch.large input:checked ~ a {
    left: 41px;
  }
  .toggleSwitch.large > span span {
    font-size: 1.1em;
  }
  .toggleSwitch.large > span span:first-of-type {
    left: 50%;
  }
  .toggleSwitch.xlarge {
    width: 80px;
    height: 36px;
  }
  .toggleSwitch.xlarge a {
    width: 36px;
  }
  .toggleSwitch.xlarge > span {
    height: 38px;
    line-height: 37px;
  }
  .toggleSwitch.xlarge input:checked ~ a {
    left: 52px;
  }
  .toggleSwitch.xlarge > span span {
    font-size: 1.4em;
  }
  .toggleSwitch.xlarge > span span:first-of-type {
    left: 50%;
  }
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
export const CustomShoot = styled.div`
background: rgba(255, 255, 255, 0.94);
box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.3);
border-radius: 10px;
width: 100%;
overflow-y: auto;
/* padding-bottom: 50px; */
`

export const CustomSearch = styled.div`
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 10px;
display: flex;
margin: 2rem 0;
`
export default GlobalStyles