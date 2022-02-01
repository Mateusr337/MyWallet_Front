import Title from '../title';
import { Container, Button } from './style';

export default function PageLogin() {
    return (
        <Container>
            <Title />

            <form>
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>

            <Button>Primeira vez? Cadastre-se!</Button>

        </Container>
    );
}