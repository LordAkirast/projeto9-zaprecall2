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


    return (

        turn === 0 ? (
            <div key={index} className='question-closed'>pergunta {index + 1}
                <img onClick={flip} src={seta} /></div>) :
            turn === 1 ? (
                (<div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'end',
                    backgroundColor: 'green',
                    margin: 5,
                }} key={index}>
                    <div className='question-open'>{cards.question}</div>
                    <img onClick={flip} src={seta_virar} style={{ width: 30, height: 20, margin: 5 }} />
                </div>
                )) : ((
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end',
                        backgroundColor: 'green',
                        margin: 5,
                    }} key={index}>

                        <div>
                            <div className='question-open'>{cards.answer}</div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: 'purple',
                                width: '100%',
                                justifyContent: 'space-evenly'
                            }}>
                            <button style={{ color: 'white', backgroundColor: '#FF3030', width: 85, height: 35 }}>Não lembrei</button>
                            <button style={{ color: 'white', backgroundColor: '#FF922E', width: 85, height: 35 }}>Quase lembrei</button>
                            <button style={{ color: 'white', backgroundColor: '#2FBE34', width: 85, height: 35 }}>ZAP</button>
                        </div>



                    </div >

                )
            )
    )

    function flip() {
        setturn(turn + 1)
    }
}

const DidURemember = styled.div`
width: 85px;
height: 37px;
font-family: recursive;
font-size: 12px;
color: white;
display: flex;
align-items: center;
align-content: center;
justify-content: center;
text-align: center;
`