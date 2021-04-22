import React, { useState } from 'react';

function ArCondicionado() {
    const [estado, setEstado] = useState('Desligado');
    const [temperatura, setTemperatura] = useState(23);

    const mudarEstado = () => {
        if (estado == 'Ligado') {
            setEstado('Desligado') 
        } else {
            setEstado('Ligado')
        }
    }

    return (
        <div>
            Ar Condicionado: {estado}, Temperatura: {temperatura}°C.
            <button onClick= {mudarEstado}>ON/OFF</button>
            <button onClick= {() =>setTemperatura(temperatura-1)}>- 1°C</button>
            <button onClick= {() =>setTemperatura(temperatura+1)}>+ 1°C</button>
        </div>
    );
}

export default ArCondicionado;