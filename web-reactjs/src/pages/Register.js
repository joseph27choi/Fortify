import React, { useRef, useState } from 'react'
import styled from "styled-components";
import imgShowEye from '../../src/assets/showeye.svg'
import imgHideEye from '../../src/assets/hideeye.svg'
import registerbg from '../../src/assets/registerbg.svg'
import axios from 'axios';

const Register = () => {
    const registerInputRef = useRef({ email: '', username: '', password: '', password2: '', age: '' });

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleClickShowButton = (field) => {
        if (field == "pw") {
            setShowPassword(!showPassword)
        } else if (field == "pw2") {
            setShowPassword2(!showPassword2)
        }
    }

    const submitBtnHandler = async () => {
        console.log(registerInputRef);
        // exception handling
        if (registerInputRef.current.email === '' || registerInputRef.current.username === '' || registerInputRef.current.password === '' || registerInputRef.current.password2 === '' || registerInputRef.current.age === '') {
            // don't bother server
            alert("Please enter all fields.")
            return;
        }
        else {
            if (registerInputRef.current.password !== registerInputRef.current.password2) {
                alert('Passwords do not match')
            } else {
                await axios.post('http://localhost:8080/practice/user/registerUser', {
                    email: registerInputRef.current.email,
                    name: registerInputRef.current.username,
                    age: registerInputRef.current.age,
                    password: registerInputRef.current.password
                }).then({ function(response) {
                    console.log(response)
                }
                }).catch({ function(error){
                    console.log(error)
                }
                });
                alert("submitted")
            }
        }
    }

    return (
        <>
            <BlackDiv>
                <UpperDiv>
                    <ContentDiv>
                        <div className='title'>Register</div>
                        <InputWrapper>
                            <StyledInput type='text' placeholder='Email' onChange={(e) => registerInputRef.current.email = e.target.value} />
                        </InputWrapper>
                        <InputWrapper>
                            <StyledInput type='text' placeholder='Username' onChange={(e) => registerInputRef.current.username = e.target.value} />
                        </InputWrapper>
                        <InputWrapper>
                            <StyledInput type={showPassword ? "text" : "password"} placeholder='Password' onChange={(e) => registerInputRef.current.password = e.target.value} />
                            <button type='button' onClick={() => handleClickShowButton("pw")}>
                                {showPassword ? (
                                    <StyledIcon src={imgShowEye} alt='show eye'></StyledIcon>
                                ) : (
                                    <StyledIcon src={imgHideEye} alt='hide eye'></StyledIcon>)
                                }
                            </button>
                        </InputWrapper>
                        <InputWrapper>
                            <StyledInput type={showPassword2 ? "text" : "password"} placeholder='Confirm Password' onChange={(e) => registerInputRef.current.password2 = e.target.value} />
                            <button type='button' onClick={() => handleClickShowButton("pw2")}>
                                {showPassword2 ? (
                                    <StyledIcon src={imgShowEye} alt='show eye'></StyledIcon>
                                ) : (
                                    <StyledIcon src={imgHideEye} alt='hide eye'></StyledIcon>)
                                }
                            </button>
                        </InputWrapper>
                        <InputWrapper>
                            <StyledInput type='text' placeholder='Age' onChange={(e) => registerInputRef.current.age = e.target.value}></StyledInput>
                        </InputWrapper>
                        <StyledBtn className='submit-btn' onClick={submitBtnHandler}>Submit</StyledBtn>
                    </ContentDiv>
                </UpperDiv>
                <LowerDiv>
                    <div className='background1'></div>
                    <img src={registerbg}></img>
                </LowerDiv>
            </BlackDiv>
        </>
    )
}

export default Register

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
        background-color: #D2EBD1;
        ;
    }
    &:img{
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