import React, { useState } from "react";
import Folder from "../../comps/Folder";
import MyLayout from "../../comps/MyLayout";
import TagList from "../../comps/TagList";
import { RequestShoot } from "../../styled/styles";
import { StyledButton } from "../global-styles";
import Image from "next/image";
import nikon from "../../assets/svg/nikon-camera.svg";
import Modal from "../../comps/Modal";
import { useRouter } from "next/router";
import { StyledInputText } from "../../styled/register";

const Galleryimage = () => {
  const [request, setRequest] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const router = useRouter();

  const handleRequest = () => {
    console.log("yes cicked");
    setRequest(!request);
  };
  const NavigateRequest = () => {
    router.push("/request-shoot");
  };
  const handleBuy = () => {
    setPaymentModal(!paymentModal);
  };
  return (
    <>
      {request && (
        <Modal>
          <h1 style={{ fontFamily: "Overlock", fontSize: "34px" }}>
            Request a shoot
          </h1>
          <div style={{ margin: "30px 0", textAlign: "center" }}>
            <h3 style={{ fontFamily: "Avenir", fontSize: "24px" }}>
              I want to Request a:
            </h3>
            <div
              style={{
                width: "100%",
                fontWeight: "bold",
                fontFamily: "Avenir",
                margin: "10px 0 20px 0",
                display: "flex",
                textAlign: "center",
                border: "1px solid #333",
                borderRadius: "10px",
                background: "transparent",
              }}
            >
              <div
                style={{ width: "50%", cursor: "pointer", padding: "15px 0" }}
                onClick={NavigateRequest}
              >
                Photo Shoot
              </div>
              <div
                style={{
                  width: "50%",
                  cursor: "pointer",
                  borderRadius: "0 10px 10px 0",
                  padding: "15px 0",
                  height: "fit-content",
                  background: "#1EAAB2",
                }}
                onClick={NavigateRequest}
              >
                Video Shoot
              </div>
            </div>
            <p
              style={{
                fontFamily: "Avenir",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              I will not be able to edit or cancel a request for an expert
              creative after one hour of creating the request
            </p>
          </div>
        </Modal>
      )}

      {paymentModal && (
        <Modal width="800px">
          <div style={{ margin: "40px auto", width: "86%" }}>
            <h1 style={{ fontSize: "24px", fontFamily: "Overlock" }}>
              Load your Viou wallet
            </h1>
            <p
              style={{
                fontFamily: "Avenir",
                color: "#636363",
                fontSize: "15px",
                width: "60%",
              }}
            >
              You need Viou coins to be able to download premium hi-def videos
              and high quality images.
            </p>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div>
                <label
                  style={{
                    color: "#1EAAB2",
                    fontFamily: "Overlock",
                    display: "inline-block",
                    padding: "10px 0",
                  }}
                  htmlFor="coins"
                >
                  Vious Coins
                </label>
                <StyledInputText width="100%" placeholder="100 Coins" />
              </div>
              <div style={{ marginTop: "30px" }}>=</div>
              <div>
                <label
                  style={{
                    color: "#1EAAB2",
                    fontFamily: "Overlock",
                    display: "inline-block",
                    padding: "10px 0",
                  }}
                  htmlFor="coins"
                >
                  Amount (₦){" "}
                </label>
                <StyledInputText width="100%" placeholder="₦5000" />
              </div>
            </div>
            <StyledButton
              style={{ marginTop: "30px" }}
              width="150px"
              background="#1EAAB2"
            >
              pay now
            </StyledButton>
          </div>
        </Modal>
      )}

      <MyLayout>
        <div
          style={{
            width: "100%",
            margin: "40px 0",
            padding: "50px 100px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "60%" }}>
            <div
              style={{
                width: "100%",
                margin: "0 0 30px 0",
                backgroundColor: "gray",
                height: "400px",
                position: "relative",
              }}
            >
              <Image
                alt="Nikon Camera Image"
                src={nikon}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #fff",
                paddingBottom: "30px",
                marginBottom: "30px",
                color: "white",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  fontFamily: "Avenir",
                  fontWeight: 600,
                }}
              >
                <div style={{ fontSize: "18px" }}>I Think I'm Ready Now </div>
                <div style={{ fontSize: "14px" }}>
                  Woman in blazer looking at the reflection in the mirror
                  checking out her outfit
                </div>
              </div>
              <div></div>
            </div>
            <TagList />
          </div>
          <div style={{ width: "40%", fontFamily: "Avenir" }}>
            <div
              style={{
                width: "80%",
                color: "white",
                margin: "0 0 0 20%",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <div style={{ fontSize: "24px", fontWeight: 600 }}>
                    Asabe Vincent
                  </div>
                  <div
                    style={{
                      color: "#CF9F00",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Expert
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Lagos, Nigeria <br />
                  25537 Assets 1204 Followers
                </p>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "20px 0",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <StyledButton background="white" width="140px">
                  hire me
                </StyledButton>
                <StyledButton width="140px" border="white" color="white">
                  follow
                </StyledButton>
              </div>
              <div
                style={{
                  width: "100%",
                  background: "rgba(229, 229, 229, 0.35)",
                  borderRadius: "10px",
                  border: "1px solid transparent",
                }}
              >
                <div style={{ padding: "20px 25px" }}>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      fontFamily: "Avenir",
                    }}
                  >
                    Camera Leica Camera Ag Q (Typ 116) 28.0 mm f/1.7 28.0mm ·
                    ƒ/13.0 · 1/6s · ISO 100
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <div>Video type</div>
                      <div>MP4</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <div>Resolution</div>
                      <div>4K</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <div>Created</div>
                      <div>June 2, 2021</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <div>Last Updated</div>
                      <div>Aug. 27, 2021</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <div>Categories</div>
                      <div>Nature/Landscapes</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <div>Views</div>
                      <div>62762</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <div>Downloads</div>
                      <div>29225</div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    color: "#D5B23F",
                    textAlign: "center",
                    borderBottom: "1px solid #aaa",
                    borderRight: "1px solid #aaa",
                    borderLeft: "1px solid #aaa",
                    borderRadius: "0 0 10px 10px",
                    backgroundColor: "#000",
                    padding: "25px 0",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>Price - 200</span> viou
                  coins
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  gap: "20px",
                }}
              >
                <StyledButton
                  background="#1EAAB2"
                  width="100%"
                  onClick={handleBuy}
                >
                  buy video
                </StyledButton>
                <StyledButton color="white" border="white" width="100%">
                  add to cart
                </StyledButton>
              </div>
            </div>
          </div>
        </div>
        <Folder title="More footage from the same shoot" />
        <hr />
        <Folder title="Similar videos from other Viou creators" />
        <RequestShoot>
          <div style={{ width: "500px", margin: "0 auto" }}>
            <h4 style={{ fontSize: "14px", fontFamily: "Avenir" }}>
              Do you have a custom brief?
            </h4>
            <p
              style={{
                fontSize: "22px",
                padding: "20px",
                fontWeight: "bold",
                fontFamily: "Overlock",
              }}
            >
              Be spoilt for options by get ting multiple entries and
              representations from our vast community of creators when you
              create custom requests.
            </p>
            <StyledButton
              background="#1EAAB2"
              width="300px"
              hover="#1EAAB2"
              hcolor="#000"
              onClick={handleRequest}
            >
              request a shoot
            </StyledButton>
          </div>
        </RequestShoot>
      </MyLayout>
    </>
  );
};

export default Galleryimage;
