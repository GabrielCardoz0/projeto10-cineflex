import styled from "styled-components"
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";

export default function SelecionarHorario() {

    const { idFilme } = useParams()
    const [obgFilme, setObjFilme] = React.useState(0)
    const [diasDispo, setDiasDispo] = React.useState([])

    useEffect((
        () => {
            const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
            const promise = axios.get(URL)
            promise.then((res) => {
                setObjFilme(res.data)
                setDiasDispo(res.data.days)
                console.log(res.data)
                console.log(res.data.days)
            })
            promise.catch((err) => console.log(err.response.data))
        }), [])


    return (
        <>
            <Selecione>
                <p>Seleciono o horário</p>
                <SecoesDisponiveis>

                    {diasDispo.map((obj) => {
                        return (
                            <Secao key={obj.id}>
                                <p>{obj.weekday} - {obj.date}</p>
                                <HorariosDisponiveis>
                                    {obj.showtimes.map((i)=>{
                                        return(
                                            <span>{i.name}</span>
                                        )
                                    })}
                                </HorariosDisponiveis>
                            </Secao>
                        )
                    })}

                </SecoesDisponiveis>
            </Selecione>
            <FooterFilmes>
                <Filme><img src={obgFilme.posterURL} alt='' /></Filme>
                <span>{obgFilme.title}</span>
            </FooterFilmes>
        </>
    )
};


const Selecione = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:67px;
    p{
        margin:30px;
        color:#293845;
        font-size:24px;
    }
    font-family:'Roboto', sans-serif;
`;

const SecoesDisponiveis = styled.div`
    width:500px;
    height:500px;
`;

const Secao = styled.div`
    margin-bottom:35px;
    p{
        margin:22px;
        font-size:20px;
    }
`;

const HorariosDisponiveis = styled.div`
    margin-top:22px;
    span{
        padding:10px;
        background-color:orange;
        border-radius:2px;
        color: #fff;
        font-size:18px;
        box-sizing:border-box;
        margin-left: 22px;
        font-size:18px;
        font-weight:400;
    }
`;

const FooterFilmes = styled.div`

    background-color:#DFE6ED;
    width: 100%;
    height:117px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    bottom:0;
    z-index:1;
    border:1px solid #9EADBA;

    img{
        width:48px;
        height:72px;
    }
    span{
    margin-left:14px;
    font-family:'Roboto', sans-serif;
    font-size:26px;
    color:#293845;
    }
`;

const Filme = styled.div`
    background-color:#FFF;
    width:64px;
    height:89px;
    border-radius:2px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

