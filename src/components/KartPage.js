import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import KartContext from "../contexts/KartContext";
import { Container, ProductsGrid, Item } from "./styled.js";

export default function FinalKart() {
    const { token, setToken } = useContext(UserContext);
    const { kart, setKart } = useContext(KartContext);
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setItens(res.data))
            .catch(err => console.log(err.response.data))
    }, [])
    
        const newPurchase = [{
           /*Ex [{idProduct: 1234, qtt: 2}, {idProduct: 123, qtt: 1}, {idProduct: 12, qtt: 1}]*/
     
        }]
            axios.post("http://localhost:5000/purchase")
            .then(res => setItens(res.data))
            .catch(err => console.log(err.response.data))        
   
    
    if (!kart) {
        return <div>Você não escolheu nenhuma camiseta :/</div>
    }
   
    return (<>
    {(kart.map((k) => (<Item key={k._id}>
        <img src={i.imageURL} alt={i.product} />
        <div><p>{i.product}</p></div>
        <div>Price R$ {i.price},00</div></Item>)))}
    </>
    )
}