import styled from "styled-components"

export default function SelecionarAssento() {
    return (
        <>
            <ListaAssentos>
                <span>Selecione o(s) assento(s)</span>
                <AssentosDisponiveis>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>10</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>
                    <AssentoDisponivel>01</AssentoDisponivel>

                </AssentosDisponiveis>
                <DescricaoAssentos>
                    <AssentoSelecionado><span>Selecionado</span></AssentoSelecionado>
                    <AssentoDisponivel><span>Disponível</span></AssentoDisponivel>
                    <AssentoIndisponivel><span>Indisponível</span></AssentoIndisponivel>
                </DescricaoAssentos>
                <CompradorInform>
                    <span>Nome do comprador:</span>
                    <input placeholder="Digite seu nome..."></input>
                </CompradorInform>
                <CompradorInform>
                    <span>CPF do comprador:</span>
                    <input placeholder="Digite seu CPF..."></input>
                </CompradorInform>

                <ReservarAssento>Reservar Assento(s)</ReservarAssento>
            </ListaAssentos>
            <FooterFilmes>
                <Filme><img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" alt='' /></Filme>
                <span>
                    NOME DO FILME
                    Quinta-feira - 15:00
                </span>
            </FooterFilmes>
        </>
    )
};


const ListaAssentos = styled.div`
    width: 100%;
    height:800px;
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-top:67px;
    span{
        margin:30px;
        font-size:24px;
        font-weight:400;
        font-family:'Roboto', sans-serif;
        color: #293845;
    }
`;

const AssentosDisponiveis = styled.div`
    width:420px;
    display:flex;
    flex-wrap:wrap;
`;

const DescricaoAssentos = styled.div`
    width:350px;
    height:60px;
    display:flex;
    justify-content:space-around;
`;

const AssentoDisponivel = styled.div`
    background-color:#b08f9d;
    width:26px;
    height:26px;
    border-radius:18px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:7px;
    font-family:'Roboto', sans-serif;
    font-size:11px;
    border:1px solid #7B8B99;
    span{
        margin-top:80px;
        font-size:13px;
    }
`;

const AssentoSelecionado = styled.div`
    background-color:#1AAE9E;
    width:26px;
    height:26px;
    border-radius:18px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:7px;
    font-family:'Roboto', sans-serif;
    font-size:11px;
    border:1px solid #0e7d71;
    span{
        margin-top:80px;
        font-size:13px;
    }
`;

const AssentoIndisponivel = styled.div`
    background-color:#fbe192;
    width:26px;
    height:26px;
    border-radius:18px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:7px;
    font-family:'Roboto', sans-serif;
    font-size:11px;
    border:1px solid #f7c52b;
    span{
        margin-top:80px;
        font-size:13px;
    }
`;

const CompradorInform = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:30px;
    span{
        font-family:'Roboto', sans-serif;
        font-size:18px;
        color:#293845;
        margin:3px;
    }
    input{
        width:327px;
        height:51px;
        padding:18px;
        box-sizing:border-box;
        font-size:18px;
    }
    input::placeholder{
        font-size:18px;
        font-style:italic;
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

const ReservarAssento = styled.button`
    background-color:#e8833a;
    margin-top:30px;
    width:225px;
    height:42px;
    border:1px solid #FFF;
    color: #FFF;
    border-radius:3px;

`;
