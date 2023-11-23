import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

axios.defaults.baseURL = 'https://restcountries.com/';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
