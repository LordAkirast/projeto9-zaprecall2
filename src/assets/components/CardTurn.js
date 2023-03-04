import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import seta from '../images/seta_play.png';
import logo from '../images/logo.png';
import seta_virar from '../images/seta_virar.png';
import { hover } from '@testing-library/user-event/dist/hover';
import certo from '../images/icone_certo.png'
import erro from '../images/icone_erro.png'
import quase from '../images/icone_quase.png'
import styled from 'styled-components';


export default function CardTurn({ flip, index, cards }) {




    const [turn, setturn] = useState(0)
    const [status, setstatus] = useState(seta)
    const [answered, setanswered] = useState(0)

    const QuestionClosed = styled.div`
    width: 300px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    background-color: white;
    margin-top: 25px;
    border-radius: 5px;
    justify-content: space-around;
    text-decoration: ${answered === 1 ? 'line-through' : 'none'};
    color: ${status === erro ? '#FF3030' : status === quase ? '#FF922E' : status === certo ? '#2FBE34' : 'black'}

    `


    return (
        answered === 0 ? ((

            turn === 0 ? (
                <QuestionClosed key={index} className='question-closed'>pergunta {index + 1}
                    <img onClick={flip} src={status} /></QuestionClosed>) :
                turn === 1 ? (
                    (<div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'end',
                        backgroundColor: '#FFFFD4',
                        margin: 5,
                    }} key={index}>
                        <div className='question-open'>{cards.question}</div>
                        <img onClick={flip} src={seta_virar} style={{ width: 30, height: 20, margin: 5 }} />
                    </div>
                    )) : ((
                        <CardRemContainer>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'end',
                                backgroundColor: '#FFFFD4',
                                margin: 5,
                            }} key={index}>

                                <div>
                                    <QuestionOpen>{cards.answer}</QuestionOpen>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        backgroundColor: '#FFFFD4',
                                        width: '100%',
                                        justifyContent: 'space-evenly'
                                    }}>
                                    <NoRemember onClick={() => (setstatus(erro), setturn(0), setanswered(1))}>Não lembrei</NoRemember>
                                    <NearlyRemember onClick={() => (setstatus(quase), setturn(0), setanswered(1))}>Quase lembrei</NearlyRemember>
                                    <Zap onClick={() => (setstatus(certo), setturn(0), setanswered(1))}>ZAP</Zap>
                                </div>



                            </div >
                        </CardRemContainer>

                    )
                )
        )
        ) : (<QuestionClosed key={index}>pergunta {index + 1}
            <img onClick={flip} src={status} /></QuestionClosed>)
    )

    function flip() {
        setturn(turn + 1)
    }




}








const CardRemContainer = styled.div`
display: 'flex';
flex-direction: 'column';
align-items: 'end';
background-color: '#FFFFD4';
margin: 5px;    
`

const NoRemember = styled.button`
margin: 5px;
border-radius: 10px; 
color: 'white'; 
background-color: #FF3030; 
width: 85px; 
height: 35px;
`

const NearlyRemember = styled.button`
margin: 5px;
border-radius: 10px; 
color: 'white'; 
background-color: #FF922E; 
width: 85px; 
height: 35px;
`

const Zap = styled.button`
margin: 5px;
border-radius: 10px; 
color: 'white'; 
background-color: #2FBE34; 
width: 85px; 
height: 35px;
`

const QuestionOpen = styled.div`
  width: 299px;
  height: 131px;
  background-color: #FFFFD4;
  justify-content: start;
  align-items: baseline;
  margin: 5px;
  font-size: 18px;
  font-family: recursive;
  border-radius: 10px;
`