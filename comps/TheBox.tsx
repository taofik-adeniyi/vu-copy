import React from 'react'
import {
    Box,
  } from "../styled/home";

const TheBox = () => {
    return (
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
    )
}

export default TheBox