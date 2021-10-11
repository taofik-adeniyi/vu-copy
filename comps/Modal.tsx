import React from "react";
import { StyledOverLay, ModalContainer } from "../styled/modal";
import { useRouter } from 'next/router'
import { StyledCancelIcon } from "../styled/icons";

interface ModalType {
    children?: any;
    width?: string;
    height?: string;
    cancel?: boolean;
}
const Modal = (props: ModalType) => {
    const router = useRouter()
    const handleRequest = () => {
        router.push('/request-shoot')
    }
  return (
    <StyledOverLay>
      <ModalContainer width={props.width} height={props.height}>
        {props.cancel && 
        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', margin: '20px 50px 0 0'}}>
        <StyledCancelIcon/>
        </div>}
          {
              props.children
          }
        
      </ModalContainer>
    </StyledOverLay>
  );
};

export default Modal;
