import styled from "styled-components";

export const ProfileWrapper = styled.div`
    width: 100%;
    background: #fff;
    min-height: 300px;
    padding: 40px 0 70px 0;
`

export const ProfileContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
`

export const ProfileCard = styled.div`
    background: #FBFBFB;
    box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.12);
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 20px 0;
    min-height: 250px;
`
export const ProfileName = styled.h3`
    font-family: Overlock;
    font-weight: bold;
    font-size: 24px;
    color: rgba(68, 68, 68, 0.73);
`
export const ProfileNiche = styled.h5`
font-family: 'Archivo', sans-serif;
font-size: 14px;
padding-top: 5px;
`

export const ProfileLocation = styled.h5`
color: rgba(68, 68, 68, 0.73);
padding-bottom: 20px;
`

export const ProfileDetails = styled.div`
background: #FBFBFB;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
width: 75%;
padding: 30px 40px;
margin: 20px 0;
display: flex;
flex-direction: column;
`

export const DataFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
`

export const AccountData = styled.div`
    width: 50%;

    div {
        margin-bottom: 25px;
    }

`
export const PersonalData = styled.div`
width: 50%;

div {
    margin-bottom: 25px;
}
`

export const DataTitle = styled.h1`
font-size: 24px;
font-family: Overlock;
font-weight: bold;
padding: 10px 0;
`