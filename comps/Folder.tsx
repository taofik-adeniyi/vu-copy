import React from "react";
import { StyledImageContainer } from "../styled/styles";
import Image from "next/image";

type FolderType = {
  title: string;
  data?: any;
  description?: string;
  element?: any;
};
const Folder = ({ title = "Folder name", data, description, element }: FolderType) => {
  return (
    <div style={{ width: "100%", margin: '100px 0', padding: "0 100px" }}>
      <div style={{ color: "white", fontSize: "20px", fontFamily: "Avenir", display: 'flex', justifyContent: 'space-between' }}>
        <div style={{width: '40%'}}>
        {title}
        </div>
        {element && element()}
      </div>
      {
        description && <div style={{ width: '50%', color: "white", fontSize: "20px", fontFamily: "Avenir" }}>{description}</div>
      }
      
      <div
        style={{
            width: "100%",
            minHeight: '500px',
          margin: "20px 0 0 0",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: 'space-between'
        }}
      >
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/kitchen.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
      
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/hailingman.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
      
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/kitchen.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
     
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/hailingman.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
   
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/kitchen.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
    
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/kitchen.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
    
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/hailingman.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
   
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/kitchen.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
      
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/hailingman.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
   
        <StyledImageContainer>
          <Image
            alt="Nikon Camera Image"
            src="/folder/kitchen.svg"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </StyledImageContainer>
      </div>
    </div>
  );
};

export default Folder;
