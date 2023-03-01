import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';
import logo from '../images/logo.png';
import Welcome from './Welcome';
import Start from './Start';

export default function App() {
    const [start, setstart] = useState(0);

    return (
        <>
            {start === 0 ? <Welcome begin={begin} /> : <Start />}
        </>

    )

    function begin() {
        setstart(1);
    }
}