import styled from "styled-components";
import Top from "../top";

export default function PageOperationInput() {

    return (
        <Container>
            <Top description={<span>Nova entrada</span>} />
            <form>
                <input type='number' placeholder='Valor' />
                <input type='text' placeholder='Descrição' />
                <button type='submit'>Salvar entrada</button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    padding: 25px;
    gap: 13px;

    display: flex;
    flex-direction: column;
`;