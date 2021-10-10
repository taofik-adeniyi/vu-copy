import React from 'react'
import { StyledImageContainer } from '../styled/styles';
import Image from 'next/image'
import { gallery } from "../const";
import { useRouter } from "next/router"


const Library = () => {
  const router = useRouter()
    return (
        <>
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            width: "100%",
            minHeight: "300px",
            justifyContent: 'space-between',
            margin: '50px 0'
          }}
        >
          {gallery?.map((images) => {
            return (
              <StyledImageContainer 
                key={images.id} 
                width="250px" 
                height="200px" 
                onClick={() => {
                  router.push({
                    pathname: '/library/[lid]',
                    query: { pid: images.id },
                  })
                }}
                >
                <Image
                  alt="Nikon Camera Image"
                  src={ '/gallery/' + images.name}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </StyledImageContainer>
            );
          })}
        </div>
        <div style={{display: 'flex', gap: '10px', margin: '20px 0', justifyContent: 'center', alignItems: 'center'}}>
            <span style={{width: '5px', height: '5px', backgroundColor: '#fff'}}></span>
            <span style={{width: '5px', height: '5px', backgroundColor: '#fff'}}></span>
            <span style={{width: '5px', height: '5px', backgroundColor: '#1EAAB2'}}></span>
        </div>
        </>
    )
}

export default Library
