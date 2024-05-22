import React, { useRef, useState } from 'react'
import logo_f from '../../src/assets/logo-f.png'
import checkmark from '../../src/assets/icons8-checkmark-64 (1).png'
import loginbg from '../../src/assets/loginbg.svg'
import { Link, useNavigate } from 'react-router-dom';
import { Background1, BlackDiv, CentralDiv, ContentDiv, DescriptionDiv, InputWrapper, LoginDiv, LowerDiv, OptionsDiv, StyledBtn, StyledInput, StyledSelect, UpperDiv, BgImg } from './styles';
import axios from 'axios';

const Login = () => {
    const loginInputRef = useRef({ email: '', password: '' });

    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false)

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
            await axios.post('http://localhost:8080/practice/user/loginUser', {
                email: loginInputRef.current.email,
                password: loginInputRef.current.password
            })
            .then(response => {
                if (response?.data.msg.loginMsg.msg && response?.data.msg.loginMsg.msg === 'OK. Request was successful.') {
                    setSubmitted(true);
                    alert('going home')
                    navigate('/home');
                } else {
                    console.log(response?.data.msg.loginMsg.msg)
                    alert(`${loginInputRef.current.email} does not exist.`)
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
                                    <Link style={{color: "#4287f5"}} to="/">Create one</Link>
                                </LoginDiv>
                            </InputWrapper>
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv >
                        <Background1 className='background1' bgColor='#574829' />
                        <BgImg className='bgimg' src={loginbg} />
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
}

export default Login