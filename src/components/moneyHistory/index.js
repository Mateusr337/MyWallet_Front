import styled from "styled-components";


export default function MoneyHistory({ operation }) {

    return (
        <Conatainer>
            <span><Date>{operation.date}</Date><Description>{operation.description}</Description></span>
            <Value type={operation.type} >{operation.value}</Value>
        </Conatainer>
    );
}

const Conatainer = styled.div`
    width: 100%;
    height: 35px;

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