import styled from "styled-components";
import { backgroundColors } from "../constants/backgroundColors";

export const BackgroundDiv = styled.div`
    background-color: black;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const bodyPanelColor = backgroundColors.bodyContainerColor;

export const ContainerDiv = styled.div`
    width: 90%;
    height: 90%;
    background-color: ${bodyPanelColor};

    border-radius: 13px;
`
