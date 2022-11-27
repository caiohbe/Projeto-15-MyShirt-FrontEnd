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
   let products = [{ product: "Basic Black T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Basic White T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Work Hard T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Salmon T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "No Homophobia T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/2664721/pexels-photo-2664721.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Dontsmoke T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/12395768/pexels-photo-12395768.jpeg?auto=compress&cs=tinysrgb&w=600%22%7D"},
   { product: "Pink T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Pac-Man T-shirt", price: 35, imageURL: "https://images.pexsels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Yes Kindness T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/1998251/pexels-photo-1998251.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Aquas T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Crown T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=600" },
   { product: "Yellow T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/5159242/pexels-photo-5159242.jpeg?auto=compress&cs=tinysrgb&w=600" }];

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