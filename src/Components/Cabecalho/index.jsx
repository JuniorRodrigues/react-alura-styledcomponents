import React from "react";

import styled from 'styled-components';
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const Cabecalho = () => {
    return (
        <div className="cabecalho">
            <Logo src={bank_logo} alt="Logo Smart Bank" />
            <div>
                <Btn href="https://google.com">Ajuda</Btn>
                <Btn primary href="https://google.com">Sair</Btn>
            </div>
        </div>
    );
};

const Logo = styled.img`
    height: 50px;
    width: 50px;
`;

const Btn = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;

    color: ${(props) => props.primary ? 'white' : corPrimaria };
    background: ${(props) => props.primary ? corPrimaria : 'white' };
`;

export default Cabecalho;
