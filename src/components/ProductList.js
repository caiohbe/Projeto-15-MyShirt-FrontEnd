import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KartContext from "../Contexts/KartContext";
import UserContext from "../Contexts/UserContext";
import {Container, ProductsGrid, Item, Button} from "./styled.js";

export default function ProductsList() {
    /*const [itens, setItens] = useState(undefined)*/
    const { user, setUser } = useContext(UserContext);
    const {kart, setKart} = useContext(KartContext);
    const navigate = useNavigate();
    console.log(kart)
    /*useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => setItens(res.data))
            .catch(err => console.log(err.response.data))
    }, [])
    /* Para teste*/
    const itens = [{ product: "Basic Black T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Basic White T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Work Hard T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Salmon T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "No Homophobia T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/2664721/pexels-photo-2664721.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Dontsmoke T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/12395768/pexels-photo-12395768.jpeg?auto=compress&cs=tinysrgb&w=600"},
    { product: "Pink T-shirt", price: 25, imageURL: "https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Pac-Man T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Yes Kindness T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/1998251/pexels-photo-1998251.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Aquas T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Crown T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { product: "Yellow T-shirt", price: 35, imageURL: "https://images.pexels.com/photos/5159242/pexels-photo-5159242.jpeg?auto=compress&cs=tinysrgb&w=600" }]
    
    if(!itens){
        return <div>Carregando...</div>
    }
    let destination;
        /*function checkUser(){
            if(user.lenght > 0){
                navigate("/finalkart")
            } else if(
                destination = confirm("Para acessar o carrinho você precisa estar logado na sua conta. Você já possui uma conta?")
                if(destination){ navigate("/sign-in")}
            )else(
                navigate("/sing-up")
            )
        }*/
    return (
        <Container>
            <ProductsGrid>
                {(itens.map((i) => (<Item key={i.id}>
                    <img src={i.imageURL} alt={i.product} />
                    <div><p>{i.product}</p></div>
                    <div>Price R$ {i.price},00</div>
                    <button onClick={()=> setKart([...kart, i.id])}>Add to cart</button>
                </Item>)))}
            </ProductsGrid>
                <Button onClick={()=>checkUser}>Go to my Kart!</Button>  
        </Container>
    )
}