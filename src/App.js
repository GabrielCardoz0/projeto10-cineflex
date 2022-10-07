import React from "react"
import styled from "styled-components"
import SelecionarFilmes from "./ContainerFilmes";
import reset from './reset.css'
import SelecionarAssento from "./SelecionarAssento";
import SelecionarHorario from "./SelecionarHorario";
import SucessoPage from "./SucessoPage";

const r = reset;
function Tralala(){
    return r
}
Tralala()


export default function App() {
    return (
        <>
            <Logo>CINEFLEX</Logo>
            {/* <SelecionarFilmes/> */}
            {/* <SelecionarHorario/> */}
            {/* <SelecionarAssento/> */}
            <SucessoPage/>

        </>
    )
}

const Logo = styled.div`
    background-color:#C3CFD9;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 67px;
    width: 100%;
    color:red;
    font-size:34px;
    font-weight:400;
    font-family:'Roboto', sans-serif;
    position:fixed;
    top:0px;
`;
