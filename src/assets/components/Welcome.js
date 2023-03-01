import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import '../style/index.css';
import logo from '../images/logo.png';
import styled from "styled-components";

export default function Welcome({begin}) {
    

    function runBarryRun() {
        window.location.href = 'https://www.youtube.com/watch?v=8D4ThTcvTDo';
    }

    return (
        <ContainerCenter>
            <Logo
                src={logo}
                alt='logo'
                onClick={runBarryRun}
            />
            <p style={{ fontFamily: 'Righteous, sans-serif', fontSize: '36px', color: 'white' }}>ZapRecall</p>

            <ButtonInitiate onClick={begin}>
                Iniciar Recall
            </ButtonInitiate>
            <ButtonInitiate disabled={true} className='extra' onClick={begin}>
                Extras Mode
            </ButtonInitiate>
        </ContainerCenter>
    );


    /// a ideia aqui é que quando for 1 então deve mudar de tela. o valor deve mudar ao clicar no initiate
   
}


const ContainerCenter = styled.div`
  width: 375px;
  height: 667px;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
    width: 136px;
    height: 161px;
  &:hover {
    transform: scale(1.1);
    animation: pulse 1s infinite;
  }
`;

const ButtonInitiate = styled.button`
  width: 246px;
  height: 54px;
  background-color: white;
  color: red;
  font-family: 'Recursive', sans-serif;
  border-radius: 5px;
  
  &:hover {
    cursor:pointer;
  }
  
  &.extra {
    border: 5px solid #8d00ff;
    border-radius: 5px;
    box-shadow: 0 0 5px #8d00ff;
    transition: all 0.2s ease-in-out;
  }
  
  &.extra:hover {
    border: 2px solid #8d00ff;
    border-radius: 20px;
    box-shadow: 0 0 20px #8d00ff;
    animation: pulsate 1s ease-out infinite;
    color: #fff;
    text-shadow: 0 0 5px #8d00ff;
    animation: shake 0.5s linear infinite;
  }
`;