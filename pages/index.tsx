import styled from "styled-components";
import MyLayout from "../comps/MyLayout";
import {
  Box,
  Reel,
  ReviewCard,
  ReviewCardImage,
  ReviewCardText,
} from "../styled/home";
import { StyledButton } from "./global-styles";
import facecapafro from "../assets/svg/facecapafro.svg";
import maps from "../assets/svg/maps.svg";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import stats from "../assets/svg/stats.svg"
import nikon from "../assets/svg/nikon-camera.svg"
import goldplay from "../assets/svg/goldplay.svg"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function Home() {
  return (
    <MyLayout>
      <div className={styles.firstwrapper}>
       <div style={{width: '45%', height: '100%', padding: '250px 0 50px 80px'}}>
       <div style={{fontFamily: 'Overlock', fontWeight: 'bold', fontSize: '55px', lineHeight: '1em', color: 'white'}}>Get quality <span style={{color: '#1EAAB2'}}>visual content</span> on demand </div>
        <p style={{fontFamily: 'Avenir', color :'black', marginTop: '30px', lineHeight: '1.4rem'}}>
          Viou is the go-to destination for finding and hiring amazing visual
          content creators and showcasing creative work. It is home to the best
          of African Photographers and Cinematographers.
        </p>

        <div style={{margin: '50px 0', display: 'flex', columnGap: '20px', width: '100%'}}>
        <StyledButton background="#1EAAB2">hire a pro</StyledButton>
        <StyledButton border="white" width="250px" color="black">set up your portfolio</StyledButton>
        </div>
       </div>
       <div style={{width: '55%'}}>

       </div>
      </div>

      <div style={{padding: '50px 0', width: '100%', color: 'white'}}>
        <div style={{width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto'}}>
          <div>
          <StyledButton color="#fff" border="white" width="200px">
            All
          </StyledButton>
          </div>
          <div style={{fontFamily: 'Avenir', display: 'flex'}}>
            <ul className="tags">
              <li>Tags:</li>
              <li>All</li>
              <li>Ads</li>
              <li>Documentry</li>
              <li>Portraits</li>
              <li>Studios</li>
              <li>Models</li>
              <li>Skits</li>
              <li>Business</li>
            </ul>
          </div>
        </div>
        <div style={{padding: '80px 0', display: 'flex', justifyContent: 'space-between'}}>
  <div style={{width: '20%', backgroundColor: 'gray', height: '300px', position: 'relative'}}>
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
  <div style={{position: 'absolute', top: '40%', cursor: 'pointer', left: '40%'}}>
  <Image src={goldplay} width={100} height={50} />
  </div>
  <div style={{fontFamily: 'Avenir', display: 'flex',  position: 'absolute', left: 30, right: 30, justifyContent: 'space-between', alignItems: 'flex-end', bottom: 20}}>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div style={{width: '60px', height: '60px', backgroundColor: 'black', borderRadius: '50%'}}></div>
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
        <div style={{color: '#fff'}}>Asabe Vincent</div>
        <div style={{color: '#FFCF30'}}>Expert</div>
      </div>
    </div>
    <div style={{paddingBottom: '5px', cursor: 'pointer'}}>
      
      <Image src={stats} width={100} height={0} />
    </div>
  </div>

</Reel>
  <div style={{width: '20%', backgroundColor: 'gray', height: '300px', position: 'relative'}}>
  <Image
          alt="A beautiful dog Image"
          src="/dog.svg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
  </div>
        </div>
        <div style={{textAlign: 'center'}}>
        <StyledButton width="300px" background="#1EAAB2">explore more content</StyledButton>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#272727",
          width: "100%",
          textAlign: "center",
          margin: "0 auto",
          height: "480px",
          padding: "50px 0",
        }}
      >
        <h2
          style={{
            fontFamily: "Overlock",
            color: "white",
            padding: "0 0 40px 0",
            margin: 0,
          }}
        >
          Top Three Viou Creators for the Week
        </h2>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <Box />
          <Box />
          <Box />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          fontFamily: "Overlock",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "40%",
            margin: "30px 0 0 0",
            padding: "20px 0 0 80px",
          }}
        >
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
          <p style={{ lineHeight: "24px", width: "300px", fontSize: "16px" }}>
            Join our thriving community of professionals for the opportunity to
            learn from the best in the business. Gain access to a valuable
            network and pool of learning resource, attend meetups, webinars and
            take our curated courses to increase your earning power.
          </p>
          <StyledButton background="#1EAAB2" width="150px">
            JOIN VIOU
          </StyledButton>
        </div>
        <div style={{ width: "60%", margin: "60px 0", textAlign: "right" }}>
          <Image src={facecapafro} width={800} height={450} />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          fontFamily: "Overlock",
          minHeight: "400px",
          padding: "50px 0 150px 0",
          backgroundColor: "#EFEFEF",
          display: "flex",
          justifyContent: "center",
          flexDirection: 'column'
        }}
      >
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

        <div style={{display: 'flex',  width: '70%', margin: '50px auto 0 auto', justifyContent: 'center', gap: '30px'}}>
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
        </div>
      </div>
      <div
        style={{
          width: '100%',
          backgroundColor: "gray",
          minHeight: "550px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
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
