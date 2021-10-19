import styled from "styled-components";
import MyLayout from "../comps/MyLayout";
import {
  Box,
  EmptyBox,
  FirstSection,
  HomeContentBox,
  HomeTagWrapper,
  JoinBox,
  JoinBoxImage,
  JoinBoxOne,
  Reel,
  ReviewCard,
  ReviewCardImage,
  ReviewCardText,
  ReviewWrapper,
  ReelWrapper,
  Comments
} from "../styled/home";
import TheBox from "../comps/TheBox";
import { StyledButton } from "../styled/global-styles";
import facecapafro from "../assets/svg/facecapafro.svg";
import maps from "../assets/svg/maps.svg";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import stats from "../assets/svg/stats.svg";
import nikon from "../assets/svg/nikon-camera.svg";
import goldplay from "../assets/svg/goldplay.svg";
import TagList from "../comps/TagList";
import Link from "next/link";
import { useRouter } from "next/router";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function Home() {
  const router = useRouter();
  return (
    <MyLayout>
      <HomeContentBox>
        <FirstSection>
          <div
            style={{
              fontFamily: "Overlock",
              fontWeight: "bold",
              fontSize: "55px",
              lineHeight: "1em",
              color: "white",
            }}
          >
            Get quality <span style={{ color: "#1EAAB2" }}>visual content</span>{" "}
            on demand{" "}
          </div>
          <p
            style={{
              fontFamily: "Avenir",
              color: "black",
              marginTop: "30px",
              lineHeight: "1.4rem",
            }}
          >
            Viou is the go-to destination for finding and hiring amazing visual
            content creators and showcasing creative work. It is home to the
            best of African Photographers and Cinematographers.
          </p>

          <div className={styles.homebtnwrap}>
            <StyledButton background="#1EAAB2">hire a pro</StyledButton>
            <StyledButton border="white" width="250px" color="black">
              set up your portfolio
            </StyledButton>
          </div>
        </FirstSection>
        <EmptyBox></EmptyBox>
      </HomeContentBox>

      <HomeTagWrapper>
          <div style={{marginRight: '50px'}}>
            <StyledButton color="#fff" border="white" width="180px">
              All
            </StyledButton>
          </div>
          <TagList />
        </HomeTagWrapper>

      <ReelWrapper>
        
        <div
          style={{
            padding: "80px 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "20%",
              backgroundColor: "gray",
              height: "300px",
              position: "relative",
            }}
          >
            <Image
              alt="A beautiful dog Image"
              src="/asabesmall.svg"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <Reel>
            <Image
              alt="Nikon Camera Image"
              src={nikon}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
            {/* <Image src={nikon} width={0} height={0} /> */}
            <div
              style={{
                position: "absolute",
                top: "40%",
                cursor: "pointer",
                left: "40%",
              }}
            >
              <Image src={goldplay} width={100} height={50} />
            </div>
            <div
              style={{
                fontFamily: "Avenir",
                display: "flex",
                position: "absolute",
                left: 30,
                right: 30,
                justifyContent: "space-between",
                alignItems: "flex-end",
                bottom: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link href="/user/asabe">
                  <a>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "black",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </a>
                </Link>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <Link href="/user/asabe">
                    <a>
                      <div style={{ color: "#fff" }}>Asabe Vincent</div>
                    </a>
                  </Link>
                  <div style={{ color: "#FFCF30" }}>Expert</div>
                </div>
              </div>
              <div style={{ paddingBottom: "5px", cursor: "pointer" }}>
                <Image src={stats} width={100} height={0} />
              </div>
            </div>
          </Reel>
          <div
            style={{
              width: "20%",
              backgroundColor: "gray",
              height: "300px",
              position: "relative",
            }}
          >
            <Image
              alt="A beautiful dog Image"
              src="/dog.svg"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <StyledButton
            width="300px"
            background="#1EAAB2"
            onClick={() => router.push("/library")}
          >
            explore more content
          </StyledButton>
        </div>
      </ReelWrapper>

      <TheBox />

      <JoinBox>
        <JoinBoxOne>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              lineHeight: "1.2em",
            }}
          >
            Join the <span style={{ color: "#1EAAB2" }}>Viou</span> <br />
            Community
          </div>
          <p style={{ lineHeight: "24px", fontSize: "16px" }}>
            Join our thriving community of professionals for the opportunity to
            learn from the best in the business. Gain access to a valuable
            network and pool of learning resource, attend meetups, webinars and
            take our curated courses to increase your earning power.
          </p>
          <StyledButton background="#1EAAB2" width="150px">
            JOIN VIOU
          </StyledButton>
        </JoinBoxOne>
        <JoinBoxImage>
          <Image src={facecapafro} width={800} height={450} />
        </JoinBoxImage>
      </JoinBox>

      <Comments>
        <div
          style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}
        >
          <div>What people say about Viou</div>
          <p
            style={{ fontFamily: "Avenir", fontWeight: 350, fontSize: "18px" }}
          >
            Reviews and opinions
          </p>
        </div>

        <ReviewWrapper>
          <ReviewCard>
            <ReviewCardImage />
            <ReviewCardText>
              We are changing the african continent’s global view by sharing
              local content creators visuals.
            </ReviewCardText>
          </ReviewCard>
          <ReviewCard>
            <ReviewCardImage />
            <ReviewCardText>
              We are changing the african continent’s global view by sharing
              local content creators visuals.
            </ReviewCardText>
          </ReviewCard>
          <ReviewCard>
            <ReviewCardImage />
            <ReviewCardText>
              We are changing the african continent’s global view by sharing
              local content creators visuals.
            </ReviewCardText>
          </ReviewCard>
        </ReviewWrapper>
      </Comments>
      <div
        style={{
          width: "100%",
          backgroundColor: "gray",
          minHeight: "550px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.73)",
            padding: "30px 0 60px 0",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            fontFamily: "Overlock",
            width: "350px",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              padding: "0 0 20px 0",
              margin: 0,
              lineHeight: "1.2em",
              color: "#00F0FE",
            }}
          >
            There is a Viou professional near you.
          </p>
          <StyledButton background="#00B3BE" width="200px">
            REQUEST A SHOOT
          </StyledButton>
        </div>
        <Image
          alt="Forgot page background image"
          src="/maps.svg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
    </MyLayout>
  );
}
