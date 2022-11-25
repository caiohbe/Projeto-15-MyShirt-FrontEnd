import styled from "styled-components";
/*Cores do Projeto
Preto = #2A2522
Vermelho Escuro = A90015
Vermelho Claro = C30011
Cinza = CED2DC
Branco = F2F5FA*/
export const Container = styled.div`
background-color: #A90015;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const ProductsGrid = styled.div`
background-color:#F2F5FA;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 530px;
height:100%;
flex-wrap: wrap;
`
export const Item = styled.div`
background-color: #F2F5FA;
width: 250px;
height: 370px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 15px;
border-radius: 5px;
border: solid 12px #C30011;
font-family: 'Poppins', sans-serif;
font-weight:300;
font-size: 18px;
line-height: 20px;
color: #2A2522;
p{
    font-weight:400;
}
img {
    height:190px;
    width:190px;
    margin-top:10px;
    margin-bottom:5px;
    border-radius: 5px;
}
button {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    height:45px;
    width:150px;
    margin-bottom:5px;
    border-radius: 5px;
    color: #F2F5FA;
    background-color: #C30011;
    border: none;
    margin-top:5px;
    margin-bottom:5px;
    border-radius: 5px;
}`
export const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:80px;
    width:400px;
    color: #F2F5FA;
    background-color: #CED2DC;
    border: none;
    margin-top:5px;
    margin-bottom:10px;
    border-radius: 5px;
`