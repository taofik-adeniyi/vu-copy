import React from "react";
import Image from "next/image";

const confirmemail = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '55%', minHeight: '100vh'}}>
          <div style={{margin: '100px 50px 0 100px'}}>
          <h1 style={{color: '#00F0FE', fontFamily: 'Overlock', fontSize: '36px'}}>You're a click closer to becoming part of the Viou community.</h1>
          <p style={{color: 'white', fontFamily: 'Avenir', fontSize: '20px'}}>
          A verfication link has been sent to you email asa****nt@g**il.com. go to your mailbox to verify you Viou account.
          </p>
          </div>
      </div>
      <div style={{ width: "45%", backgroundColor: '#C4C4C4', minHeight: "100vh", position: "relative" }}>
        <Image
          alt="Confirmation email background image"
          src="/confirm-email.svg"
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default confirmemail;
