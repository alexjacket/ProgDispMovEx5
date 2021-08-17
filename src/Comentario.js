import React from 'react';

//vou só definir isso para aplicar na index. é pra guardar um proc?

//pegando a definiçãodo que é pedido e colocando aqui
const Comentario = (props) => {
    return(
        <div className="align-items-center">
            <div className="align-items-center">
                <img src={props.icone} className={props.tamanho}></img>
            </div>

            <div className="w-10 ms-2 border rounded">
                <h4 className="text-left">{props.nome}</h4>
                <p className="text-left">{props.descricao}</p>
            </div>

        </div>
    )
}

export default Comentario
