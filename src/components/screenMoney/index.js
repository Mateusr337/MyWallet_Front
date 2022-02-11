import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../provaiders/auth";
import MoneyAbstract from "../moneyAbstract";
import MoneyHistory from "../moneyHistory";
import { Container, Message, Operations, ImgLoad } from "./style";
import load from '../../assets/loadPurple.gif';

export default function ScreenMoney() {

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        if (user !== null) {
            axios.get(`${process.env.REACT_APP_API}/operations/${user._id}`, {
                headers: { authorization: `Bearer ${user.token}` }
            }).then(res => {
                setHistory(res.data);
            });
        }
        setLoading(false);
    }, [user]);

    return (
        <Container>
            {(history.length !== 0 && !loading) && (
                <>
                    <Operations>
                        {history.map((operation, index) => (
                            <MoneyHistory key={index} operation={operation} />
                        ))}
                    </Operations>
                    <MoneyAbstract historyMoney={history} />
                </>
            )}

            {(history.length === 0 && !loading) && (
                <Message>Não há registros de <br /> entrada ou saída</Message>
            )}

            {loading && <ImgLoad src={load} />}
        </Container >
    );
}