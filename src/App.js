import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Botao } from './components/Button';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App-header">
      <Header/>
      <Botao textDisplay = "Botao 1" habilitado = {true}/>
      <Botao textDisplay = "Botao 2" habilitado = {false}/>
      <Form/> 
    </div>
  );
}

export default App;
