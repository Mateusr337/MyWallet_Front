import styled from "styled-components";


export default function MoneyHistory({ buy }) {

    return (
        <Conatainer>
            <span><Date>30/11</Date><Description>Almoço mãe</Description></span>
            <Value buy={buy}>36.40</Value>
        </Conatainer>
    );
}

const Conatainer = styled.div`
    width: 100%;
    height: 35px;


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
    ${({ buy }) => buy === true ? `color: #03AC00;` : `color: #C70000;`}
    justify-content: end;
`;