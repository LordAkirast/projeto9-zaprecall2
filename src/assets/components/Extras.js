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

    const [cards, setcards] = useState([])

    const [count, setcount] = useState(0)
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [creationMode, setcreationMode] = useState(1);
    const [submitCount, setSubmitCount] = useState(0);
    const [formSubmitCount, setFormSubmitCount] = useState(0);





    return (
        creationMode === 0 ?
            <Container>
                <Header>
                    <img
                        src={logo}
                        alt='logo'
                        style={{ width: 52, height: 60, marginRight: 20 }}
                    />
                    <p style={{ fontFamily: 'Righteous, sans-serif', fontSize: '36px', color: 'white' }}>EXTRAS MODE</p>

                </Header>
                <QuestionContainer>

                    {cards.map((cards, index) => (
                        <CardTurn counter={counter} key={index} cards={cards} index={index} />
                    )
                    )}


                </QuestionContainer>
                <Footer>{count}/{cards.length} concluídos</Footer>


            </Container> :
            <div>
                <label htmlFor="submit-count-input">Quantas vezes deseja enviar?</label>
                <input
                    name="submit-count"
                    id="submit-count-input"
                    type="number"
                    value={submitCount}
                    onChange={(event) => setSubmitCount(parseInt(event.target.value))}
                />

                <form onSubmit={formSubmitCount === submitCount ? procceed : handleAdd}>
                    <label htmlFor="question-input">Pergunta:</label>
                    <input
                        name="question"
                        id="question-input"
                        type="text"
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                    />
                    <label htmlFor="answer-input">Resposta:</label>
                    <input
                        name="answer"
                        id="answer-input"
                        type="text"
                        value={answer}
                        onChange={(event) => setAnswer(event.target.value)}
                    />
                    <button type="submit" disabled={submitCount === 0}>
                        Clique para enviar ({submitCount})
                    </button>
                </form>

                <p>Formulário enviado {formSubmitCount} vezes</p>
            </div>



    )

    function counter() {
        setcount(count + 1);
    }



    function handleAdd(event) {
        event.preventDefault();
        for (let i = 0; i < submitCount; i++) {
            event.preventDefault();
            const question = event.target.elements.question.value;
            const answer = event.target.elements.answer.value;
            setcards([...cards, { question, answer }]);
            event.target.reset();
            console.log(`Enviando formulário ${i + 1}`);
        }
        setFormSubmitCount(formSubmitCount + 1);
    };

    function procceed() {
        setcreationMode(0);
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

