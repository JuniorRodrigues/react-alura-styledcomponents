import React from 'react';
import ImgAlimentacao from '../../assets/images/alimentacao.svg';
import ImgOutros from '../../assets/images/outros.svg';
import ImgSaude from '../../assets/images/saude.svg';
import ImgTransporte from '../../assets/images/transporte.svg';
import ImgUtilidades from '../../assets/images/utilidades.svg';
import { Icone } from './';

export default (type) => {
    const Images = {
        Restaurante: <Icone src={ ImgAlimentacao } alt="Restaurante" />,
        Utilidades: <Icone src={ ImgUtilidades } alt="Utilidades" />,
        Saude: <Icone src={ ImgSaude } alt="Saúde" />,
        Transporte: <Icone src={ ImgTransporte } alt="Transporte" />,
        default: <Icone src={ ImgOutros } alt="Outros" />,
    }

    return Images[type] || Images.default;
};
