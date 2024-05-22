import React, { useRef } from "react";
import styled from "styled-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import logo_f from '../../src/assets/logo-f.png'
import checkmark from '../../src/assets/icons8-checkmark-64 (1).png'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { Background1, BlackDiv, CentralDiv, ContentDiv, DescriptionDiv, InputWrapper, LoginDiv, LowerDiv, OptionsDiv, StyledBtn, StyledInput, StyledSelect, UpperDiv } from './styles';
import crewbg from "../../src/assets/crewbg.svg"


const EditProfile = () => {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const email = queryClient.getQueryData('currentUserEmail') ? queryClient.getQueryData('currentUserEmail') : localStorage.getItem('currentUserEmail');

    const homeInputRef = useRef({ fortID: '', mainWeapon: '', rank: '', crewPref: '' });

    const submitBtnHandler = async () => {
        // exception handling
        if (homeInputRef.current.fortID == '' || homeInputRef.current.mainWeapon == '' || homeInputRef.current.rank == '' || homeInputRef.current.crewPref == '') {
            alert('Please enter all fields')
            return;
        } else {
            try {
                // check email
                if (!email) {
                    alert('no email')
                    return;
                }

                // Check Fortnite ID
                const responseCheckFortID = await axios.patch(`http://localhost:8080/practice/user/checkFortID`, { email, fortID: homeInputRef.current.fortID });
                if (responseCheckFortID.data.msg !== "success") {
                    alert('The Fortnite ID is already taken. Please choose a different one.');
                    console.log(responseCheckFortID)
                    return;
                }

                console.log(homeInputRef.current)

                const responseUpdateRankAndPref = await axios.patch(`http://localhost:8080/practice/user/editRankAndPref`, {
                    email,
                    mainWeapon: homeInputRef.current.mainWeapon,
                    rank: homeInputRef.current.rank,
                    crewPref: homeInputRef.current.crewPref
                });

                if (responseUpdateRankAndPref.data.msg === "success") {
                    alert("Profile updated successfully!");

                    navigate('/home');
                } else {
                    alert("Error updating profile.");
                }
            } catch (error) {
                console.error('Error during the API request:', error);
                alert('An error occurred. Please try again later.');
            }

        }
    };

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
                                    <option value="bronze">Bronze</option>
                                    <option value="silver">Silver</option>
                                    <option value="gold">Gold</option>
                                    <option value="platinum">Platinum</option>
                                    <option value="diamond">Diamond</option>
                                </StyledSelect>
                            </InputWrapper>
                            <InputWrapper>
                                <StyledSelect onChange={(e) => homeInputRef.current.crewPref = e.target.value}>
                                    <option value="" disabled selected>Select Crew Size...</option>
                                    <option value="duos">Duos</option>
                                    <option value="trios">Trios</option>
                                    <option value="squad">Full Squad</option>
                                </StyledSelect>
                            </InputWrapper>
                            <InputWrapper>
                                <StyledBtn className='submit-btn' onClick={submitBtnHandler}>Submit</StyledBtn>
                            </InputWrapper>
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv>
                        <Background1 className='background1' bgColor='#4d2c52'/>
                        <img className='bgimg' src={crewbg}></img>
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
};

export default EditProfile;