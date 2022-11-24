import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    function register(event) {
        event.preventDefault()

        const registerObj = {
            name,
            email,
            adress,
            password,
            confirmPassword
        }

        axios.post("http://localhost:5000/sign-up", registerObj)
        .then(() => navigate('/login'))
        .catch(err => alert(err.response.data))
    }

    return (
        <Page>
            <img src="https://cdn.discordapp.com/attachments/1044595784940797982/1045032119811981332/unknown.png" alt="Logo" />

            <form onSubmit={register}>
                <input required type="text" placeholder="Nome" onChange={e => setName(e.target.value)}/>
                <input required type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <input required type="text" placeholder="Endereço" onChange={e => setAdress(e.target.value)}/>
                <input required type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                <input required type="password" placeholder="Confirme a senha" onChange={e => setConfirmPassword(e.target.value)}/>
                
                <button type="submit">Cadastrar</button>
            </form>            

            <Link to={'/login'}>
                <h3>Já tem uma conta? Entre agora!</h3>
            </Link>
        </Page>
    )
}

const Page = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-bottom: 25px;
        color: #FFFFFF;
        border-radius: 10%;
    }
    form {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        input {
            font-size: 20px;
            font-family: "Poppins", sans-serif;
            color: #2A2522;
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 5px;
            margin-bottom: 15px;
            padding: 15px;
        }
    }
    button {
        width: 100%;
        height: 45px;
        background-color: #C30011;
        border: none;
        border-radius: 5px;
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 35px;
    }
    h3 {
        color: #2A2522;
        font-weight: 700;
        font-size: 15px;
        font-family: "Poppins", sans-serif;
    }
`