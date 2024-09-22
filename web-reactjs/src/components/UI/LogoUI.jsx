import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logos/logo-f.png";

const LogoUI = () => {
    return (
        <>
            <CenteredDiv>
                <LogoImg src={Logo} />
            </CenteredDiv>
        </>
    );
};

export default LogoUI;

const LogoImg = styled.img`
    width: 100px;
    height: 100px;

`;

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    
    box-sizing: border-box;
`