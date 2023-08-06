import { useEffect, useState } from "react";
import styles from './Counters.module.css';

export function Counters() {
    const [contadorUm, setcontadorUm] = useState(0);
    const [contadorDois, setcontadorDois] = useState(0);
    const [maiorContador, setmaiorContador] = useState(0);

    function retornaMaior(numeroUm, numeroDois) {
        if (numeroUm > numeroDois) {
            return numeroUm;
        } else {
            return numeroDois;
        }
    }

    useEffect(() => {
        document.title = `Clicou ${contadorUm + contadorDois} vezes`;
        setmaiorContador(retornaMaior(contadorUm, contadorDois))
    }, [contadorUm, contadorDois]);

    useEffect(() => {
        console.log(`Contador Um: ${contadorUm} | Contador Dois: ${contadorDois} | Maior contador: ${maiorContador}`);
    }, [contadorUm, contadorDois, maiorContador]);

    return (
        <div className={styles.contadores}>

            <div>
                <h1>Endereço dos Números</h1>
                <p>Contador Um: {contadorUm}</p>
                <p>Contador Dois: {contadorDois}</p>
                <p>Maior contador: {maiorContador}</p>
            </div>

            <div>
                <button onClick={() => setcontadorUm(contadorUm + 1)}> Incrementa Contador Um</button>
                <br />
                <button onClick={() => setcontadorDois(contadorDois + 1)}>Incrementa contador Dois</button>
            </div>
        </div>
    )
}