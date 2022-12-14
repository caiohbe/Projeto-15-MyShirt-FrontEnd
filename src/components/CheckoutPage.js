import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import KartContext from "../contexts/KartContext";
import { Container, KartProducts, ItemKart } from "./styled.js";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js"

export default function CheckoutPage() {
    const { allItens, setAllItens } = useContext(KartContext);
    const { token, setToken } = useContext(UserContext);
    const { kart, setKart } = useContext(KartContext);
    const navigate = useNavigate();
    let newPurchase;

    if (kart.length === 0) {
        return <div>Você não escolheu nenhuma camiseta :/</div>
    }

    function qtt(arr) {
        const countShirt = Object.create(null);
        for (const element of arr) {
            countShirt[element] = (countShirt[element] || 0) + 1;
        }
        newPurchase = Object.entries(countShirt).map(([value, count]) => ({
            nameProduct: value,
            qtt: count
        }));
    }
    qtt(kart)
    
    let render = [];
    for (let i = 0; i < newPurchase.length; i++) {
        let itemF = newPurchase[i]
        for (let index = 0; index < allItens.length; index++) {
            let itemR = allItens[index]
            if (itemF.nameProduct === itemR.product) {
                let objectToRender = {
                    id: itemR._id,
                    name: itemR.product,
                    imgUrl: itemR.imageURL,
                    qtt: itemF.qtt,
                    total: (itemF.qtt * itemR.price)
                }
                render.push(objectToRender)
            }
        }
    }

    function confirmPurchase() {
        const body = {
            purchase: newPurchase
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.post("https://myshirt-api.onrender.com/purchases", body, config)
            .then(res => {
                alert("Sua compra foi confirmada!")
                setKart([])
                navigate("/")})
            .catch(err => console.log(err.response.data))
    }

    function cancelPurchase() {
        setKart([])
        alert("Sua compra foi cancelada :( ")
        navigate("/")
    }

    return (<>
    <Header />
        <Container>
            <KartProducts>
                <h1>Produtos adicionados ao carrinho</h1>
                <div>
                    {(render.map((r) => (<ItemKart key={r._id}>
                        <div><img src={r.imgUrl} alt={r.product} /></div>                    
                    <div>
                        <p>{r.name}</p>
                        <p>Quantidade: {r.qtt}</p>
                        <p>Total R$ {r.total},00</p>
                    </div>
                </ItemKart>)))}
                </div>
                <div>
                  <button onClick={confirmPurchase}>Confirmar compra</button>
                <button onClick={cancelPurchase}>Cancelar compra</button>  
                </div>
                
            </KartProducts>

        </Container>
    </>
    )
}