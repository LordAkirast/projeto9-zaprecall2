import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import logo from '../images/logo.png';

export default function Start() {

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
                <div className='question-closed'> </div>

            </div>


        </div>

    )
}