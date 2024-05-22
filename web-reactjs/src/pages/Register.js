import React, { useRef, useState } from 'react'
import styled from "styled-components";
import logo_f from '../../src/assets/logo-f.png'
import checkmark from '../../src/assets/icons8-checkmark-64 (1).png'
import registerbg from '../../src/assets/registerbg.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { Background1, BlackDiv, CentralDiv, ContentDiv, DescriptionDiv, InputWrapper, LoginDiv, LowerDiv, OptionsDiv, StyledBtn, StyledInput, StyledSelect, UpperDiv, BgImg } from './styles';




const Register = () => {
    const registerInputRef = useRef({ email: '', username: '', password: '', password2: '', age: ''});

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const submitBtnHandler = async () => {

        if (registerInputRef.current.email === '' || registerInputRef.current.username === '' || registerInputRef.current.password === '' || registerInputRef.current.password2 === '' || registerInputRef.current.age === '') {
            // don't bother server
            alert("Please enter all fields.")
            return;
        }
        else {
            if (registerInputRef.current.password !== registerInputRef.current.password2) {
                alert('Passwords do not match');
            } 
            else if (registerInputRef.current.age < 13) {
                alert('Must be greater than 13 to join');
            }
            else {
                await axios.post('http://localhost:8080/practice/user/registerUser', {
                    email: registerInputRef.current.email,
                    name: registerInputRef.current.username,
                    age: registerInputRef.current.age,
                    password: registerInputRef.current.password
                })
                .then(response => {
                    if (response.data && response.data.msg === 'failed, already existing user, check registerUser()') {
                        alert('Email is already in use. Please enter a different one.')
                    } else {
                        localStorage.setItem('currentUserEmail', registerInputRef.current.email);
                        queryClient.setQueryData('currentUserEmail', registerInputRef.current.email);
                        
                        navigate('/editProfile');
                        return;
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 409) {
                        alert('Email already exists. Please use a different email or sign in.');
                    } else {
                        alert('An error occurred while submitting the form.');
                        console.error('Error:', error);
                    }
                })

            }
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
                                <div className='title'>Fortify</div>
                                <div className='bullet-points'>
                                    <img className='check' src={checkmark}></img>
                                    Elevate your game with a crew matching your gameplay
                                </div>
                                <div className='bullet-points'>
                                    <img className='check' src={checkmark}></img>
                                    Use voice chat to communicate with teammates
                                </div>
                                <div className='bullet-points'>
                                    <img className='check' src={checkmark}></img>
                                    Looking for one more? Find a crew looking for ranked matches
                                </div>
                            </DescriptionDiv>
                        </OptionsDiv>
                        <ContentDiv>
                            <div className='title'>Sign up for Fortify</div>
                            <InputWrapper>
                                <StyledInput type='text' placeholder='Email' onChange={(e) => registerInputRef.current.email = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput type='text' placeholder='Username' onChange={(e) => registerInputRef.current.username = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput type="password" placeholder='Password' onChange={(e) => registerInputRef.current.password = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput type="password" placeholder='Confirm Password' onChange={(e) => registerInputRef.current.password2 = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput type='text' placeholder='Age' onChange={(e) => registerInputRef.current.age = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledBtn className='submit-btn' onClick={submitBtnHandler}>Submit</StyledBtn>
                            </InputWrapper>
                            
                            <InputWrapper>
                                <LoginDiv>
                                    Already have an account?{" "}
                                    <Link style={{color: "#4287f5"}} to="/login">Log in</Link>
                                </LoginDiv>
                            </InputWrapper>
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv bgColor=''>
                        <Background1 className='background1'/>
                        <BgImg className='bgimg' src={registerbg} left='15em'/>
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
}

export default Register

