import React, { useRef, useState } from 'react'
import styled from "styled-components";
import logo_f from '../../src/assets/logo-f.png'
import checkmark from '../../src/assets/icons8-checkmark-64 (1).png'
import loginbg from '../../src/assets/loginbg.svg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const loginInputRef = useRef({ email: '', password: '' });

    const navigate = useNavigate();

    const submitBtnHandler = async () => {
        console.log(loginInputRef);
        // exception handling
        if (loginInputRef.current.email === '' || loginInputRef.current.password === '') {
            // don't bother server
            alert("Please enter all fields.")
            return;
        }
        else {
            await axios.post('http://localhost:8080/practice/user/loginUser', {
                email: loginInputRef.current.email,
                password: loginInputRef.current.password
            })
            .then(response => {
                if (response?.data.msg.loginMsg.msg && response?.data.msg.loginMsg.msg === 'OK. Request was successful.') {
                    navigate('/home');
                }
            })
            .catch(error => {
                console.log(error)
            });

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
                                <div className='title'>Welcome Back!</div>
                                <div className='bullet-points'>
                                    <img className='check' src={checkmark}></img>
                                    Sign in and meet with your team. It's time to win it all.
                                </div>
                                <div className='bullet-points'>
                                    <img className='check' src={checkmark}></img>
                                    Remember to use the party chat feature to get the most out of Fortify
                                </div>
                            </DescriptionDiv>
                        </OptionsDiv>
                        <ContentDiv>
                            <div className='title'>Sign in to Fortify</div>
                            <InputWrapper>
                                <StyledInput type='text' placeholder='Email' onChange={(e) => loginInputRef.current.email = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput type="password" placeholder='Password' onChange={(e) => loginInputRef.current.password = e.target.value} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledBtn className='submit-btn' onClick={submitBtnHandler}>Submit</StyledBtn>
                            </InputWrapper>
                            <InputWrapper>
                                <LoginDiv>
                                    Don't have an account yet?{" "}
                                    <Link to="/">Create one</Link>
                                </LoginDiv>
                            </InputWrapper>
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv>
                        <div className='background1'></div>
                        <img className='bgimg' src={loginbg}></img>
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
}

export default Login

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
    /* background-color: rosybrown; */
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
        background-color: #876464;
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

const LoginDiv = styled.div`
    
`