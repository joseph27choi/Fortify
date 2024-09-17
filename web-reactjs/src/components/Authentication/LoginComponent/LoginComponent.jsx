import React, { useEffect, useRef, useState } from 'react'
import logo_f from '../../../../src/assets/logo-f.png'
import checkmark from '../../../../src/assets/icons8-checkmark-64 (1).png'
import loginbg from '../../../../src/assets/loginbg.svg'
import { Link, useNavigate } from 'react-router-dom';
import { Background1, BlackDiv, CentralDiv, ContentDiv, DescriptionDiv, InputWrapper, LoginDiv, LowerDiv, OptionsDiv, StyledBtn, StyledInput, StyledSelect, UpperDiv, BgImg } from './styles';
import axios from 'axios';
import { usePostLogin } from '../../../api/hooks/mutators';
import Cookies from 'universal-cookie';
import { cookie } from '../../../data/cookie';
import GoogleAuthComponent from '../../UI/GoogleAuthComponent';
import { CenteredDiv } from '../RegisterComponent/styles';
import { HorizontalRule } from '../../UI/HorizontalRule';
import { backgroundColors } from '../../../constants/backgroundColors';

const loginBackgroundColor = backgroundColors.loginBackgroundColor;


const LoginComponent = () => {
    const loginInputRef = useRef({ email: '', password: '' });

    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false)

    const LoginAPI = usePostLogin();

    const submitBtnHandler = async () => {

        if (submitted) {
            alert('already submitted')
            return;
        }
        // exception handling
        if (loginInputRef.current.email === '' || loginInputRef.current.password === '') {
            // don't bother server
            alert("Please enter all fields.")
            return;
        }
        else {
            // successful login
            LoginAPI.mutate({ email: loginInputRef.current.email, password: loginInputRef.current.password })
            console.log('penis', LoginAPI)
            if (LoginAPI?.loginMsg?.code === 200) {
                alert('going home')
            } else if (LoginAPI?.loginMsg?.code === 401) {
                alert('user does not exist')
            } else if (LoginAPI?.loginMsg?.code === 500) {
                alert('server error. please try again later')
            }
        }

    };

    useEffect(() => {
        if (LoginAPI?.isSuccess) {
            cookie.set("Authorization", LoginAPI?.data?.data?.token);
            navigate("/home");
        }
    }, [LoginAPI?.isSuccess]);

    console.log('successful login', LoginAPI?.isSuccess)

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
                            <CenteredDiv>
                                <GoogleAuthComponent bgColor={loginBackgroundColor} />
                            </CenteredDiv>
                            <CenteredDiv>
                                <HorizontalRule>or</HorizontalRule>
                            </CenteredDiv>
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
                                    <Link style={{ color: "#4287f5" }} to="/">Create one</Link>
                                </LoginDiv>
                            </InputWrapper>
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv >
                        <Background1 className='background1' />
                        <BgImg className='bgimg' src={loginbg} />
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
}

export default LoginComponent