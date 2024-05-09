import React, { useRef } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import logo_f from '../../src/assets/logo-f.png'
import checkmark from '../../src/assets/icons8-checkmark-64 (1).png'
import axios from "axios";
import { Link } from 'react-router-dom';
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

const EditProfile = () => {
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
            console.log(homeInputRef)
        }
    }

    return (
        <>
            <BlackDiv>
                <CentralDiv>
                    <UpperDiv>
                        <OptionsDiv>
                            <img className='logo' src={logo_f}></img>
                            <DescriptionDiv>
                                <div className='title'>Tell us about yourself</ div>
                                <div className='bullet-points'>
                                    <img className='check' src={checkmark}></img>
                                    Fill in the details so we can match you with a teammate whose style fits you best
                                </div>
                            </DescriptionDiv>
                        </OptionsDiv>
                        <ContentDiv>
                            <div className='title'>Profile Settings</div>
                            <InputWrapper>
                                <StyledInput type='text' placeholder='Fortnite ID' onChange={(e) => homeInputRef.current.fortID = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledSelect onChange={(e) => homeInputRef.current.mainWeapon = e.target.value}>
                                    <option value="" disabled selected>Select Gun...</option>
                                    <option value="scar">SCAR</option>
                                    <option value="shotgun">Shotgun</option>
                                    <option value="sniper">Sniper</option>
                                </StyledSelect>
                            </InputWrapper>
                            <InputWrapper>
                                <StyledSelect onChange={(e) => homeInputRef.current.rank = e.target.value}>
                                    <option value="" disabled selected>Select Rank...</option>
                                    <option value="scar">Bronze</option>
                                    <option value="shotgun">Silver</option>
                                    <option value="sniper">Gold</option>
                                    <option value="sniper">Platinum</option>
                                    <option value="sniper">Diamond</option>
                                </StyledSelect>
                            </InputWrapper>
                            <InputWrapper>
                                <StyledSelect onChange={(e) => homeInputRef.current.crewPref = e.target.value}>
                                    <option value="" disabled selected>Select Crew Size...</option>
                                    <option value="scar">Duos</option>
                                    <option value="shotgun">Trios</option>
                                    <option value="sniper">Full Squad</option>
                                </StyledSelect>
                            </InputWrapper>
                            <InputWrapper>
                                <StyledBtn className='submit-btn' onClick={submitBtnHandler}>Submit</StyledBtn>
                            </InputWrapper>
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv>
                        <div className='background1'></div>
                        <img className='bgimg' src={crewbg}></img>
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
};

export default EditProfile;

const BlackDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
    background-color: black;
`

const CentralDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50rem;
    height: 40rem;
    background-color: #2d2d2d;
`

const OptionsDiv = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    margin-top: 18em;
    .logo {
        position: absolute;
        top: 0px;
        left: 0px;
    }
`

const DescriptionDiv = styled.div`
    color: white;
    width: 80%;
    .title {
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1.8em;
    }
    .bullet-points {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
    }
    
    .check {
        height: 35px;
    }
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    width: 50%;
    height: 100%;
    .title {
        font-size: 26px;
        font-weight: bold;
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
        background-color: ivory;
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
    width: 10em;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const LowerDiv = styled.div`
    position: absolute;
    z-index: 1;
    background-color: rgba(244, 244, 244, 1);
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    .background1{
        width: 50%;
        height: 100%;
        background-color: #6e2a5d;
    }
    .bgimg{
        position: absolute;
        min-height: 125px;
        max-height: 300px;
        height: 40%;
        bottom: 0px;
        left: 12em;
    }
`


const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledSelect = styled.select`
    font-size: 22px;
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;

    width: 59%;

    &:invalid {
        background-color: ivory;
        border: none;
        outline: 2px solid red;
        border-radius: 5px;
    }
`;
