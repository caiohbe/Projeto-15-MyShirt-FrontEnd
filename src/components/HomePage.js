import axios from "axios";
import { useContext, useEffect, useState } from "react";
import KartContext from "../contexts/KartContext";
import { Container, ProductsGrid, Item } from "./styled.js";
import Header from "./Header.js"

export default function HomePage() {
    const {allItens, setAllItens} = useContext(KartContext);
    const { kart, setKart } = useContext(KartContext);
    console.log(kart)
    console.log(allItens)
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setAllItens(res.data))
            .catch(err => console.log(err.response.data))
    }, [])
    console.log(allItens)
    if (!allItens) {
        return <div>Carregando...</div>
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
                    <button onClick={() => setKart([...kart, ai._id])}>Add to cart</button>
                </Item>)))}
            </ProductsGrid>
        </Container>
        </>
    )
}