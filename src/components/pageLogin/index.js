import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../../provaiders/auth';
import Title from '../title';
import { Container, Button, ImgLoad } from './style';
import axios from 'axios';
import load from '../../assets/loadGrey.gif';


export default function PageLogin() {

    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        if (!userLogin.email || !userLogin.password) {
            toast.warn('Todos os campos são obrigatórios');
            setTimeout(() => setLoading(false), 5000);
            return;
        }
        const promise = axios.post(`${process.env.REACT_APP_API}/sign-in`, { ...userLogin });
        promise.then(res => {
            localStorage.setItem('userLogged', JSON.stringify(res.data));
            navigate('/home');
            window.location.reload();
        }).catch(err => {
            toast.error('E-mail ou senha invalido');
            setTimeout(() => setLoading(false), 5000);
        });
    }

    return (
        <Container>
            <ToastContainer position="top-center" limit={1} />
            <Title />

            <form autoComplete='on' onSubmit={e => login(e)}>
                <input type="email" autoComplete='username' placeholder="E-mail" name='email' value={userLogin.email} onChange={changeInputs} />
                <input type="password" autoComplete='current-password' placeholder="Senha" name='password' value={userLogin.password} onChange={changeInputs} />
                <button type="submit" autoComplete='new-password' disabled={loading}>
                    {loading ? <ImgLoad><img src={load} alt={'loading'} /></ImgLoad> : <span>Entrar</span>}
                </button>
            </form>

            <Button to='/register' >Primeira vez? Cadastre-se!</Button>
        </Container>
    );
}