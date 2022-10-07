import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import react from "react";

export default function SelecionarFilmes() {

    const [filmesLista, setFilmesLista] = react.useState([])


    useEffect(
        () => {
            const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies'

            const promise = axios.get(URL)

            promise.then(
                (res) => {
                    console.log(res.data)
                    setFilmesLista(res.data)
                })

                promise.catch((err) => console.log(err.response.data))
        }
        , [])




    return (
        <ContainerFilmes>
            <SelecioneFilme>
                <p>Selecione o filme</p>

                <ListaFilmes>
                    {filmesLista.map((o) => {
                        return (
                            <Filme key={o.id}>
                                <img src={o.posterURL} alt='' />
                            </Filme>
                        )
                    })}
                </ListaFilmes>

            </SelecioneFilme>
        </ContainerFilmes>
    )
};






const ContainerFilmes = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-top:67px;
`;

const SelecioneFilme = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:450px;
    
    p{
        margin:20px;
        font-family:'Roboto', sans-serif;
        font-size: 24px;
        font-weight:400;
        color: #293845;
    }
`;

const ListaFilmes = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const Filme = styled.div`
    width:145px;
    height:209px;
    background-color:#FFF;
    box-shadow:0px 2px 4px 2px rgba(0,0,0,0.1);
    border-radius:3px;
    margin:30px;
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        width:129px;
        height:193px;
    }
`;