import '../App.css'
import logoSenac from '../assets/logo.jpg'

function BotaoAlerta({curso}){

    return (
        <>
            <button> {curso.nome} </button>
        </>
    )
}

export function Header(){
    // const curso = "BCC"
    const curso = {nome: "BCC", detalhes: "Bacharelado em ciência da computação"}
    return (
        <div className='header'>
            <h1>
                Boa noite {curso.nome}
            </h1>
            <p>Seja bem vindo ao {curso.detalhes}</p>
            <img src={logoSenac} width="200px" height="200px"/>
            <button onClick={() => alert(curso.nome + " - " + curso.detalhes)}>Botao!</button>
            <BotaoAlerta curso={curso} />  
        </div>
    )
}