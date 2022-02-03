import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../provaiders/auth";
import MoneyAbstract from "../moneyAbstract";
import MoneyHistory from "../moneyHistory";
import { Container, Message, Operations } from "./style";

export default function ScreenMoney() {

    const [history, setHistory] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user !== null) {
            axios.get(`http://localhost:5000/operations/${user._id}`, {
                headers: { authorization: `Bearer ${user.token}` }
            }).then(res => {
                setHistory(res.data);
            });
        }
    }, [user]);

    return (
        <Container>
            {history.length !== 0 ? (
                <>
                    <Operations>
                        {history.map((operation, index) => (
                            <MoneyHistory key={index} operation={operation} />
                        ))}
                    </Operations>
                    <MoneyAbstract historyMoney={history} />
                </>
            ) : (<Message>Não há registros de <br /> entrada ou saída</Message>)}
        </Container>
    );
}