import styled from "styled-components"
import { Link } from "react-router-dom"
import perfilLogo from "../images/perfilLogo.png"
import cartLogo from "../images/cartLogo.png"
import myShirtLogo from "../images/myShirtLogo.png"
import UserContext from "../contexts/UserContext"
import { useContext } from "react"

export default function Header() {
    const { name, token } = useContext(UserContext)

    return (
        <Top>
            {token ? 
                <Link to={"/perfil"}><img src={perfilLogo} alt="Ícone perfil" /></Link> : 
                <>
                    <StyledLink token={token} to={"/login"}>Entrar</StyledLink>
                    <StyledLink token={token} to={"/register"}>Cadastrar</StyledLink>
                </>
            }
            
            <Link to={"/checkout"}><img src={cartLogo} alt="Ícone carrinho" /></Link>
            <Link to={"/"}>
                <span><img src={myShirtLogo} alt="Logo"/> {name ? `Bem vindo(a) ${name}` : ""}</span>
            </Link>
        </Top>
    )
}

const Top = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #CED2DC;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: end;

    img {
        height: 26px;
        margin: 0px 10px;
        margin-top: 8px;
    }
    
    padding-right: 80px;

    span {
        display: flex;
        align-items: center;
        color: #2A2522;
        position: fixed;
        left: 80px;
        top: 4px;
        img {
            height: 35px;
            border-radius: 15px;
            margin-top: 0px;
        }
    }
`

const StyledLink = styled(Link)`
    display: ${props => props.token ? "none" : "flex"};
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    height: 22px;
    padding: 3px;
    border: 2px solid #A90015;
    border-radius: 3px;
    background-color: #C30011;
    color: #F2F5FA;
    margin-right: 5px;
`
