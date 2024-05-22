import styled from "styled-components"

export const BlackDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 

    color: white;

    height: 100vh;
    background-color: black;
`

export const CentralDiv = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 50rem;
    height: 40rem;

    background-color: #2d2d2d;
`

export const OptionsDiv = styled.div`
    height: 100%;
    width: 50%;

    display: flex;
    justify-content: center;

    margin-top: 18em;

    .logo {
        position: absolute;
        top: 0px;
        left: 0px;
    }
`

export const DescriptionDiv = styled.div`
    color: white;

    width: 80%;

    .title {
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1.4em;
    }

    .bullet-points {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
    }
    
    .check {
        height: 35px;
    }

`

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;

    width: 50%;
    height: 100%;

    .title {
        font-size: 26px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1em;
    }
`

export const StyledInput = styled.input`
    font-size: 22px;
    border: none;
    border-bottom: 2px solid white;

    color: white;

    background-color: transparent;

    &:invalid {
        background-color: ivory;
        border: none;
        outline: 2px solid red;
        border-radius: 5px;
    }
`

export const StyledBtn = styled.button`
    box-shadow: 0 8px #626262;
    font-size: 25px;
    border: none;
    padding: 0.3em 0.25em;

    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 15px;

    width: 10em;

    background-color: rgb(144, 144, 144);

    &:hover {
        background-color: rgb(133, 133, 133);
        color: rgb(22, 25, 22);
    }
    &:active {
        transform: translateY(3px);
        box-shadow: 0 5px #525252;
    }
`

export const UpperDiv = styled.div`
    position: absolute;
    z-index: 2;
    background-color: transparent;
    
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
    background-color: #212121;
    
    display: flex;
    flex-direction: row;
    
    height: 100%;
    width: 100%;

`;

export const Background1 = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ bgColor }) => bgColor || '#2e4266'};
`


export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LoginDiv = styled.div``


export const StyledSelect = styled.select`
    font-size: 22px;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;

    color: lightgray;
    
    width: 59%;

    &:invalid {
        background-color: ivory;
        border: none;
        outline: 2px solid red;
        border-radius: 5px;
    }
`;

export const BgImg = styled.img`
    position: absolute;
    min-height: 125px;
    max-height: 300px;
    height: 40%;
    bottom: 0px;
    left: ${props => props.left || '13em'};
`