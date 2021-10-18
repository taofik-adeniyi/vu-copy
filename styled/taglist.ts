import styled from "styled-components";


interface UlType {
    size?: string;
    padding?: string;
}
export const TagListWrapper = styled.div`
width: 100%;
display: flex;
overflow: auto;
padding: 20px;
`
export const StyledUl = styled.ul<UlType>`
margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  width: auto;
  overflow: auto;
  li {
    margin: 0 30px 0 0;
    border-bottom: 1px solid #fff;
  }
`