import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { App } from './App';

const rootNode = document.getElementById('root');
console.log('firing up');
ReactDOM.render(<App />, rootNode);