import { useState } from "react";
import styled from "styled-components";
import Top from "../top";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function PageOperationInput() {

    const [operationData, setOperationData] = useState({
        value: undefined,
        description: ""
    });

    function changeInputs(e) {
        setOperationData({ ...operationData, [e.target.name]: e.target.value });
    }

    function postOperation(e) {
        e.preventDefault();

        if (!operationData.value || !operationData.description) {
            toast.warn('Todos os campos são obrigatórios');
        }
    }

    return (
        <Container>
            <ToastContainer position="top-center" limit={1} />
            <Top description={<span>Nova entrada</span>} />

            <form onSubmit={e => postOperation(e)} >
                <input type='number' placeholder='Valor' name='value' value={operationData.value} onChange={e => changeInputs(e)} />
                <input type='text' placeholder='Descrição' name='description' value={operationData.description} onChange={e => changeInputs(e)} />
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