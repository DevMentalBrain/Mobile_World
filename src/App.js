import logo from './logo.svg';
import { use, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Botao } from './components/Button';
import { Form } from './components/Form';
import { ListAulas } from './components/ListAulas';

function App() {

  let valorInicialCont = 0
  const [varCont, setVarCont] = useState(valorInicialCont)

  return (
    <div className="container-main">
      <Header/>
      <Form/>
    </div>
  );
}

export default App;
