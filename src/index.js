import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css'
import Welcome from './assets/components/Welcome.js';
import Start from './assets/components/Start';
import App from './assets/components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>

);



///o que fazer?
///está dando um bug que ao clicar para virar uma carta, todas viram. Não sei porque.
