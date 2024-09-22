import styled from "styled-components";
import { backgroundColors } from "../../constants/backgroundColors";

export const MenuBorderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: ${backgroundColors.navigationBackgroundColor};
    color: ${backgroundColors.textColor};
    height: 100%;
    width: 15rem;

    border-radius: 13px 0 0 13px;
`;

export const TopOptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 10rem;

    margin: 2rem 0 0 0;
`;

export const BottomOptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 10rem;

    margin: 0 0 3rem 0;
`;

export const MenuOptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 10rem;

    &.top-options-div {
        margin: 2rem 0 0 0;
    }
    &.bottom-options-div {
        margin: 0 0 3rem 0;
    }
`;

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-inline-start: 0;

    width: 90%;
`;

export const StyledLi = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0.25rem;
    margin: 0.2rem 0;
    border-radius: 10px;

    list-style-type: none;

    &:hover {
        background-color: ${backgroundColors.hoveredMenuIconColor};
    }

    &.highlighted {
        background-color: ${backgroundColors.highlightedMenuIconColor};

        &:hover {
            background-color: ${backgroundColors.hoveredMenuIconColor};
        }
    }
`;

export const MenuIcon = styled.img`
    height: 20px;
    width: 20px;

    margin-right: 0.5rem;
`;
