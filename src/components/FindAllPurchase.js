import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext, useState } from "react";
import { Container, Item } from "./styled";
import { useNavigate } from "react-router-dom";

export default function FindAllPurchase() {
    const { token, setToken } = useContext(UserContext)
    const [purchase, setPurchases] = useState(undefined)
    const navigate = useNavigate();

    if (token === undefined) {
        const logged = window.confirm("Você deve estar logado para acessar seu histórico de compras. Você já possui uma conta?")
        if (logged === true) {
            navigate("/login")
        } else {
            navigate("/register")
        }

    }
    const response = axios.get(`localhost:5000/purchases`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => {
            console.log(res.data)
            const {purchases, user} = res.data
            setPurchases(purchases)
        })
        .catch((err) => {
            return err.response;
        });

    return (<Container>
        <h1></h1>
        {(purchase.map((p) => (<Item key={p.idProduct}>
            <div><p>{p.product}</p></div>
            <div>Quantidade {p.qtt}</div>
        </Item>)))}
    </Container>);
}