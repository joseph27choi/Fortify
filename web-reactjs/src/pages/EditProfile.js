import React, { useRef } from "react";
import Profile from "../components/Profile/Profile";
import styled from "styled-components";

const EditProfile = () => {

    return (
        <>
            <BlackDiv>
                <Profile />
            </BlackDiv>
        </>
    )
};

export default EditProfile;

export const BlackDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 

    color: white;

    height: 100vh;
    background-color: black;
`