import { useEffect, useState } from "react";
import styled from "styled-components";


export default function MoneyAbstract({ historyMoney }) {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let soma = 0;
        historyMoney.forEach(operation => {
            if (operation.type === 'input') {
                soma += parseFloat(operation.value);
            } else {
                soma -= parseFloat(operation.value);
            }
        });
        setTotal(soma);
    }, [historyMoney]);


    return (
        historyMoney && (
            <Conatainer>
                <Description>SALDO</Description>
                <Value total={total} >{Math.abs(total).toFixed(2)}</Value>
            </Conatainer>
        )
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
    ${({ total }) => total > 0 ? `color: #03AC00;` : `color: #C70000;`}
`;