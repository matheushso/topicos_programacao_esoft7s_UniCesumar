import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu';

const LivroList = () => {

    const [livros, setLivros] = useState([]);

    const doGetLivros = async () => {
        const response = await axios.get("/api/livros");
        setLivros(response.data);
    }

    useEffect(() => {
        doGetLivros();
    }, [])

    const doExcluirLivro = async (id) => {
        const response = await axios.delete(`/api/livros/${id}`);
        doGetLivros();
    }

    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")){
            doExcluirLivro(id);
        }
    }

    const tableData = livros.map (row => {
        return <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.titulo}</td>
            <td>{row.autor}</td>
            <td>{row.quantidadeDePaginas}</td>
            <td>
                <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                <Link to={`/livros/editar/${row.id}`}>
                    <button>Editar Livro</button>
                </Link>
            </td>
        </tr>
    })

    return (
        <div>
            <Menu></Menu>
            <h2>Listagem de Livros</h2>
            <hr></hr>
            <Link to="/livros/novo">
                <button>Novo Livro</button>
            </Link>
            <table border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>titulo</td>
                        <td>autor</td>
                        <td>páginas</td>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default LivroList;