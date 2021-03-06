import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/comingsoon.module.scss";
import vioudigital from "../../assets/images/vioudigital.png";
import { message } from "antd";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faGooglePlay,
  faApple,
  faTwitter,
  faLinkedin,
  faGoogle,
  faSkype,
  faInstagram,
  faFacebook,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "antd/dist/antd.css";

const ComingSoon = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [step, setStep] = useState(1);
  const [conerr, setConErr] = useState();
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`12/1/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft]: any = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <>
        <div className={styles.no}>{timeLeft[interval]}</div>
        <div className={styles.tick}>{interval}</div>
      </>
    );
  });

  const [now] = useState(new Date().getTime());
  var [countDownDate] = useState(new Date("Jan 5, 2022 15:37:25").getTime());
  const [distance] = useState(countDownDate - now);
  const [seconds, setSeconds] = useState(
    Math.floor((distance % (1000 * 60)) / 1000)
  );
  const [minute, setMinute] = useState(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [hours, setHours] = useState(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const [days, setDays] = useState(
    Math.floor(distance / (1000 * 60 * 60 * 24))
  );
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  useEffect(() => {}, []);
  const handleWishList = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (name === "") {
      setNameError("Name cannot be empty");
    }
    if (email === "") {
      setEmailError("Email cannot be empty");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_WISH_URL}/users`,
        {
          name: name,
          email: email,
        }
      );
      console.log("wishlist response is", response);
      if (response.status === 201) {
        setLoading(false);
        message.success({
          content: "Thank you we would get in touch with you soon!",
          duration: 5,
        });
        setName("");
        setEmail("");
      }
    } catch (error: any) {
      message.error(`${error?.response?.data?.message || "connection error"}`);
      // error.response.status === 400 ? alert(`${error.response.data.message}`) : ''
      // console.log('wishlist form error', error.response.statusText)
      setName("");
      setEmail("");
      setConErr(error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <Image src={vioudigital} alt="vioudigital" width={72} height={72} />
      </div>
      <main className={styles.container}>
        <div className={styles.h2}>VIOU Digital Platform</div>
        <div className={styles.description}>
          <ul>
            <li>Access quality videos and photos around Africa in real-time</li>
            <li>Tell your stories your way</li>
            <li>Earn money for your creative talent</li>
          </ul>
        </div>
        <hr className={styles.underline}></hr>

        <div className={styles.counter}>
          <div className={styles.time}>
            {/* {timerComponents.length ? timerComponents[0] : <span>Time's up!</span>} */}
            {timerComponents[0]}
          </div>
          <div className={styles.time}>{timerComponents[1]}</div>
          <div className={styles.time}>{timerComponents[2]}</div>
          <div className={styles.time}>{timerComponents[3]}</div>
          <div></div>
        </div>

        <div className={styles.tao}>
          {step === 1 && (
            <div className={styles.inputWrap}>
              <form onSubmit={handleWishList}>
                <div>
                  {/* {conerr && <div style={{color: 'red'}}>{conerr}</div>} */}
                  <div
                    style={{
                      color: "white",
                      padding: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Sign up for our waitlist
                  </div>
                  <div className={styles.emaildiv}>
                    <input
                      className={styles.emailInput}
                      type="text"
                      id="name"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {!name
                    ? nameError && (
                        <div
                          style={{
                            color: "red",
                            padding: "0 0 10px 0",
                            textAlign: "left",
                          }}
                        >
                          {nameError}
                        </div>
                      )
                    : ""}
                  <div className={styles.emaildiv}>
                    <input
                      className={styles.emailInput}
                      type="text"
                      id="email"
                      placeholder="Email address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {!email
                    ? emailError && (
                        <div
                          style={{
                            color: "red",
                            padding: "0 0 10px 0",
                            textAlign: "left",
                          }}
                        >
                          {emailError}
                        </div>
                      )
                    : ""}
                  <div>
                    <button
                      type="submit"
                      className={styles.submitInput}
                      style={{ cursor: "pointer" }}
                    >
                      {loading ? "..sending" : "get notified"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          {step === 2 && (
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "25px",
                padding: "60px 0 0 0",
                textAlign: "center",
              }}
            >
              Thank you we would get in touch with you soon!
            </div>
          )}
          <div className={styles.gamesWrap}>
            <div className={styles.comingsoon}>Coming soon on</div>
            <div className={styles.games}>
              <div className={`${styles.gamecard} ${styles.gamecardone}`}>
                <div>
                  <FontAwesomeIcon
                    style={{ width: "40px", height: "40px" }}
                    icon={faGooglePlay}
                  />
                </div>
                <div className={styles.nami}>
                  <div className={styles.hgh}>Download on</div>
                  <div className={styles.juki}>google play</div>
                </div>
              </div>
              <div className={styles.gamecard}>
                <div>
                  <FontAwesomeIcon
                    style={{ width: "40px", height: "40px" }}
                    icon={faApple}
                  />
                </div>
                <div className={styles.nami}>
                  <div className={styles.hghg}>Available on the</div>
                  <div className={styles.juki}>app store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.copy}>
          Copyright &copy; {new Date().getFullYear()} |{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://braintreetechnologies.com.ng"
          >
            Site Credits
          </a>
        </div>
        <div className={styles.socials}>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/vioudigital/"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className={styles.tiny} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/vioudigital/"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className={styles.tiny} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://facebook.com/VIOUDigital/"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className={styles.tiny} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
