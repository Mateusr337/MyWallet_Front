import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 150px;

    background-color: #A328D6;
    border-radius: 10px;
    gap: 30px;

    font-family: Raleway;
    font-weight: 700;
    font-size: 17px;
    line-height: 19px;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 3;
`;

export const Blur = styled.div`
    background-color: #000;
    opacity: 0.3;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
`;

export const Button = styled.button`
    width: 50px;
    height: 25px;

    background-color: #fff;
    border-radius: 5px;

    color: #A328D6;
    font-weight: bold;
    font-size: 17px;
    line-height: 19px;

    display: flex;
    justify-content: center;
    align-items: center;
`;