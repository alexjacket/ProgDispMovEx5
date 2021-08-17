import React from "react";

const Botao = (props) => {
    return(
        <div>
            <button className={props.estiloBotao1}>Aceitar</button>
            <br/>
            <button className={props.estiloBotao1}>Recusar</button>
        </div>
    )
}


export default Botao