import React, { useRef } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import crewbg from "../../src/assets/crewbg.svg"

// const getServerData = async () => {
//   const data = await fetch("http://localhost:8080/api/user/getAllUsers").then(
//     (response) => response.json()
//   );
//   return data;
// };

const fetchData = async () => {
  const response = await axios.get(
    `http://localhost:8080/practice/user/getAllUser`
  );
  return response.data;
};

const Home = () => {
  const { data } = useQuery({
    queryKey: ["uniqueQueryKey"],
    queryFn: fetchData,
  });

  console.log(data);

  const homeInputRef = useRef({ fortID: '', mainWeapon: '', rank: '', crewPref: '' });

  const submitBtnHandler = () => {
    // exception handling
    if (homeInputRef.current.fortID == '' || homeInputRef.current.mainWeapon == '' || homeInputRef.current.rank == '' || homeInputRef.current.crewPref == '') {
      alert('Please enter all fields')
    } else {
      alert('Submitted')
    }
}

  return (
    <>
        <BlackDiv>
            <UpperDiv>
                <ContentDiv>
                    <div className='title'>Profile</div>
                    <InputWrapper>
                        <StyledInput type='text' placeholder='Fortnite ID' onChange={(e) => homeInputRef.current.fortID = e.target.value} />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="text" placeholder='Main weapon' onChange={(e) => homeInputRef.current.mainWeapon = e.target.value} />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="text" placeholder='Confirm Password' onChange={(e) => homeInputRef.current.rank = e.target.value} />
                    </InputWrapper>
                    <InputWrapper>
                            <StyledInput type='text' placeholder='Age' onChange={(e) => homeInputRef.current.crewPref = e.target.value}></StyledInput>
                    </InputWrapper>
                    <StyledBtn className='submit-btn' onClick={submitBtnHandler}>Submit</StyledBtn>
                </ContentDiv>
            </UpperDiv>
            <LowerDiv>
                <div className='background1'></div>
                <img src={crewbg}></img>
            </LowerDiv>
        </BlackDiv>
    </>
)
};

export default Home;

const BlackDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 

    height: 100vh;
    background-color: black;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;

    width: 70%;
    height: 100%;

    .title {
        font-size: 26px;
        text-align: center;
        margin-bottom: 1em;
    }
`

const StyledInput = styled.input`
    font-size: 22px;
    border: none;
    border-bottom: 2px solid black;

    background-color: transparent;

    &:invalid {
        /* background-color: ivory; */
        border: none;
        outline: 2px solid red;
        border-radius: 5px;
    }
`

const StyledBtn = styled.button`
    box-shadow: 0 8px #999;
    font-size: 25px;
    border: none;
    padding: 0.3em 0.25em;


    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 15px;

    background-color: rgb(219, 216, 216);


    &:hover {
        background-color: rgb(223, 223, 223);
        color: rgb(22, 25, 22);
    }
    &:active {
        transform: translateY(3px);
        box-shadow: 0 5px #999;
    }
`

const UpperDiv = styled.div`
    position: absolute;
    z-index: 2;
    background-color: transparent;
    
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30em;
    width: 25em;

`

const LowerDiv = styled.div`
    position: absolute;
    z-index: 1;
    background-color: rgba(244, 244, 244, 1);

    display: flex;
    flex-direction: row;

    height: 30em;
    width: 25em;

    .background1{
        width: 35%;
        height: 100%;
        background-color: #D1EBE9;
    }
    &>img{
        position: absolute;
        min-height: 270px;
        max-height: 500px;
        height: 40%;
        bottom: 0px;
        right: 0px;
    }
`


const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
`


const StyledIcon = styled.img`
    width: 10px;
    height: 10px;
`