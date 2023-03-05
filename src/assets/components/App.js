import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import logo from '../images/logo.png';
import Welcome from './Welcome';
import Start from './Start';
import Extras from './Extras'

export default function App() {
    const [start, setstart] = useState(0);

    return (
        <>
            {start === 0 ? <Welcome begin={begin} extras={extras}/> : start === 2 ? <Extras /> : <Start />}
        </>

    )

    function begin() {
        setstart(1);
    }

    function extras() {
        setstart(2)
    }
}