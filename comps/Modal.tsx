import React from "react";
import { StyledOverLay, ModalContainer } from "../styled/modal";
import { useRouter } from 'next/router'

interface ModalType {
    children?: any;
    width?: string;
}
const Modal = (props: ModalType) => {
    const router = useRouter()
    const handleRequest = () => {
        router.push('/request-shoot')
    }
  return (
    <StyledOverLay>
      <ModalContainer width={props.width}>
          {
              props.children
          }
        
      </ModalContainer>
    </StyledOverLay>
  );
};

export default Modal;
