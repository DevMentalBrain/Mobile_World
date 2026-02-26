 import '../App.css'

 export function Card({id, nome}){
    return (
        <div className="item">
            <h2>{id} - {nome}</h2>
        </div>
    )
 }