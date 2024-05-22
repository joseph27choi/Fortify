import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel/Carousel';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}


const fetchData = async (currentUserEmail) => {
  const response = await axios.get(
      `http://localhost:8080/practice/user/getOneUser`
  );
  return response.data;
};

const Dashboard = () => {


  const [currentUserInfo, setCurrentUserInfo] = useState('');

  const { data } = useQuery({
    queryKey: ["uniqueQueryKey"],
    queryFn: fetchData,
  });

  useEffect(() => {
    if (data) {
      setCurrentUserInfo(data);
    } else {
      setCurrentUserInfo()
    }
  })



  return (
    <>
        <StyledDiv>
            <TitleDiv>
                <div>Good Evening, {capitalize(localStorage.getItem('currentUserEmail'))}</div>
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