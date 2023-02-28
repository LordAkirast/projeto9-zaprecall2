import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css'
import Welcome from './assets/components/Welcome.js';
import Start from './assets/components/Start';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<Welcome />
    <Start/>

);


///o que fazer?
/// criar um novo componente onde ao o valor de initiate for 1 ele muda.
// tem que aprender a usar ternário para renderizar. ou if else.
/// terminar de fazer as perguntas e também fazer de forma que use map pra isso
