import { useEffect, useState } from "react";
import styled from "styled-components";
import Top from "../top";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../../provaiders/auth";
import { useNavigate, useParams } from "react-router-dom";
import load from '../../assets/loadGrey.gif';

export default function PageOperation() {

    let text;
    const navigate = useNavigate();
    const { user } = useAuth();
    const { idOperation } = useParams();
    const [loading, setLoading] = useState(false);
    const [operationOrigin, setOperationOrigin] = useState();
    const [operationData, setOperationData] = useState({
        value: '',
        description: ""
    });

    useEffect(() => {
        user !== null && (
            axios.get(`http://localhost:5000/operation/${idOperation}`,
                { headers: { authorization: `Bearer ${user.token}` } }
            ).then(res => {
                setOperationData({ value: res.data.value, description: res.data.description });
                setOperationOrigin(res.data);
            })
        );
    }, [user, idOperation]);

    if (operationOrigin) operationOrigin.type === 'input' ? text = 'entrada' : text = 'saída';

    function changeInputs(e) {
        setOperationData({ ...operationData, [e.target.name]: e.target.value });
    }

    function updateOperation(e) {
        e.preventDefault();
        setLoading(true);

        if (!operationData.value || !operationData.description) {
            toast.warn('Todos os campos são obrigatórios');
            setTimeout(() => setLoading(false), 5000);
            return;
        }
        axios.put(`http://localhost:5000/operation/${idOperation}`,
            { ...operationData, type: operationOrigin.type, date: operationOrigin.date },
            { headers: { authorization: `Bearer ${user.token}` } }
        ).then(res => {
            navigate('/home');
            window.location.reload();
        }).catch(err => {
            toast.error('Não foi possível atalizar, tente novamente');
            setTimeout(() => setLoading(false), 5000);
        });
    }


    return (
        <Container>
            <ToastContainer position="top-center" limit={1} />
            <Top description={<span>Editar {text}</span>} />

            <form onSubmit={e => updateOperation(e)} >
                <input type='number' placeholder='Valor' name='value' value={operationData.value} onChange={e => changeInputs(e)} />
                <input type='text' placeholder='Descrição' name='description' value={operationData.description} onChange={e => changeInputs(e)} />
                <button type='submit'>
                    {loading ? <ImgLoad><img src={load} alt={'loading'} /></ImgLoad> : <span>Atulizar {text}</span>}
                </button>
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

const ImgLoad = styled.div`
    height: 100%;
    width: 100%;

    img {
        height: 100%;
    }
`;