import styles from './ComponenteA.module.css'
import Context from '../../../context/Context';
import { useState } from 'react';
import { ComponenteB } from '../ComponenteB/ComponenteB';

export function ComponenteA() {
    const [contador, setContador] = useState(0);

    return (
        <Context.Provider value={[contador, setContador]}>
            <div className={styles.componentea}>
                <h1>ComponenteA</h1>
                <h3>Valor do Contador do ComponenteA: {contador}</h3>

                <button type="button" onClick={() => setContador(contador + 1)}>
                    Incrementar Contador do Componente A
                </button>
            </div>
            <ComponenteB></ComponenteB>
        </Context.Provider>
    );
};