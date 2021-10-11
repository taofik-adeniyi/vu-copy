import  { AiOutlineHeart, AiOutlineFolder } from "react-icons/ai";
import styled from "styled-components";
import {FaDownload, FaPinterestP, FaInstagram, FaVimeoV} from "react-icons/fa"
import { FiDownload, FiFacebook, FiTwitter } from "react-icons/fi"
import { TiTimes } from "react-icons/ti"
import { ImQrcode } from "react-icons/im"
export const StyledHeartIcon = styled(AiOutlineHeart)`
  /* color: gold; */
  transform: scale(1.5);
`

export const StyledFolderIcon = styled(AiOutlineFolder)`
  transform: scale(1.5);
`
export const StyledDownloadIcon = styled(FiDownload)`
  transform: scale(1.5);
`

export const StyledCancelIcon = styled(TiTimes)`
  transform: scale(1.5);
`
export const StyledFacebook = styled(FiFacebook)`
  transform: scale(1);
`
export const StyledTwitter = styled(FiTwitter)`
  transform: scale(1);
`

export const StyledPinterset = styled(FaPinterestP)`
  transform: scale()(1);
`

export const StyledInstagram = styled(FaInstagram)`
  transform: scale()(1);
`

export const StyledVimeo = styled(FaVimeoV)`
  transform: scale()(1);
`

export const StyledQrCode = styled(ImQrcode)`
  transform: scale(3);
`

// function ImQrcode(ImQrcode: any) {
//   throw new Error("Function not implemented.");
// }
// ImQrcode
// RiVimeoLine