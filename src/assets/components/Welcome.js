import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import logo from '../images/logo.png';

export default function Welcome() {
  const [start, setstart] = useState(0);

  function runBarryRun() {
    window.location.href = 'https://www.youtube.com/watch?v=8D4ThTcvTDo';
  }

  return (
    <div className='container container--center'>
      <img 
        className='logo'
        src={logo}
        alt='logo'
        style={{ width: 136, height: 161 }}
        onClick={runBarryRun}
      />
      <p style={{ fontFamily: 'Righteous, sans-serif', fontSize: '36px', color: 'white' }}>ZapRecall</p>

      <button  className='initiate' onClick={begin}>
        Iniciar Recall
      </button>
      <button disabled={true} className='extra' onClick={begin}>
        Extras Mode
      </button>
    </div>
  );


  /// a ideia aqui é que quando for 1 então deve mudar de tela. o valor deve mudar ao clicar no initiate
  function begin() {
    setstart(1);
  }
}
