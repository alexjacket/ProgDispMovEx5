import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Comentario from './Comentario'
import Cartao from './Cartao'
import Botao from "./Feedback";
import Foto1 from './images/1.jpeg'
import Foto2 from './images/2.jpeg'
import Foto3 from './images/3.jpeg'


const App = () => {
    return(
        <div className="container border rounded mt-2">
            <div className="row justify-content-center border-bottom m-2">
                <h1 className="display-5 text-center">Comentários</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-36 m-2">
                    <Cartao cabecalho="22/04/2021, as 14:59">
                        <Comentario
                            icone={Foto2}
                            tamanho="col-md-1"
                            nome="xX_Dark_Poli_Xx"
                            descricao="Eu gostei muito do filme. Achei muito boa as cenas de ação e adorei a conclusão da Mari"
                        />
                        <Botao
                            estiloBotao1="btn btn-outline-dark btn-sm btn-block"
                        />
                    </Cartao>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-36 m-2">
                    <Cartao cabecalho="22/04/2021, as 18:22">
                        <Comentario
                            icone={Foto1}
                            tamanho="col-md-1"
                            nome="J.Cesar"
                            descricao="Adorei. Achei incrível. Concordo com todas as opiniões positivas que já foram dadas."
                        />
                        <Botao
                            estiloBotao1="btn btn-outline-dark btn-sm btn-block"
                        />
                    </Cartao>

                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-36 m-2">
                    <Cartao cabecalho="23/04/2021, as 04:30">
                        <Comentario
                            icone={Foto3}
                            tamanho="col-md-1"
                            nome="Xando-kun"
                            descricao="Achei acima da média, esperava mais, mas também esperava menos, no final, acho que esperei o bastante."
                        />
                        <Botao
                            estiloBotao1="btn btn-outline-dark btn-sm btn-block"
                        />
                    </Cartao>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
