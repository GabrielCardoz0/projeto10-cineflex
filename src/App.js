import React from "react"
import styled from "styled-components"
import SelecionarFilmes from "./ContainerFilmes";
import reset from './reset.css'
import SelecionarAssento from "./SelecionarAssento";
import SelecionarHorario from "./SelecionarHorario";
import SucessoPage from "./SucessoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

    return (
        <BrowserRouter>
            <Logo>CINEFLEX</Logo>
            <Routes>
                <Route path="/" element={<SelecionarFilmes/>} />
                <Route path="/filme/:idFilme" element={<SelecionarHorario/>} />
                <Route path="/showtimes/:idSessao" element={<SelecionarAssento/>} />
                <Route path="/" element={<SucessoPage/> } />
            </Routes>
        </BrowserRouter>
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
