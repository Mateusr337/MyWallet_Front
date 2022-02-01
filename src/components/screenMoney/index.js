import MoneyAbstract from "../moneyAbstract";
import MoneyHistory from "../moneyHistory";
import { Container } from "./style";

export default function ScreenMoney() {

    return (
        <Container>
            <div>
                <MoneyHistory buy={false} />
                <MoneyHistory buy={true} />
            </div>
            <MoneyAbstract />
        </Container>
    );
}