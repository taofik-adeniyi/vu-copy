import styled from "styled-components";

export const UploadContainer = styled.div`
    width: 100%;
background: #797979;
`

export const UploadHeader = styled.div`
`

export const UploadFooter = styled.div`
    background: #373737;
`
export const DragDrop = styled.div`
    background: #F2F2F2;
    border: 1px solid #7A7A7A;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    min-height: 130px;
    margin-top: 20px;
`
export const Trouble = styled.div`
font-size: 12px;
color: #fff;
font-family: 'Poppins', sans-serif;
padding: 10px 0 0 0;
span {
    color: ${({theme})=> theme.colors.primary};
}
`

type TagsType = {
    active?: string;
}


export const Tags = styled.div<TagsType>`
border-bottom: ${({active})=> active ? '2px solid #93D500' : 'none'};
margin: 0 20px 0 0;
font-weight: 900;
color: #fff;
font-family: 'Poppins';
font-size: 13px;
cursor: pointer;
text-transform: capitalize;
`