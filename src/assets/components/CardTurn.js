import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import seta from '../images/seta_play.png';
import logo from '../images/logo.png';
import seta_virar from '../images/seta_virar.png';
import { hover } from '@testing-library/user-event/dist/hover';
import certo from '../images/icone_certo.png'
import styled from 'styled-components';


export default function CardTurn({ flip, index, cards }) {
    const [turn, setturn] = useState(0)
    const [status, setstatus] = useState(seta)
    const [answered, setanswered] = useState(0)


    return (
        answered === 0 ? ((

            turn === 0 ? (
                <div key={index} className='question-closed'>pergunta {index + 1}
                    <img onClick={flip} src={status} /></div>) :
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
                                    <NoRemember >Não lembrei</NoRemember>
                                    <NearlyRemember >Quase lembrei</NearlyRemember>
                                    <Zap onClick={() => (setstatus(certo), setturn(0), setanswered(1))}>ZAP</Zap>
                                </div>



                            </div >
                        </CardRemContainer>

                    )
                )
        )
        ) : (<div key={index} className='question-closed'>pergunta {index + 1}
        <img onClick={flip} src={status} /></div>)
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