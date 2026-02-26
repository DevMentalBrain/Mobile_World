import { use, useState } from "react"
import { ListAulas } from "./ListAulas"

const aulas = [
    {id:1, nome: "Introdução"},
    {id:2, nome: "Banco de dados"},
    {id:3, nome: "Mobile"},
    {id:4, nome: "POO"},
    {id:5, nome: "Calculo"}
]




export function Form(){
    const [cursoEscolhido, setCursoEscolhido] = useState(null)

    function EnviarSubmissão(e){
    e.preventDefault()
    for(let i = 0; i < aulas.length - 1; i++){
        if(aulas[i].nome == e.target[0].value){
            console.log("qqr coisa")
            setCursoEscolhido(aulas[i])
            break
        }
    }
}
    return (
        <>
            <form onSubmit={EnviarSubmissão}>  
                <p>Nome do Curso</p>
                <input list="cursos" id="cursoSelecionado"/>
                <datalist id="cursos">
                    <option value={aulas[0].nome}/>
                    <option value={aulas[1].nome}/>
                    <option value={aulas[2].nome}/>
                    <option value={aulas[3].nome}/>
                    <option value={aulas[4].nome}/>
                </datalist>
                <button type="submit">Buscar</button>
            </form>
            {cursoEscolhido != null && <ListAulas aulasSelecionadas={cursoEscolhido}/>}
        </>
    )
}