import React from 'react'
import styled from 'styled-components'
import { backgroundColors } from '../../constants/backgroundColors'

const GoogleAuthComponent = ({ bgColor }) => {
    return (
        <GoogleAuthBtn bgColor={bgColor}>
            <ButtonContent>
                <Icon src="https://tailus.io/sources/blocks/social/preview/images/google.svg" alt="google logo" />
                <Text bgColor={bgColor}>Continue with Google</Text>
            </ButtonContent>
        </GoogleAuthBtn>
    )
}

export default GoogleAuthComponent

const GoogleAuthBtn = styled.button`
    width: 80%;
    height: 3rem; 
    margin-top: 0.5rem; 
    margin-bottom: 0.25rem; 
    padding: 0 1.5rem; 
    border: 2px solid #d1d5db; 
    border-radius: 9999px; 
    background: transparent;
    transition: border-color 0.3s, background-color 0.3s;
    
    &:hover {
        border-color: ${props => props.bgColor ? (props.bgColor === backgroundColors.registerBackgroundColor ? '#719ef2' : (props.bgColor === backgroundColors.loginBackgroundColor ? '#9b804b' : "white")) : "white"};

    }

    &:focus {
        background-color: #030810;
    }

    &:active {
        background-color: #212834;
    }
`

const ButtonContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem; /* space-x-4 */
`;

const Icon = styled.img`
    position: absolute;
    left: 0;
    width: 1.25rem; /* w-5 */
`;

const Text = styled.span`
    display: block;
    font-weight: 600; /* font-semibold */
    letter-spacing: 0.05em; /* tracking-wide */
    color: white;
    font-size: 0.875rem; /* text-sm */
    transition: color 0.3s;
    
    ${GoogleAuthBtn}:hover & {
        color: ${props => props.bgColor ?
                (props.bgColor === backgroundColors.registerBackgroundColor ? '#719ef2'
                    : (props.bgColor === backgroundColors.loginBackgroundColor ? '#9b804b' : "white"))
            : "white"};
    }

    @media (min-width: 640px) { /* sm:text-base */
        font-size: 1rem; /* text-base */
    }
`;