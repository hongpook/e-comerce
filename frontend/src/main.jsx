import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './assets/styles/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <App />
</BrowserRouter>
)
