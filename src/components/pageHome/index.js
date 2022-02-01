import { Container, Transactions } from "../pageHome/style";
import ScreenMoney from "../screenMoney";
import Top from "../top";
import TransactionButton from "../transactionButton";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";


export default function PageHome() {

    return (
        <Container>
            <Top />
            <ScreenMoney />
            <Transactions>
                <TransactionButton
                    description={<><IoAddCircleOutline /> <span>Nova <br /> Entrada</span></>}
                />

                <TransactionButton
                    description={<><IoRemoveCircleOutline /> <span>Nova <br /> Saída</span></>}
                />
            </Transactions>
        </Container>
    );
}