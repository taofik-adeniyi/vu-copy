import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import Image from "next/image";
import Modal from "./Modal";
import { ModalContainer } from "../styled/modal";
import Portal from "./hoc/Portal";
import { Flex, StyledDisplayPicture } from "../styled/styles";
import { StyledButton } from "../pages/global-styles";
import { ProfileList, ProfileMenu } from "../styled/profile";
import { StyledHeartIcon, StyledFolderIcon, StyledDownloadIcon } from "../styled/icons";
import { StyledLink, StyledMenuLink } from "../styled/header";
import Link from 'next/link'
import { useRouter } from "next/router"

interface MenuType {
  menu: boolean;
}
export interface ISubmitResult {
  success: boolean;
  message: string;
}
const ProfileTab = () => {
    const router = useRouter()
    {/*
 // @ts-ignore */}
  const [menu, setMenu] = useState<MenuType>(false);
  const handleMenu = () => {
    {/*
 // @ts-ignore */}
    setMenu(!menu);
  };
  return (
    <>
      {/* {
            menu && <Portal><Modal>
                <ModalContainer>
                    <div style={{backgroundColor: '#000', padding: '50px'}}>
                    <h1 style={{color: 'white'}}>Ope Onanuga</h1>
                    </div>
                </ModalContainer>
            </Modal></Portal>
        } */}
      <div
        style={{
          display: "flex",
          fontFamily: "Poppins",
          gap: "20px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            color: "white",
            fontSize: "10px",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "#1EAAB2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "80px",
              minHeight: "35px",
              fontWeight: "bold",
              borderRadius: "10px 0 0 10px",
              padding: "0 10px",
            }}
          >
            Viou Coins
          </div>
          <div
            style={{
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "80px",
              minHeight: "35px",
              fontWeight: "bold",
              borderRadius: "0 10px 10px 0",
              padding: "0 10px",
              border: "1px solid #606060",
            }}
          >
            10,000
          </div>
        </div>
        <div>
          <ImageContainer small={true}>
            <Image
              alt="Forgot page background image"
              src="/mydp.svg"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </ImageContainer>
        </div>
        <div
          onClick={handleMenu}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <Image
            alt="Arrow Down"
            src="/smallarrow.svg"
            layout="fixed"
            loading="lazy"
            width={15}
            height={15}
          />
          {menu && (
            <ProfileMenu>
              <div style={{display: 'flex', borderBottom: '1px solid #777777', alignItems: 'flex-start', gap: '10px', justifyContent: 'space-between', fontFamily: "Overlock", padding: '10px 20px' }}>
              <Link href="/profile" passHref>
              <StyledLink transform="capitalize" margin="0">
                <StyledDisplayPicture onClick={()=> router.push('/profile')} width="60px" height="60px" rounded="50%">
                  <Image src="/mydp.svg" layout="fill" loading="lazy" />
                </StyledDisplayPicture>
                </StyledLink>
                </Link>
                <div style={{ display: "flex", gap: '5px', flexDirection: "column" }}>
                  <Link href="/profile" passHref>
                    <StyledLink transform="capitalize" margin="0">
                    <h1 style={{ color: "white", fontSize: "22px" }}>
                    Ope Onanuga
                  </h1>
                  <h4>oponad@gmail.com</h4>
                    </StyledLink>
                  </Link>
                  <StyledButton onClick={()=> router.push('/profile/edit')} padding=".4rem 1rem" color="#000" hcolor="#fff" background="#fff">edit profile</StyledButton>
                </div>
              </div>
              <ProfileList padding="20px 0" border="1px solid #777777">
                <Link href="#" passHref>
                <StyledMenuLink margin="0">
                    <StyledFolderIcon />
                    <div>viou wallet</div>
                </StyledMenuLink>
                </Link>
              </ProfileList>
              <ProfileList>
                <Link href="/favorites" passHref>
                    <StyledMenuLink margin="0">
                        <StyledHeartIcon/>
                <div>favorites</div>
                    </StyledMenuLink>
                </Link>
              </ProfileList>
              <ProfileList>
              <Link href="#" passHref>
                    <StyledMenuLink margin="0">
                        <StyledDownloadIcon/>
                        <div>downloads</div>
                    </StyledMenuLink>
                </Link>
              </ProfileList>
              <ProfileList>
              <Link href="/request-shoot" passHref>
                <StyledMenuLink margin="0">
                    <StyledFolderIcon />
                    <div>request a shoot/video</div>
                </StyledMenuLink>
                </Link>
              </ProfileList>
              <ProfileList>
              <Link href="/manage-request" passHref>
                <StyledMenuLink margin="0">
                    <StyledFolderIcon />
                    <div>manage request</div>
                </StyledMenuLink>
                </Link>
              </ProfileList>
              <ProfileList>
              <Link href="#" passHref>
                <StyledMenuLink margin="0">
                    <StyledFolderIcon />
                    <div>support</div>
                </StyledMenuLink>
                </Link>
              </ProfileList>
              <ProfileList border="none">
              <Link href="/" passHref>
                <StyledMenuLink margin="0">
                    {/* <StyledFolderIcon /> */}
                    <div>log out</div>
                </StyledMenuLink>
                </Link>
              </ProfileList>
            </ProfileMenu>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
