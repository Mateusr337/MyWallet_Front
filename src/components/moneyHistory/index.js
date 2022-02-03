import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { useAuth } from "../../provaiders/auth";


export default function MoneyHistory({ operation }) {

    const { user } = useAuth();

    function removeOperation() {
        axios.delete(`http://localhost:5000/operation/${operation.id}`, {
            headers: { authorization: `Bearer ${user.token}` }
        }).then(res => {
            window.location.reload();
        });
    }


    return (
        <Conatainer>
            <span><Date>{operation.date}</Date><Description>{operation.description}</Description></span>
            <MoneyContainer>
                <Value type={operation.type} >{parseFloat(operation.value).toFixed(2)}</Value>
                <IoCloseSharp onClick={removeOperation} />
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

