import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    gap: 24px;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Button = styled(Link)`
    background-color: #9056BF;

    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const ImgLoad = styled.div`
    height: 100%;
    width: 100%;

    img {
        height: 100%;
    }
`;
