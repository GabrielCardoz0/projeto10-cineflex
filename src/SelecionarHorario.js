import styled from "styled-components"


export default function SelecionarHorario() {
    return (
        <>
            <Selecione>
                <p>Seleciono o horário</p>
                <SecoesDisponiveis>
                    <Secao>
                        <p>Quinta-feira - 24/06/2021</p>
                        <HorariosDisponiveis>
                            <span>15:30</span>
                            <span>14:30</span>
                        </HorariosDisponiveis>
                    </Secao>
                    <Secao>
                        <p>Data</p>
                        <HorariosDisponiveis>
                            <span>15:30</span>
                            <span>14:30</span>
                        </HorariosDisponiveis>
                    </Secao>
                </SecoesDisponiveis>
            </Selecione>
            <FooterFilmes>
                <Filme><img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" alt='' /></Filme>
                <span>NOME DO FILME</span>
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
    position:absolute;
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

