import { useState } from "react";
import { Button, Container, ImgLoad } from "./style";
import Title from "../title";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import load from '../../assets/loadGrey.gif';


export default function PageRegister() {

    const [loading, setLoading] = useState(false);
    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    function checkInputs(e) {
        e.preventDefault();
        setLoading(true);

        if (!userRegister.name || !userRegister.email || !userRegister.password || !userRegister.confirmPassword) {
            toast.warn('Todos os campos são obrigatórios');
            setTimeout(() => setLoading(false), 5000);
            return;
        } else if (userRegister.password !== userRegister.confirmPassword) {
            toast.warn('As senhas não conferem');
            setTimeout(() => setLoading(false), 5000);
            return;
        }
        delete userRegister.confirmPassword;
        const promise = axios.post('http://localhost:5000/sign-up', { ...userRegister });
        promise.then(res => {
            setLoading(true);
            navigate('/');
        }).catch(err => {
            toast.error('Este usuário já existe');
            setTimeout(() => setLoading(false), 5000);
        });
    }

    function changeInputs(e) {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <ToastContainer position="top-center" limit={1} />
            <Title />

            <form autoComplete="on" onSubmit={e => checkInputs(e)}>
                <input type='text' placeholder='Nome' name='name' value={userRegister.name} onChange={changeInputs} />
                <input type='email' autoComplete='username' placeholder='E-mail' name='email' value={userRegister.email} onChange={changeInputs} />
                <input type='password' autoComplete='current-password' placeholder='Senha' name='password' value={userRegister.password} onChange={changeInputs} />
                <input type='password' autoComplete='new-password' placeholder='Confirme a senha' name='confirmPassword' value={userRegister.confirmPassword} onChange={changeInputs} />
                <button type='submit' disabled={loading}>
                    {loading ? <ImgLoad><img src={load} alt='Loading' /></ImgLoad> : <span>Registrar</span>}
                </button>
            </form>

            <Button to='/' >Já tem uma conta? Entre agora!</Button>
        </Container>
    );
}