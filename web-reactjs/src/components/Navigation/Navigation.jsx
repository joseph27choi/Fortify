import React from 'react'
import { BlackDiv, CentralDiv, OptionsDiv, LogoDiv, SideNav, DescriptionDiv, AccountDiv, ContentDiv, UpperDiv, LowerDiv, BulletPoint, Check } from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import fortify from '../../../src/assets/fortify.png'
import ballot from '../../../src/assets/ballot.png'
import edit from '../../../src/assets/edit.png'
import calendar from '../../../src/assets/calendar.png'
import logout from '../../../src/assets/logout.png'


const Navigation = () => {
    const navigate = useNavigate();

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
            <OptionsDiv>
                <LogoDiv>
                    <img className="logo" src={fortify}></img>
                    <div className="logo-div"></div>
                </LogoDiv>
                <SideNav>
                    <div className="spacer">
                        <div>
                            <BulletPoint onClick={dashboardButtonHandler}>
                                <Check className='check' src={ballot}></Check>
                                <div>Dashboard</div>
                            </ BulletPoint>
                            <BulletPoint onClick={profileButtonHandler}>
                                <Check className='check' src={edit}></Check>
                                <div>Profile</div>
                            </BulletPoint>
                            <BulletPoint onClick={scheduleButtonHandler}>
                                <Check className='check' src={calendar}></Check>
                                <div>Schedule</div>
                            </BulletPoint>
                        </div>
                        <div>
                            <BulletPoint onClick={signoutButtonHandler}>
                                <Check className='check' src={logout}></Check>
                                <div>Logout</div>
                            </BulletPoint>
                        </div>
                    </div>
                </SideNav>
            </OptionsDiv>
        </>
    )
}

export default Navigation