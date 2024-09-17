import React, { useRef } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import logo_f from '../../src/assets/logo-f.png'
import fortify from '../../src/assets/fortify.png'
import ballot from '../../src/assets/ballot.png'
import edit from '../../src/assets/edit.png'
import calendar from '../../src/assets/calendar.png'
import logout from '../../src/assets/logout.png'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import crewbg from "../../src/assets/crewbg.svg"
import Dashboard from "../components/Dashboard";
import { BlackDiv, CentralDiv, OptionsDiv, LogoDiv, SideNav, DescriptionDiv, AccountDiv, ContentDiv, UpperDiv, LowerDiv } from "../components/Navigation/styles";
import Navigation from "../components/Navigation/Navigation";
import { useGetAllUsers, useGetOneUser } from "../api/hooks/fetchers";


const Home = () => {

    return (
        <>
            <BlackDiv>
                <CentralDiv>
                    <UpperDiv>
                        <Navigation />
                        {/* Content */}
                        <ContentDiv>
                            <Dashboard />
                        </ContentDiv>
                    </UpperDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
};

export default Home;

