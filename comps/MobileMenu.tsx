import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MobileMenuWrapper,
  MobileUl,
  MobileTitle,
  MobileSearchBar,
  MobileHead,
} from "../styled/mobile-menu";
import { StyledLink } from "../styled/header";
import brand from "../assets/svg/viou-digital-black.svg";
import language from "../assets/svg/language.svg";
import brandnew from "../assets/svg/new-digital-viou-black.svg";
import brandnewtwo from "../assets/svg/viou-digital-black.png";
import { StyledDisplayPicture } from "../styled/styles";
import {
  StyledCaretUp,
  StyledCaretDown,
  StyledClose,
  StyledSerchIcon,
} from "../styled/icons";
import { CustomSearch } from "../styled/GlobalStyles";
import { StyledInputText } from "../styled/register";
import { StyledButton } from "../styled/global-styles";
import { myTheme } from "../theme/my-theme";
import { useRouter } from "next/router";
import { navigation } from "../const";

const MobileMenu = ({ close }: any) => {
  const router = useRouter();
  {/*
 // @ts-ignore */}
  const { colors } = myTheme;
  const [open, setOpen] = useState(false);
  return (
    <MobileMenuWrapper>
      <MobileHead>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledClose style={{ marginRight: "3rem" }} onClick={close} />
          <Link href="/" passHref>
            <StyledLink margin="0">
              <StyledDisplayPicture width="50px" height="50px">
                <Image
                  src={brandnewtwo}
                  alt="Viou Digital Logo"
                  layout="fill"
                />
              </StyledDisplayPicture>
            </StyledLink>
          </Link>
        </div>
        <div onClick={() => router.push("sign-in")}>SIGN IN</div>
      </MobileHead>
      <CustomSearch>
        <StyledSerchIcon style={{ margin: "auto 0 auto 1rem" }} />
        <StyledCaretDown
          style={{ margin: "auto .8rem auto .8rem" }}
          color="#000"
        />
        <MobileSearchBar placeholder="Search" />
      </CustomSearch>
      <MobileUl txtcolor="#797979">
        {navigation &&
          navigation?.map((navigate) => {
            let id = navigate.id
            let wee;
            return (
              <li key={navigate.id}>
                <span className="liflex">
                <div>{navigate?.name}</div>
                <div>{open ? <StyledCaretUp onClick={()=> setOpen(!open)} /> : <StyledCaretDown onClick={()=> setOpen(!open)} />}</div>
                </span>
                <MobileUl margin="1rem .8rem">
                  {/* {
                    wee = navigation.filter(nav => nav.id === id)
                  } */}
                  {
                    open && navigate.subnav && navigate.subnav?.map(sub=>{
                      return (
                        <li key={sub?.id}>{sub?.name}</li>
                    )
                    })
                  }
                </MobileUl>
              </li>
            );
          })}
      </MobileUl>
      <MobileTitle>General</MobileTitle>
      <MobileUl>
        <li>
        <div className="liflex">
          <div>Home</div>
          <div>{open ? <StyledCaretUp /> : <StyledCaretDown />}</div>
          </div>
        </li>
        <li>
          <div className="liflex">
            <div>
            English
            <StyledDisplayPicture width="20px" height="20px">
              <Image src={language} alt="Viou Digital Logo" layout="fill" />
            </StyledDisplayPicture>
            </div>
          <div>{open ? <StyledCaretUp /> : <StyledCaretDown />}</div>
          </div>
        </li>
        <li>
        <div className="liflex">
          <div>USD</div>
          <div>{open ? <StyledCaretUp /> : <StyledCaretDown />}</div>
          </div>
        </li>
        <li>
        <div className="liflex">
          <div>Open in App</div>
          <div>{open ? <StyledCaretUp /> : <StyledCaretDown />}</div>
          </div>
        </li>
      </MobileUl>
      <StyledButton background={colors.primary} style={{ marginTop: "3rem" }}>
        Sign up
      </StyledButton>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
