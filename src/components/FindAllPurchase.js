import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Container, Item } from "./styled";
import { useNavigate } from "react-router-dom";

export default function FindAllPurchase() {
    const { token, setToken } = useContext(UserContext)
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
        .catch((err) => {
            return err.response;
        });

    return (<Container>
        {(response.map((r) => (<Item key={r.idProduct}>
            <div><p>{r.product}</p></div>
            <div>Quantidade {r.qtt}</div>
        </Item>)))}
    </Container>);
}