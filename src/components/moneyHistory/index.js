import { IoCloseSharp } from "react-icons/io5";
import ConfirmScreen from "../confirmScreen";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Conatainer, Date, Description, MoneyContainer, Value } from "./style";


export default function MoneyHistory({ operation }) {

    const [confirmScreen, setConfirmScreen] = useState(false);
    const navigate = useNavigate();

    return (
        <Conatainer>
            <span>
                <Date>{operation.date}</Date>
                <Description onClick={() => navigate(`/operationUpdate/${operation.id}`)}>
                    {operation.description}
                </Description>
            </span>

            {confirmScreen && <ConfirmScreen setConfirmScreen={setConfirmScreen} operation={operation} />}

            <MoneyContainer>
                <Value type={operation.type} >{parseFloat(operation.value).toFixed(2)}</Value>
                <IoCloseSharp onClick={() => setConfirmScreen(true)} />
            </MoneyContainer>
        </Conatainer>
    );
}

