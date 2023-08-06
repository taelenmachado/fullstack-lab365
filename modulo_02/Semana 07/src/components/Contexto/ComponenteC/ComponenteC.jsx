import { useContext } from 'react';
import Context from '../../../context/Context';
import styles from './ComponenteC.module.css'

export function ComponenteC() {
    const [contador, setContador] = useContext(Context);

    return (
        <>
            <div className={styles.componentec}>
                <h1>ComponenteC</h1>
                <h3>Valor do Contador do Componente A: {contador}</h3>

                <button type="button" onClick={() => setContador(0)}>
                    Zerar Contador do Componente A (Se eu quiser)
                </button>
            </div>
        </>
    );
};