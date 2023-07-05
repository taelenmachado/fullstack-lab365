import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
const titulo = React.createElement('h1', {}, 'Meu primeiro elemento');
const subtitulo = React.createElement('h2', {}, 'Meu segundo elemento');
const container = React.createElement('div', {}, [titulo, subtitulo]);

const lista = React.createElement('div', {},
  React.createElement('h1', {}, 'Meus sabores favoritos de sorvete'),
  React.createElement('ul', {},
    [
      React.createElement('li', { className: 'brown' }, 'Chocolate'),
      React.createElement('li', { className: 'green' }, 'Menta'),
      React.createElement('li', { className: 'red' }, 'Morango'),
      React.createElement('li', { className: 'beige'}, 'Baunilha')
    ]
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  lista
);
*/


