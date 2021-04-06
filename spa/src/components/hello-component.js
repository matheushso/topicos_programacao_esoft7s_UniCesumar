import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HelloComponent = (props) => {
    //var mensagem = "Hello Component!";
    const [mensagem, setMensagem] = useState("Hello Component!");

    const get = async () => {
        const response = await axios.get("/api/hello");
        setMensagem(response.data);

    }
    
    useEffect( () => {
            get();
    }, []);

    return (
        <div>
            {mensagem}
        </div>
    )
}

export default HelloComponent;