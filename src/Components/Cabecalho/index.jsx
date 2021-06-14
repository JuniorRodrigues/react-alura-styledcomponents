import React from "react";

import styled from 'styled-components';
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const Cabecalho = () => {
    return (
        <StyledCabecalho>
            <Logo src={bank_logo} alt="Logo Smart Bank" />
            <div>
                <Btn href="https://google.com">Ajuda</Btn>
                <Btn primary href="https://google.com">Sair</Btn>
            </div>
        </StyledCabecalho>
    );
};

const StyledCabecalho = styled.header`
    background-color: ${ corPrimaria };
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
`;

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
