import React from "react";
import CreateNewList from "../comps/CreateNewList";
import Folder from "../comps/Folder";
import MyLayout from "../comps/MyLayout";
import RequestContainer from "../comps/RequestContainer";

const newlist = () => {
  return (
    <MyLayout>
      <Folder
        element={CreateNewList}
        title="Recently Favorited Images and Videos"
        description="Here are list of interesting images and videos that fascinate you, you can organize them in to a link"
      />

      <Folder
        title="Purchased Videos and Images"
        description="Organize your go-to Expert and favorite Viou creators into a custom list"
      />
      <Folder
        title="Similar videos from other viou creators" 
      />
      <RequestContainer />
    </MyLayout>
  );
};
export default newlist;
