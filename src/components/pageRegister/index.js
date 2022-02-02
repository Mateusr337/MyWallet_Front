import { useState } from "react";
import { Button, Container } from "../pageRegister/style";
import Title from "../title";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function PageRegister() {

    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    function checkInputs(e) {
        e.preventDefault();

        if (!userRegister.name || !userRegister.email || !userRegister.password || !userRegister.confirmPassword) {
            toast.warn('Todos os campos são obrigatórios');
            return;
        } else if (userRegister.password !== userRegister.confirmPassword) {
            toast.warn('As senhas não conferem');
            return;
        }
        delete userRegister.confirmPassword;
        const promise = axios.post('http://localhost:5000/sign-up', { ...userRegister });
        promise.then(res => {
            navigate('/');
        }).catch(err => {
            console.log(err);
        });
    }

    function changeInputs(e) {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <ToastContainer position="top-center" limit={1} />
            <Title />

            <form onSubmit={e => checkInputs(e)}>
                <input type='text' placeholder='Nome' name='name' value={userRegister.name} onChange={changeInputs} />
                <input type='email' placeholder='E-mail' name='email' value={userRegister.email} onChange={changeInputs} />
                <input type='password' placeholder='Senha' name='password' value={userRegister.password} onChange={changeInputs} />
                <input type='password' placeholder='Confirme a senha' name='confirmPassword' value={userRegister.confirmPassword} onChange={changeInputs} />
                <button type='submit'>Cadastrar</button>
            </form>

            <Button to='/' >Já tem uma conta? Entre agora!</Button>
        </Container>
    );
}