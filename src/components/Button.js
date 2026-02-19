export function Botao(props){
    return (
        <>
            <button onClick={() => alert("Clicou")} disabled = {props.habilitado ? false : true }> 
                {props.textDisplay}!
            </button>
        </>
    )
}