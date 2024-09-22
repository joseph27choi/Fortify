import React from "react";
import { BottomOptionsDiv, MenuBorderDiv, MenuIcon, MenuOptionsDiv, OptionsDiv, SignOutDiv, StyledLi, StyledUl, TopOptionsDiv } from "./styles";
import LogoUI from "../UI/LogoUI";
import { useNavigate } from "react-router-dom";

import dashboardIcon from "../../assets/menu-icons/dashboard.png";
import messageIcon from "../../assets/menu-icons/message.png";
import eventsIcon from "../../assets/menu-icons/events.png";
import accountIcon from "../../assets/menu-icons/account.png";
import signoutIcon from "../../assets/menu-icons/signout.png";


const MenuBarComponent = ({ highlightedItem = "dashboard" }) => {
    const navigate = useNavigate();

    const handleNavigation = (urlStr) => {
        navigate(urlStr);
    };

    const handleSignOut = () => {
        
    }

    return (
        <MenuBorderDiv>
            <MenuOptionsDiv className="top-options-div">
                <LogoUI />
                <StyledUl>
                    <StyledLi className={highlightedItem == "dashboard" ? "highlighted" : ""} onClick={() => handleNavigation("/dashboard")}>
                        <MenuIcon src={dashboardIcon} />
                        <div>Dashboard</div>
                    </StyledLi>
                    <StyledLi className={highlightedItem == "messages" ? "highlighted" : ""} onClick={() => handleNavigation("/messages")}>
                        <MenuIcon src={messageIcon} />
                        <div>Messages</div>
                    </StyledLi>
                    <StyledLi className={highlightedItem == "events" ? "highlighted" : ""} onClick={() => handleNavigation("/events")}>
                        <MenuIcon src={eventsIcon} />
                        <div>Events</div>
                    </StyledLi>
                </StyledUl>
            </MenuOptionsDiv>
            <MenuOptionsDiv className="bottom-options-div">
                <StyledUl>
                    <StyledLi className={highlightedItem == "account" ? "highlighted" : ""} onClick={() => handleNavigation("/account")}>
                        <MenuIcon src={accountIcon} />
                        Account
                    </StyledLi>
                    <StyledLi className={highlightedItem == "sign-out" ? "highlighted" : ""} onClick={handleSignOut}>
                        <MenuIcon src={signoutIcon} />
                        Sign Out
                    </StyledLi>
                </StyledUl>
            </MenuOptionsDiv>
        </MenuBorderDiv>
    );
};

export default MenuBarComponent;
