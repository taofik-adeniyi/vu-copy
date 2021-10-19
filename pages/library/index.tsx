import React from "react";
import MyLayout from "../../comps/MyLayout";
import TagList from "../../comps/TagList";
import { StyledImageContainer } from "../../styled/styles";
import Image from "next/image";
import { gallery } from "../../const";
import { useRouter } from "next/router";
import Library from "../../comps/Library";

const Libraryindex = () => {
  const router = useRouter();
  const path = router.pathname;
  console.log("the current path name is", path);
  const isBorder = path === "/gallery" ? true : false;
  return (
    <MyLayout isBorder>
      <div style={{ width: "90%", margin: "0 auto 50px auto" }}>
        <div style={{margin: '50px 0'}}>
        <TagList />
        </div>
        <Library />
      </div>
    </MyLayout>
  );
};

export default Libraryindex;
