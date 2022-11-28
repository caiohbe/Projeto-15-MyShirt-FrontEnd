import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function LoginPage({setToken, setName}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function login(event) {
        event.preventDefault()

        const loginObj = {
            email,
            password
        }

        axios.post("https://myshirt-api.onrender.com/sign-in", loginObj)
        .then((res) => {
            setToken(res.data.token)
            setName(res.data.name)
            navigate('/')

        }).catch((err) => {
            alert(err.response.data)
        })
    }

    return (
        <Page>
            <img src="https://cdn.discordapp.com/attachments/1044595784940797982/1045032119811981332/unknown.png" alt="Logo" />

            <form onSubmit={login}>
                <input required type='email' placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <input required type='password' placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                
                <button type="submit">Entrar</button>
            </form>

            <Link to={'/register'}>
                <h3>Primeira vez? Cadastre-se!</h3>
            </Link>
        </Page>
    )
}

const Page = styled.div`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-bottom: 25px;
        color: #FFFFFF;
        border-radius: 10%;
    }
    form {
        width: 40%;
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
        
        &:hover {
            filter: grayscale(20%);
        }
    }
    h3 {
        color: #2A2522;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 15px;
    }
`