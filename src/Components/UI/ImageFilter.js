import React from 'react';
import ImgAlimentacao from '../../assets/images/alimentacao.svg';
import ImgOutros from '../../assets/images/outros.svg';
import ImgSaude from '../../assets/images/saude.svg';
import ImgTransporte from '../../assets/images/transporte.svg';
import ImgUtilidades from '../../assets/images/utilidades.svg';
import { IconeTema } from './';

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={ ImgAlimentacao } alt="Restaurante" />,
        Utilidades: <IconeTema src={ ImgUtilidades } alt="Utilidades" />,
        Saude: <IconeTema src={ ImgSaude } alt="Saúde" />,
        Transporte: <IconeTema src={ ImgTransporte } alt="Transporte" />,
        default: <IconeTema src={ ImgOutros } alt="Outros" />,
    }

    return Images[type] || Images.default;
};
