import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import seta from '../images/seta_play.png';
import logo from '../images/logo.png';
import seta_virar from '../images/seta_virar.png';
import { hover } from '@testing-library/user-event/dist/hover';
import CardTurn from './CardTurn';
import styled from 'styled-components';

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

    const [count, setcount] = useState(0)





    return (
        <Container>
            <Header>
                <img
                    src={logo}
                    alt='logo'
                    style={{ width: 52, height: 60, marginRight: 20 }}
                />
                <p style={{ fontFamily: 'Righteous, sans-serif', fontSize: '36px', color: 'white' }}>ZapRecall</p>

            </Header>
            <QuestionContainer>

                {cards.map((cards, index) => (
                    <CardTurn counter={counter} key={index} cards={cards} index={index} />
                )
                )}


            </QuestionContainer>
            <Footer>{count}/{cards.length} concluídos</Footer>


        </Container>

    )

    function counter() {
        setcount(count + 1);
    }


}

const Footer = styled.div`
width: 375px;
height: 70px;
background-color: yellow;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
`

const QuestionContainer = styled.div`
  width: 375px;
  height: 495px;
  background-color: #FB6B6B;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
    overflow-y: scroll;
  }
`;

const Container = styled.div`
  width: 375px;
  height: 667px;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Header = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`

