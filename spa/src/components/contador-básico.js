import React, { useState, useEffect } from 'react';

function ContadorBásico() {
    //É possivel programar o que você precisar antes do return

    const [valor, setValor] = useState(0);

    useEffect(() => {
        console.log(valor);
    })

    return (
        <div>
            Contador básico. Valor atual: {valor}
            <button onClick={() => setValor(valor+1)}>+</button>
            <button onClick={() => setValor(valor-1)}>-</button>
        </div>
    );
}

export default ContadorBásico;