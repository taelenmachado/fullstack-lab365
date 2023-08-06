import { useState } from 'react'
import styles from './Events.module.css'
import { func } from 'prop-types';

export function Events() {

    const [contador, setContador] = useState(0);

    function handleContador() {
       const novoValor = contador + 1;
       setContador(novoValor)
    }

    /* function quandoSubmit(event) {
        event.preventDefault();
        console.log(`O nome digitado é ${nome}`); */

    /* function cliqueUm() {
console.log("Você clicou no botão número 1")
}

function cliqueDois(event) {
console.log("Você clicou no botão número 2")
} */

    return (
        <div className={styles.events}>

            {/*STATE*/}
            <br />

            <h1>Valor do contador: {contador}</h1>
            <button onClick={() => handleContador()}>Incrementa contador</button>


            {/* ONBLUR*/}
            <br />

            {/*<label>Digite o seu nome: </label>
            <input type="text" placeholder={nome} onBlur={(event) => setNome(event.target.value)} />

            <p>O nome digitado é: {nome}</p>

            {/* ONSUBMIT E ONCHANGE*/}
            <br />

            {/* <form onSubmit={quandoSubmit}>
            <label>Digite o seu nome: </label>
            <input type='text' value={nome} onChange={(event) => setNome(event.target.value)}/>
            <input type='submit' value="Submeter"/>
        </form> */}


            {/* ONCLICK */}
            <br />

            {/*<button onClick={() => cliqueUm()}>Botão número 1</button>*/}

            <br />

            {/*<button onClick={() => cliqueDois()}>Botão número 2</button>*/}

            {/* <button onclick = "cliqueDois(e)">Botão número 2</button>*/}
            <br />

        </div>
    )

}