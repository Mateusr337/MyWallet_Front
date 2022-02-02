import styled from "styled-components";


export default function MoneyAbstract({ historyMoney }) {


    return (
        <Conatainer>
            <Description>SALDO</Description>
            <Value>36.40</Value>
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
`;

const Description = styled.div`
    font-family: Raleway;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
`;

const Value = styled.div`
`;