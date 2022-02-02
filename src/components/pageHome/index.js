import { Container, Transactions } from "../pageHome/style";
import ScreenMoney from "../screenMoney";
import Top from "../top";
import TransactionButton from "../transactionButton";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provaiders/auth";


export default function PageHome() {

    const navigate = useNavigate();
    const { user } = useAuth();

    function exitApp() {
        localStorage.clear();
        navigate('/');
    }

    return (
        user !== null && (
            <Container>
                <Top description={<><span>Olá, {user.name}</span><IoExitOutline onClick={exitApp} /></>} />
                <ScreenMoney />
                <Transactions>
                    <TransactionButton
                        path={'/operationInput'}
                        description={<><IoAddCircleOutline /> <span>Nova <br /> Entrada</span></>}
                    />

                    <TransactionButton
                        path={'/operationExit'}
                        description={<><IoRemoveCircleOutline /> <span>Nova <br /> Saída</span></>}
                    />
                </Transactions>
            </Container>
        )
    );
}