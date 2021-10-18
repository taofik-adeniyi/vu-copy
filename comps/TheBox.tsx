import React from 'react'
import {
    Box, TheBoxWrapper, TheBoxSubWrapper
  } from "../styled/home";

const TheBox = () => {
    return (
        <TheBoxWrapper>
        <h2>
          Top Three Viou Creators for the Week
        </h2>
        <TheBoxSubWrapper>
          <Box />
          <Box />
          <Box />
        </TheBoxSubWrapper>
      </TheBoxWrapper>
    )
}

export default TheBox