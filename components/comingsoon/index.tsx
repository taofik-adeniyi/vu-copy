import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./comingsoon.module.scss";
import vioudigital from "../../assets/images/vioudigital.png";

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

const ComingSoon = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState('')
  const [step, setStep] = useState(1)
  const [conerr, setConErr] = useState()

  const [emailError, setEmailError] = useState('')

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
        <div className={classes.no}>{timeLeft[interval]}</div>
        <div className={classes.tick}>{interval}</div>
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
    e.preventDefault()
    if(name === ''){
      setNameError('Name cannot be empty')
    }
    if(email === ''){
      setEmailError('Email cannot be empty')
      return
    }
    try{
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WISH_URL}/users`, {
        name: name,
        email: email
      })
      console.log('wishlist response is', response)
      response.status === 201 ? alert('Thank you we would get in touch with you soon!') : ''
    }catch(error){
      error.response.status === 400 ? alert(`${error.response.data.message}`) : ''
      // console.log('wishlist form error', error.response.statusText)
      setConErr(error)
    }
  }
  
  return (
    <div className={classes.wrap}>
      {/* <div></div> */}
      <div className={classes.logo}>
        <Image src={vioudigital} alt="vioudigital" width={72} height={72} />
      </div>
      <main className={classes.container}>
        <div className={classes.h2}>VIOU Digital Platform</div>
        <div className={classes.description}>
          <ul>
            <li>Access quality videos and photos around Africa in real-time</li>
            <li>Tell your stories your way</li>
            <li>Earn money for your creative talent</li>
          </ul>
        </div>
        <hr className={classes.underline}></hr>

        <div className={classes.counter}>
          {/* <div className={classes.time}>
            <div className={classes.no}>134 or {days}</div>
            <div className={classes.tick}>days</div>
          </div>
          <div className={classes.time}>
            <div className={classes.no}>12 or {hours}</div>
            <div className={classes.tick}>hours</div>
          </div>
          <div className={classes.time}>
            <div className={classes.no}>50 or {minute}</div>
            <div className={classes.tick}>minutes</div>
          </div>
          <div className={classes.time}>
            <div className={classes.no}>33 or {seconds}</div>
            <div className={classes.tick}>seconds</div>
          </div> */}
          <div className={classes.time}>
            {/* {timerComponents.length ? timerComponents[0] : <span>Time's up!</span>} */}
            {timerComponents[0]}
          </div>
          <div className={classes.time}>{timerComponents[1]}</div>
          <div className={classes.time}>{timerComponents[2]}</div>
          <div className={classes.time}>{timerComponents[3]}</div>
          <div></div>
        </div>

        <div className={classes.tao}>
          {step === 1 && <div className={classes.inputWrap}>
            <form onSubmit={handleWishList}>
            <div>
              {/* {conerr && <div style={{color: 'red'}}>{conerr}</div>} */}
                  <div style={{color: 'white', padding: '10px', fontWeight: 'bold'}}>Sign up for our waitlist</div>
              <div className={classes.emaildiv}>
                <input
                className={classes.emailInput}
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  onChange={(e)=> setName(e.target.value)}
                />
              </div>
              {!name ? nameError && <div style={{color: 'red', padding: '0 0 10px 0', textAlign: 'left'}}>{nameError}</div>: ''}
              <div className={classes.emaildiv}>
                <input
                className={classes.emailInput}
                  type="text"
                  id="email"
                  placeholder="Email address"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              {!email ? emailError && <div style={{color: 'red', padding: '0 0 10px 0', textAlign: 'left'}}>{emailError}</div> : ''}
              <div>
                <button
                  type="submit"
                  className={classes.submitInput}
                  style={{cursor: 'pointer'}}
                >get notified</button>
              </div>
            </div>
            </form>
          </div>}
          {step === 2 && <div style={{color: 'white', fontWeight: 'bold', fontSize: '25px', padding: '60px 0 0 0', textAlign: 'center'}}>Thank you we would get in touch with you soon!</div>}
          <div className={classes.gamesWrap}>
            <div className={classes.comingsoon}>Coming soon on</div>
            <div className={classes.games}>
              <div className={`${classes.gamecard} ${classes.gamecardone}`}>
                <div>
                  <FontAwesomeIcon
                    style={{ width: "40px", height: "40px" }}
                    icon={faGooglePlay}
                  />
                </div>
                <div className={classes.nami}>
                  <div className={classes.hgh}>Download on</div>
                  <div className={classes.juki}>google play</div>
                </div>
              </div>
              <div className={classes.gamecard}>
                <div>
                  <FontAwesomeIcon
                    style={{ width: "40px", height: "40px" }}
                    icon={faApple}
                  />
                </div>
                <div className={classes.nami}>
                  <div className={classes.hghg}>Available on the</div>
                  <div className={classes.juki}>app store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={classes.footer}>
        <div className={classes.copy}>
          Copyright &copy; {new Date().getFullYear()} |{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://braintreetechnologies.com.ng"
          >
            Site Credits
          </a>
        </div>
        <div className={classes.socials}>
          <ul>
            <li>
            <a target="_blank" href="https://twitter.com/vioudigital/" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className={classes.tiny} />
              </a>
            </li>
            <li>
            <a target="_blank" href="https://instagram.com/vioudigital/" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className={classes.tiny} />
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} className={classes.tiny} />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
