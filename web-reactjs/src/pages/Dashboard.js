import React, { useRef } from "react";
import MenuBar from "../components/MenuBar/MenuBarComponent";
import { BackgroundDiv, ContainerDiv } from "./GenericPageStyles";

const Dashboard = () => {
    return (
        <>
            <BackgroundDiv>
                <ContainerDiv>
                    <MenuBar highlightedItem="dashboard"/>
                </ContainerDiv>
            </BackgroundDiv>
        </>
    );
};

export default Dashboard;
