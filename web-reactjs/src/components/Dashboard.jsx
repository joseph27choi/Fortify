import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel/Carousel';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGetOneUser } from '../api/hooks/mutators';



const Dashboard = () => {

  return (
    <>
      <StyledDiv>
        <TitleDiv>
          <div>Good Evening</div>
          <div>Choose your squad</div>
        </TitleDiv>
        <Carousel></Carousel>
      </StyledDiv>
    </>
  )
}

export default Dashboard

const StyledDiv = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    background-color: #211d1d;
`

const TitleDiv = styled.div`
  font-size: 26px;

`