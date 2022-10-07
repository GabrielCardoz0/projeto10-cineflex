import styled from "styled-components"


export default function SucessoPage() {
    return(
        <Corpo>
            <p>Pedido feito com sucesso!</p>
            <InformacoesPessoais>
                <p>Filmes e sessão</p>
                <Informacao>
                <span>Enola Holmes</span>
                <span>24/06/2021  15:00</span>
                </Informacao>

                <p>Ingressos</p>
                <Informacao>
                <span>Enola Holmes</span>
                <span>24/06/2021  15:00</span>
                </Informacao>

                <p>Comprador</p>
                <Informacao>
                <span>Nome: Joao da Silva</span>
                <span>CPF: 356.345.456-12</span>
                </Informacao>
            </InformacoesPessoais>
            <VoltarHome>Voltar para Home</VoltarHome>
        </Corpo>
    )
};



const Corpo = styled.div`
    width:100%;
    height:700px;
    display:flex;
    align-items:center;
    margin-top: 67px;
    flex-direction:column;
    font-family:'Roboto', sans-serif;
    p{
        margin-top:35px;
        font-size:16px;
        font-weight:700;
    }
`;

const InformacoesPessoais = styled.div`
    width:100%;
    height:300px;
    padding:15px;
    box-sizing:border-box;
    p{
        margin-top:20px;
        font-size:16px;
        font-weight:700;
    }
`;

const Informacao = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:200px;
    margin-top:8px;
    span{
        margin-top:2px;
    }
`;

const VoltarHome = styled.button`
    background-color:#e8833a;
    margin-top:25px;
    width:200px;
    height:42px;
    border:1px solid #FFF;
    color: #FFF;
    border-radius:3px;
`;