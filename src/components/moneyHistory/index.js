import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import ConfirmScreen from "../confirmScreen";
import { useState } from "react";


export default function MoneyHistory({ operation }) {

    const [confirmScreen, setConfirmScreen] = useState(false);

    return (
        <Conatainer>
            <span><Date>{operation.date}</Date><Description>{operation.description}</Description></span>
            {confirmScreen && <ConfirmScreen setConfirmScreen={setConfirmScreen} operation={operation} />}
            <MoneyContainer>
                <Value type={operation.type} >{parseFloat(operation.value).toFixed(2)}</Value>
                <IoCloseSharp onClick={() => setConfirmScreen(true)} />
            </MoneyContainer>
        </Conatainer>
    );
}

const Conatainer = styled.div`
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

const Date = styled.div`
    color: #C6C6C6;
`;

const Description = styled.div`
    color: #000000;
`;

const Value = styled.div`
    ${({ type }) => type === 'input' ? `color: #03AC00;` : `color: #C70000;`}
    justify-content: end;
`;

const MoneyContainer = styled.div`
    gap: 10px;

    font-family: Raleway;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #C6C6C6;

    display: flex;
    align-items: center;
`;

