import React, { useRef, useState } from "react";
import logo_f from '../../../src/assets/logos/logo-f.png'
import checkmark from "../../../src/assets/auth-images/icons8-checkmark-64 (1).png";
import registerbg from "../../../src/assets/auth-images/registerbg.svg";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
    Background1,
    BlackDiv,
    CentralDiv,
    ContentDiv,
    DescriptionDiv,
    InputWrapper,
    LoginDiv,
    LowerDiv,
    OptionsDiv,
    StyledBtn,
    StyledInput,
    StyledSelect,
    UpperDiv,
    BgImg,
    CenteredDiv,
    RegisterBgImg,
} from "./styles";
import axios from "axios";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import GoogleAuthComponent from "../UI/GoogleAuthComponent";

import { backgroundColors } from "../../constants/backgroundColors";
import { HorizontalRule } from "../UI/HorizontalRule";

const RegisterComponent = () => {
    const registerInputRef = useRef({
        email: "",
        username: "",
        password: "",
        password2: "",
        age: "",
    });

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const submitBtnHandler = async () => {
        if (
            registerInputRef.current.email === "" ||
            registerInputRef.current.username === "" ||
            registerInputRef.current.password === "" ||
            registerInputRef.current.password2 === "" ||
            registerInputRef.current.age === ""
        ) {
            alert("Please enter all fields.");
            return;
        } else {
            if (
                registerInputRef.current.password !==
                registerInputRef.current.password2
            ) {
                alert("Passwords do not match");
            } else if (registerInputRef.current.age < 13) {
                alert("Must be greater than 13 to join");
            } else {
                const payload = {
                    email: registerInputRef?.current.email,
                    name: registerInputRef?.current.username,
                    password: registerInputRef?.current.password,
                    age: registerInputRef?.current.age,
                };

                axios
                    .post(
                        `${process.env.REACT_APP_LOCAL_URL}/user/registerUser`,
                        payload
                    )
                    .then((res) => res.data)
                    .then((res) => {
                        console.log(res.msg);
                        alert(res);
                    })
                    .catch((err) => {
                        console.log(err);
                        alert(err);
                    });
                
                
            }
        }
    };

    return (
        <>
            <BlackDiv>
                <CentralDiv>
                    <UpperDiv>
                        <OptionsDiv>
                            <img className="logo" src={logo_f}></img>
                            <DescriptionDiv>
                                <div className="title">Fortify</div>
                                <div className="bullet-points">
                                    <img
                                        className="check"
                                        src={checkmark}
                                    ></img>
                                    Elevate your game with a crew matching your
                                    gameplay
                                </div>
                                <div className="bullet-points">
                                    <img
                                        className="check"
                                        src={checkmark}
                                    ></img>
                                    Use voice chat to communicate with teammates
                                </div>
                                <div className="bullet-points">
                                    <img
                                        className="check"
                                        src={checkmark}
                                    ></img>
                                    Looking for one more? Find a crew looking
                                    for ranked matches
                                </div>
                            </DescriptionDiv>
                        </OptionsDiv>
                        <ContentDiv>
                            <div className="title">Sign up for Fortify</div>
                            <CenteredDiv>
                                <GoogleAuthComponent
                                    bgColor={
                                        backgroundColors.registerBackgroundColor
                                    }
                                />
                            </CenteredDiv>
                            <CenteredDiv>
                                <HorizontalRule>or</HorizontalRule>
                            </CenteredDiv>
                            <InputWrapper>
                                <StyledInput
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e) =>
                                        (registerInputRef.current.email =
                                            e.target.value)
                                    }
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) =>
                                        (registerInputRef.current.username =
                                            e.target.value)
                                    }
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        (registerInputRef.current.password =
                                            e.target.value)
                                    }
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) =>
                                        (registerInputRef.current.password2 =
                                            e.target.value)
                                    }
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput
                                    type="text"
                                    placeholder="Age"
                                    onChange={(e) =>
                                        (registerInputRef.current.age =
                                            e.target.value)
                                    }
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledBtn
                                    className="submit-btn"
                                    onClick={submitBtnHandler}
                                >
                                    Submit
                                </StyledBtn>
                            </InputWrapper>

                            <InputWrapper>
                                <LoginDiv>
                                    Already have an account?{" "}
                                    <Link
                                        style={{ color: "#4287f5" }}
                                        to="/login"
                                    >
                                        Log in
                                    </Link>
                                </LoginDiv>
                            </InputWrapper>
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv>
                        <Background1
                            className="background1"
                            bgColor={backgroundColors.registerBackgroundColor}
                        />
                        <RegisterBgImg className="bgimg" src={registerbg} />
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    );
};

export default RegisterComponent;
