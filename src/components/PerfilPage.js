import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { Container, Item } from "./styled";
import { useNavigate } from "react-router-dom";

export default function PerfilPage() {
    const {name} = useContext(UserContext)
    const { token, setToken } = useContext(UserContext)
    const [purchase, setPurchases] = useState(undefined)
    const navigate = useNavigate();
   console.log("Entrou no perfil")
    useEffect(() => {
        console.log("entrou no useEffect do gt compras")
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        axios.get(`localhost:5000/purchases`, "", config)
            .then((res) => {
                console.log(res.data)
                setPurchases(purchase)
            })
            .catch((err) => {
                return err.response;
            });
    }, [])
    if (token === undefined) {
        const logged = window.confirm("Você deve estar logado para acessar seu histórico de compras. Você já possui uma conta?")
        if (logged === true) {
            navigate("/login")
        } else {
            navigate("/register")
        }
    }
    if(purchase === undefined){
        return<div>Olá, {name}, estamos carregando suas compras</div>
    }
    console.log(purchase)
    return (
    <Container>
        <h1>Olá, {name} </h1>
        {(purchase.map((p) => (<Item key={p.idProduct}>
            <div><p>{p.product}</p></div>
            <div>Quantidade {p.qtt}</div>
        </Item>)))}
    </Container>);

}