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
import { BlackDiv, CentralDiv, OptionsDiv, LogoDiv, SideNav, DescriptionDiv, AccountDiv, ContentDiv, UpperDiv, LowerDiv } from "../components/Navigation/HomeStyles";


const fetchData = async (currentUserEmail) => {
    console.log('Fetching data for email:', currentUserEmail); // Debug log
    const response = await axios.get(
        `http://localhost:8080/practice/user/getOneUser`,
        { data: { email: currentUserEmail } } // Send email in the request body
    );
    return response.data;
};

const Home = () => {
    const navigate = useNavigate();

    // Get current user email from localStorage
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    console.log('Current user email from localStorage:', currentUserEmail); // Debug log

    // Call fetchData with currentUserEmail
    const { data, isLoading, error } = useQuery({
        queryKey: ["user", currentUserEmail],
        queryFn: () => fetchData(currentUserEmail), // Pass currentUserEmail as argument
        enabled: !!currentUserEmail, // Only run the query if currentUserEmail exists
    });
    
    console.log('data', data);

    const dashboardButtonHandler = () => {
        // do nothing
    }

    const profileButtonHandler = () => {
        navigate('/editProfile')
    }

    const scheduleButtonHandler = () => {
        navigate('/')
    }

    const signoutButtonHandler = () => {
        navigate('/')
    }

    return (
        <>
            <BlackDiv>
                <CentralDiv>
                    <UpperDiv>
                        <OptionsDiv>
                            <LogoDiv>
                                <img className="logo" src={fortify}></img>
                                <div className="logo-div"></div>
                            </LogoDiv>
                            <SideNav>
                                <div className="spacer">
                                    <DescriptionDiv>
                                        <div className='bullet-points' onClick={dashboardButtonHandler}>
                                            <img className='check' src={ballot}></img>
                                            <div>Dashboard</div>
                                        </ div>
                                        <div className='bullet-points' onClick={profileButtonHandler}>
                                            <img className='check' src={edit}></img>
                                            <div>Profile</div>
                                        </div>
                                        <div className='bullet-points' onClick={scheduleButtonHandler}>
                                            <img className='check' src={calendar}></img>
                                            <div>Schedule</div>
                                        </div>
                                    </DescriptionDiv>
                                    <AccountDiv>
                                        <div className='bullet-points' onClick={signoutButtonHandler}>
                                            <img className='check' src={logout}></img>
                                            <div>Logout</div>
                                        </div>
                                    </AccountDiv>
                                </div>
                            </SideNav>
                        </OptionsDiv>
                        <ContentDiv>
                            <Dashboard />
                        </ContentDiv>
                    </UpperDiv>
                    <LowerDiv>
                        <div className='background1'></div>
                        <img className='bgimg' src={crewbg}></img>
                    </LowerDiv>
                </CentralDiv>
            </BlackDiv>
        </>
    )
};

export default Home;

