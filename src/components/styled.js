import styled from "styled-components";

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
margin-top:30px;
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
    border-radius: 5px;
    color: #F2F5FA;
    background-color: #C30011;
    border: none;
    margin-top:5px;
    margin-bottom:5px;
    border-radius: 5px;
}
`

export const KartProducts = styled.div`
    background-color:#F2F5FA;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 600px;
    height:100%;
    flex-wrap: wrap;
    margin-top: 30px;
    button{
            font-family: 'Poppins', sans-serif;
            font-weight:700;
            font-size: 20px;
            height:65px;
            width:250px;
            border-radius: 5px;
            color: #F2F5FA;
            background-color: #C30011;
            border: none;
            margin-top:20px;
            margin-bottom:5px;
            margin-left: 25px;
            border-radius: 5px;
        }
`

export const ItemKart = styled.div`
    background-color: #F2F5FA;
    width: 370px;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    border-radius: 5px;
    border: solid 5px #C30011;
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size: 18px;
    color: #2A2522;

    p{
        text-align: left;
        font-weight:400;
        font-size: 18px;
        line-height: 18px;
        margin-left: 15px;
    }

    img {
        height:100px;
        width:100px;
        margin-top:5px;
        margin-left: 15px;
        margin-bottom:5px;
        border-radius: 5px;
    }
`