import React from "react";
import { StyledButton } from "../styled/global-styles";
import { StyledInputText } from "../styled/register";
import { Flex } from "../styled/styles";
import { UploadContainer, UploadHeader, UploadFooter, DragDrop, Trouble, Tags } from "../styled/upload";

const Uploads = () => {
  return (
    <UploadContainer>
      <UploadHeader>
        <div style={{ width: "85%", margin: '0 auto', padding: '50px 0 0 0'}}>
          <div
            style={{
              fontFamily: "Overlock",
              fontSize: "30px",
              textAlign: "center",
              textTransform: 'uppercase'
            }}
          >
            Upload files
          </div>
          <DragDrop>

          </DragDrop>
          <Trouble>Having Trouble? <span>Try the basic downloader</span></Trouble>

          <Flex style={{display: 'flex', marginTop: '50px'}}>
          <Tags active="active">Options</Tags>
          <Tags>description</Tags>
          <Tags>advance</Tags>
          </Flex>
        </div>
      </UploadHeader>
      <UploadFooter>
          <div style={{width: '85%', margin: '0 auto', padding: '50px 0 30px 0', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', gap: '25px', margin :'0 0 30px 0'}}>
                <div>
                <Tags>Category</Tags>
                <StyledInputText placeholder="category" width="160px" radius="0" />
                </div>
                <div>
                <Tags>Notify by mail</Tags>
                <StyledInputText placeholder="category" width="160px" radius="0" />
                </div>
                <div>
                <Tags>Privacy</Tags>
                <StyledInputText placeholder="category" width="160px" radius="0" />
                </div>
            </div>
            <div>
                <StyledButton background="#93D500">add files</StyledButton>
            </div>
          </div>
      </UploadFooter>
    </UploadContainer>
  );
};

export default Uploads;
