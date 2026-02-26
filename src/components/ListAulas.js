import { Card } from "./Card"

function ExibirCards({cards}){
    return (
        <ul className="card">
            {cards.map(item =>  {
                return <Card key={item.id} id={item.id} nome={item.nome}/>
            })}
        </ul> 
    )
}

export function ListAulas({aulasSelecionadas}){
    return(
        <div className="container-cards">
            <ExibirCards cards={aulasSelecionadas}/>
        </div>
    )
}