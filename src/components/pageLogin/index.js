import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../../provaiders/auth';
import Title from '../title';
import { Container, Button } from './style';
import axios from 'axios';

export default function PageLogin() {

    const navigate = useNavigate();
    const { user } = useAuth();
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    if (user) navigate('/home');

    function changeInputs(e) {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    function login(e) {
        e.preventDefault();
        if (!userLogin.email || !userLogin.password) {
            toast.warn('Todos os campos são obrigatórios');
            return;
        }
        const promise = axios.post('http://localhost:5000/sign-in', { ...userLogin });
        promise.then(res => {
            localStorage.setItem('userLogged', JSON.stringify(res.data));
            navigate('/home');
            window.location.reload();
        }).catch(err => {
            toast.error('E-mail ou senha invalido');
        });
    }

    return (
        <Container>
            <ToastContainer position="top-center" limit={1} />
            <Title />

            <form onSubmit={e => login(e)}>
                <input type="email" placeholder="E-mail" name='email' value={userLogin.email} onChange={changeInputs} />
                <input type="password" placeholder="Senha" name='password' value={userLogin.password} onChange={changeInputs} />
                <button type="submit">Entrar</button>
            </form>

            <Button to='/register' >Primeira vez? Cadastre-se!</Button>

        </Container>
    );
}