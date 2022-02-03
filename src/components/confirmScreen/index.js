import axios from "axios";
import { useAuth } from "../../provaiders/auth";
import { Blur, Container, Button } from "./style";


export default function ConfirmScreen({ setConfirmScreen, operation }) {

    const { user } = useAuth();

    function removeOperation() {
        axios.delete(`http://localhost:5000/operation/${operation.id}`, {
            headers: { authorization: `Bearer ${user.token}` }
        }).then(res => {
            window.location.reload();
        });
    }

    return (
        <>
            <Container>
                <span>Deseja excluir a operação?</span>
                <Button onClick={removeOperation} >Sim</Button>
            </Container>
            <Blur onClick={() => setConfirmScreen(false)} />
        </>
    );
}
