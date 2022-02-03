import styled from "styled-components";


export const Conatainer = styled.div`
    width: 100%;
    gap: 5px;

    font-family: Raleway;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        display: flex;
        gap: 15px;
    }
`;

export const Date = styled.div`
    color: #C6C6C6;
`;

export const Description = styled.div`
    color: #000000;

    &:hover {
        cursor: pointer;
    }
`;

export const Value = styled.div`
    ${({ type }) => type === 'input' ? `color: #03AC00;` : `color: #C70000;`}
    justify-content: end;
`;

export const MoneyContainer = styled.div`
    gap: 10px;

    font-family: Raleway;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #C6C6C6;

    display: flex;
    align-items: center;
`;