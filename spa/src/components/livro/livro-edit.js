import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom'

const LivroEdit = () => {

    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdiçao = idParaEditar !== undefined;
    const [livro, setLivro] = useState({titulo:"", autor: "", quantidadeDePaginas: "" });

    const doGetById = async () => {
        const response = await axios.get(`/api/livros/${idParaEditar}`, livro);
        setLivro(response.data)
    }

    useEffect(() => {
        if(emModoDeEdiçao) {
            doGetById();
        }
    }, []);

    const doPost = async () => {
        const response = await axios.post("/api/livros", livro);
        alert("Nova livro criada! Id=" + response.data);
        history.push("/livros")
    }

    const doPut = async () => {
        const response = await axios.put(`/api/livros/${idParaEditar}`, livro);
        history.push("/livros")
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
        const novoLivro = {...livro, [event.target.name]: event.target.value};
        //console.log(novaCor);
        setLivro(novoLivro);
    }

    return (
        <div>
            <h2>Edição de livro {emModoDeEdiçao ? "(editando)" : "(incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Título:
                    <input type="text" name="titulo" onChange={handleChange}></input>
                </div>
                <div>Autor:
                    <input type="text" name="autor" onChange={handleChange}></input>
                </div>
                <div>Quantidade de páginas:
                    <input type="number" name="quantidadeDePaginas" onChange={handleChange}></input>
                </div>
                <button>Enviar</button>
                <Link to="/livros">
                    Voltar
                </Link>
            </form>
        </div>
    )
}

export default LivroEdit;
