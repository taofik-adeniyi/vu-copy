import React from "react";
import Image from "next/image";
import { ConfirmEmailWrap, ConfirmImageWrap, Confirm, ConfirmSubDiv } from "../styled/confirm-email";
import Header from '../comps/Header'

const confirmemail = () => {
  return (
    <div style={{position: 'absolute', width: '100%'}}>
    <Header noheader={true} />
    <ConfirmEmailWrap>
      <Confirm>
          <ConfirmSubDiv>
          <h1 style={{color: '#00F0FE', fontFamily: 'Overlock', fontSize: '36px'}}>You&apos;re a click closer to becoming part of the Viou community.</h1>
          <p style={{color: 'white', fontFamily: 'Avenir', fontSize: '20px'}}>
          A verfication link has been sent to you email asa****nt@g**il.com. go to your mailbox to verify you Viou account.
          </p>
          </ConfirmSubDiv>
      </Confirm>
      <ConfirmImageWrap>
        <Image
          alt="Confirmation email background image"
          src="/confirm-email.svg"
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </ConfirmImageWrap>
    </ConfirmEmailWrap>
    </div>
  );
};

export default confirmemail;
