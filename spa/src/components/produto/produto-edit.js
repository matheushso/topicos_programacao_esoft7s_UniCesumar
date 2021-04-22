import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom'

const ProdutoEdit = () => {

    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdiçao = idParaEditar !== undefined;
    const [produto, setProduto] = useState({descricao:"", lancadoEm: new Date(), precoUnitario: 0.00 });

    const doGetById = async () => {
        const response = await axios.get(`/api/produtos/${idParaEditar}`, produto);
        setProduto(response.data)
    }

    useEffect(() => {
        if(emModoDeEdiçao) {
            doGetById();
        }
    }, []);

    const doPost = async () => {
        const response = await axios.post("/api/produtos", produto);
        alert("Novo Produto criada! Id=" + response.data);
        history.push("/Produtos")
    }

    const doPut = async () => {
        const response = await axios.put(`/api/produtos/${idParaEditar}`, produto);
        history.push("/Produtos")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(emModoDeEdiçao) {
            doPut();
        } else {
            doPost();
        }
    }

    const handleChange = (event) => {
        //console.log(event.target.name + "= " + event.target.value);
        const novoProduto = {...produto, [event.target.name]: event.target.value};
        //console.log(novoProduto);
        setProduto(novoProduto);
    }

    return (
        <div>
            <h2>Edição de Produto {emModoDeEdiçao ? "(editando)" : "(incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Descrição:
                    <input type="text" name="descricao" onChange={handleChange}></input>
                </div>
                <div>Lançado em:
                    <input type="date" name="lancadoEm" onChange={handleChange}></input>
                </div>
                <div>Preço unitário:
                    <input type="text" name="precoUnitario" onChange={handleChange}></input>
                </div>
                <button>Enviar</button>
                <Link to="/cores">
                    Voltar
                </Link>
            </form>
        </div>
    )
}

export default ProdutoEdit;
