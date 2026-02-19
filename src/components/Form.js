function EnviarSubmissao(){
    alert("Enviado");
}

export function Form(){
    return (
        <>
            <form onSubmit={EnviarSubmissao}>
                <p>Qual seu curso?</p>
                <input></input>
                <button>Enviar</button>
            </form>
        </>
    )
}