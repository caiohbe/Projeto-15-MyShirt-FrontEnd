import axios from "axios";
import { useContext, useEffect, useState } from "react";
import KartContext from "../contexts/KartContext";
import { Container, ProductsGrid, Item } from "./styled.js";

export default function ProductsListPage() {
    const [itens, setItens] = useState(undefined);
    const { kart, setKart } = useContext(KartContext);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setItens(res.data))
            .catch(err => console.log(err.response.data))
    }, [])
    
    if (!itens) {
        return <div>Carregando...</div>
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
        </Container>
    )
}