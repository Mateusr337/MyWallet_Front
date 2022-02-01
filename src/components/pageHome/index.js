import { Container, Transactions } from "../pageHome/style";
import ScreenMoney from "../screenMoney";
import Top from "../top";
import TransactionButton from "../transactionButton";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";


export default function PageHome() {

    return (
        <Container>
            <Top description={<><span>Olá, Fulano</span><IoExitOutline /></>} />
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
    );
}