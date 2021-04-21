import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProdutoList = () => {

    const [produtos, setProdutos] = useState([]);

    const doGetProdutos = async () => {
        const response = await axios.get("/api/produtos");
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
            <h2>Listagem de produtos</h2>
            <hr></hr>
            <Link to="/produtos/novo">
                <button>Novo Produto</button>
            </Link>
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