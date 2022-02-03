import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: #fff;
    border-radius: 5px;
    padding: 11px;
    padding-top: 23px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Message = styled.span`
    height: 100%;

    font-family: Raleway;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Operations = styled.div`
    gap: 10px; 
    
    display: flex;
    flex-direction: column;
`;
