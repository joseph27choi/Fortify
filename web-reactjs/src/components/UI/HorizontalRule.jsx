import styled from "styled-components";

export const HorizontalRule = styled.div`
    display: flex;
    align-items: center;
    margin: 0.1rem 0;
    width: 90%;
    &::before,
    &::after {
        content: '';
        flex: 1;
        border-top: 1px solid #d1d5db; /* border-neutral-300 */
    }

    &::before {
        margin-right: 1rem; /* Adjust as needed */
    }

    &::after {
        margin-left: 1rem; /* Adjust as needed */
    }
`;