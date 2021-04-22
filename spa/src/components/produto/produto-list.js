import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu';

const ProdutoList = () => {
    const [produtos, setProdutos] = useState([]);
    const [termoDeBusca, setTermoDeBusca] = useState("");

    const doGetProdutos = async () => {
        const response = await axios.get("/api/produtos");
        setProdutos(response.data);
    }

    const doSearchProdutos = async () => {
        const response = await axios.get(`/api/produtos?termo=${termoDeBusca}`);
        setProdutos(response.data);
    }

    useEffect(() => {
        doGetProdutos();
    }, [])

    const doExcluirProduto = async (id) => {
        const response = await axios.delete(`/api/produtos/${id}`);
        doGetProdutos();
    }

    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")){
            doExcluirProduto(id);
        }
    }

    const handleSearchInputChange = (event) => {
        setTermoDeBusca(event.target.value);
    }

    const handleSearch = (event) => {
        console.log("Pesquisando por: " + termoDeBusca)
        doSearchProdutos();
    }

    const tableData = produtos.map (row => {
        return <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.descricao}</td>
            <td>{row.lancadoEm}</td>
            <td>{row.precoUnitario}</td>
            <td>
                <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                <Link to={`/produtos/editar/${row.id}`}>
                    <button>Editar Produto</button>
                </Link>
            </td>
        </tr>
    })

    return (
        <div>
            <Menu></Menu>
            <h2>Listagem de produtos</h2>
            <hr></hr>
            <Link to="/produtos/novo">
                <button>Novo Produto</button>
            </Link>
            <div>
                <input type="text" name="search" onChange={handleSearchInputChange}></input>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>

            <table border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>descricao</td>
                        <td>lançado em</td>
                        <td>preço unitário</td>
                        <td>ações</td>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default ProdutoList;