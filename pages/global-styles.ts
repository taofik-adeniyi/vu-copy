import styled, { createGlobalStyle, css } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`
  body {
    background: #000;
    margin: 0;
    padding: 0;
  }
`;
interface TitleProps {
  background?: string;
  color?: any;
  width?: string;
  border?: string;
  onClick?: any;
  hover?: string;
  hcolor?: string;
  padding?: string;
  transform?: string;
}

export const StyledButton = styled.button<TitleProps>`
  border-radius: 30px;
  background: ${(props) => (props.background ? props.background : "transparent")};
  border: 1px solid ${(props)=> (props.border ? props.border : 'transparent')};
  color: ${(props) => (props.color ? props.color : props.theme.colors.main)};
  padding: ${({padding})=> padding ? padding : '.8rem 1.2rem'};
  font-family: var(--primaryFont);
  text-transform: ${({transform})=> transform ? transform : 'uppercase'};
  cursor: pointer;
  font-size: 16px;
  // transition: 1s ease-in border;
  opacity: 0.9;
  transition: 0.6s border;
  width: ${(props)=> props.width ? props.width : ''};
  font-weight: bold;

  &:hover {
    color: ${({hcolor})=> hcolor || 'white'};
    border: 1px solid ${({hover})=> hover || '#fff'};
    background: transparent;
    opacity: 1;
  }
  // border: none;
  // padding: .6rem 1.2rem;
  // border-radius: 30px;
  // background: red;
  // // padding: 0!important;
  // /*optional*/
  // font-family: arial, sans-serif;
  // /*input has OS specific font-family*/
  // color: white;
`

export const NewHeader = styled.p<{ customColor: string }>`
color: ${(props) => props.customColor};
`;