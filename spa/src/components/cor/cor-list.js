import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CorList = () => {

    const [cores, setCores] = useState([]);

    const doGetCores = async () => {
        const response = await axios.get("/api/cores");
        setCores(response.data);
    }

    useEffect(() => {
        doGetCores();
    }, [])

    const doExcluirCor = async (id) => {
        const response = await axios.delete(`/api/cores/${id}`);
        doGetCores();
    }

    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")){
            doExcluirCor(id);
        }
    }

    const tableData = cores.map (row => {
        return <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.sigla}</td>
            <td>{row.nome}</td>
            <td>
                <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                <Link to={`/cores/editar/${row.id}`}>
                    <button>Editar Cor</button>
                </Link>
            </td>
        </tr>
    })

    return (
        <div>
            <h2>Listagem de Cores</h2>
            <hr></hr>
            <Link to="/cores/nova">
                <button>Nova Cor</button>
            </Link>
            <table border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>sigla</td>
                        <td>nome</td>
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

export default CorList;