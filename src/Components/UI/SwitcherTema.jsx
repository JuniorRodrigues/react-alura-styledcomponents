import React from 'react';
import iconThemeOn from '../../assets/images/themeOn.svg';
import iconThemeOff from '../../assets/images/themeOff.svg';
import { Icone } from '.';

const claro = <Icone src={ iconThemeOn } alt="Tema Claro" />;
const escuro = <Icone src={ iconThemeOff } alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);
