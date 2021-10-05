import React from "react";
import Link from "next/link";
import {
  faCartPlus,
  faSearchLocation,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MyIcon from "./MyIcon";
import { StyledButton } from "../pages/global-styles";
import Image from "next/image";
import brand from "../assets/svg/viou-digital.svg";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "../styled/home";

const MyLayout = ({ children, isBorder }: any) => {
  return (
    <div style={{ height: "100%"}}>
      <Header isBorder />

      {children}

      <Footer />
    </div>
  );
};

export default MyLayout;
