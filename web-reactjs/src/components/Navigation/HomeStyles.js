import styled from "styled-components";

export const BlackDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
    background-color: black;
`

export const CentralDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #2d2d2d;
`

export const OptionsDiv = styled.div`
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    background-color: black;
`

export const LogoDiv = styled.div`
    width: 100%;
    flex-direction: row;

    .logo {
        position: absolute;
        top: 2px;
        left: 3px;
    }

    .logo-div {
        height: 100px;
        width: 100%;
    }
`

export const SideNav = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .spacer {
        width: 100%;
        height: 95%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const DescriptionDiv = styled.div`
    color: white;

    background-color: black;

    width: 100%;

    .bullet-points {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 15px;
        font-weight: bold;

        padding: 0.5rem;
    }
    .check {
        margin: 0.5rem;
        height: 25px;
    }
`


export const AccountDiv = styled.div`
    width: 100%;
    color: white;

    background-color: black;

    width: 100%;

    .bullet-points {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 15px;
        font-weight: bold;

        padding: 0.5rem;
    }
    .check {
        margin: 0.5rem;
        height: 25px;
    }
`

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;

    background-color: #2b2b2b;

    width: 85%;
    height: 100%;
    .title {
        font-size: 26px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1em;
    }
`



export const UpperDiv = styled.div`
    position: absolute;
    z-index: 2;
    background-color: rosybrown;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const LowerDiv = styled.div`
    position: absolute;
    z-index: 1;
    background-color: rgba(244, 244, 244, 1);
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    .background1{
        width: 20%;
        height: 100%;
        background-color: #1d241f;
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