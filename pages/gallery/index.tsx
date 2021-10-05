import React from "react";
import MyLayout from "../../comps/MyLayout";
import TagList from "../../comps/TagList";
import { StyledImageContainer } from "../../styled/styles";
import Image from "next/image";
import { gallery } from "../../const";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter()
    const path = router.pathname
    console.log('the current path name is', path)
    const isBorder =  path === '/gallery' ? true : false
  return (
    <MyLayout isBorder>
      <div style={{ width: "90%", margin: "0 auto 50px auto" }}>
        <TagList />
        {/* gallery wrapper */}
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
              <StyledImageContainer key={images.id} width="250px" height="200px">
                <Image
                  alt="Nikon Camera Image"
                  src={ '/gallery/' + images.name}
                // src="/gallery/01.svg"
                // src="/forgot-password.svg"
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
      </div>
    </MyLayout>
  );
};

export default index;
