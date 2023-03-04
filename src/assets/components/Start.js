import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import seta from '../images/seta_play.png';
import logo from '../images/logo.png';
import seta_virar from '../images/seta_virar.png';
import { hover } from '@testing-library/user-event/dist/hover';
import CardTurn from './CardTurn';

export default function Start() {

    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        // { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        // { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        // { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    

    

    return (
        <div className='container'>
            <div className='header'>
                <img
                    src={logo}
                    alt='logo'
                    style={{ width: 52, height: 60, marginRight: 20 }}
                />
                <p style={{ fontFamily: 'Righteous, sans-serif', fontSize: '36px', color: 'white' }}>ZapRecall</p>

            </div>
            <div className='question-container'>

                {cards.map((cards, index) => (
                    <CardTurn cards={cards} index={index} />
                )
                )}


            </div>


        </div>

    )

  
}

