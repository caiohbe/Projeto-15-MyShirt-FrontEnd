import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KartContext from "../contexts/KartContext";
import UserContext from "../contexts/UserContext";
import { Container, ProductsGrid, Item, Button } from "./styled.js";

export default function ProductsListPage() {
    const [itens, setItens] = useState(undefined);
    const { token, setToken } = useContext(UserContext);
    const { kart, setKart } = useContext(KartContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setItens(res.data))
            .catch(err => console.log(err.response.data))
    }, [])
    
    if (!itens) {
        return <div>Carregando...</div>
    }
    let destination;
    function checkToken() {
        if (token === undefined) {
            destination = window.confirm("Para acessar o carrinho você precisa estar logado na sua conta. Você já possui uma conta?")
            if (destination) { navigate("/sign-in") }
            else (navigate("/sing-up"))
        } else {navigate("/finalkart")}
    }

    return (
        <Container>
            <ProductsGrid>
                {(itens.map((i) => (<Item key={i._id}>
                    <img src={i.imageURL} alt={i.product} />
                    <div><p>{i.product}</p></div>
                    <div>Price R$ {i.price},00</div>
                    <button onClick={() => setKart([...kart, i._id])}>Add to cart</button>
                </Item>)))}
            </ProductsGrid>
            <Button onClick={checkToken}>Go to my Kart!</Button>
        </Container>
    )
}