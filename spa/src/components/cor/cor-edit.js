import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'

const CorEdit = () => {

    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdiçao = idParaEditar !== undefined;
    const [cor, setCor] = useState({sigla:"", nome: "" });

    const doGetById = async () => {
        const response = await axios.get(`/api/cores/${idParaEditar}`, cor);
        setCor(response.data)
    }

    useEffect(() => {
        if(emModoDeEdiçao) {
            doGetById();
        }
    }, []);

    const doPost = async () => {
        const response = await axios.post("/api/cores", cor);
        alert("Nova cor criada! Id=" + response.data);
        history.push("/cores")
    }

    const doPut = async () => {
        const response = await axios.put(`/api/cores/${idParaEditar}`, cor);
        history.push("/cores")
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
        const novaCor = {...cor, [event.target.name]: event.target.value};
        //console.log(novaCor);
        setCor(novaCor);
    }

    return (
        <div>
            <h2>Edição de Cor {emModoDeEdiçao ? "(editando)" : "(incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Sigla:
                    <input type="text" name="sigla" onChange={handleChange}></input>
                </div>
                <div>Nome:
                    <input type="text" name="nome" onChange={handleChange}></input>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default CorEdit;
