import axios from "axios";
import { useContext, useEffect } from "react";
import KartContext from "../contexts/KartContext";
import { Container, ProductsGrid, Item } from "./styled.js";
import Header from "./Header.js"

export default function HomePage() {
    const { allItens, setAllItens } = useContext(KartContext);
    const { kart, setKart } = useContext(KartContext);
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setAllItens(res.data))
            .catch(err => console.log(err.response.data))
    }, [])
    if (!allItens) {
        return <div>Carregando...</div>
    }

    function addToKart(product) {
        setKart([...kart, product])
        alert("Item adicionado ao carrinho")
    }

    return (
        <>
            <Header />
            <Container>
                <ProductsGrid>
                    {(allItens.map((ai) => (<Item key={ai._id}>
                        <img src={ai.imageURL} alt={ai.product} />
                        <div><p>{ai.product}</p></div>
                        <div>Price R$ {ai.price},00</div>
                        <button onClick={() => addToKart(ai.product)}>Add to cart</button>
                    </Item>)))}
                </ProductsGrid>
            </Container>
        </>
    )
}