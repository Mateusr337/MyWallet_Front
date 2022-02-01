import { Button, Container } from "../pageLogin/style";
import Title from "../title";

export default function PageRegister() {
    return (
        <Container>
            <Title />

            <form>
                <input type='text' placeholder='Nome' />
                <input type='email' placeholder='E-mail' />
                <input type='password' placeholder='Senha' />
                <input type='password' placeholder='Confirme a senha' />
                <button type='submit'>Cadastrar</button>
            </form>

            <Button>Já tem uma conta? Entre agora!</Button>
        </Container>
    );
}