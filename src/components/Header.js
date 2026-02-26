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
            <h1>
                Meus Cursos
            </h1>
    )
}