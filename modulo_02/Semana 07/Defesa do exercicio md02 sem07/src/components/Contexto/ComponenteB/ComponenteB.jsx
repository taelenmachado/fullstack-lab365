import styles from './ComponenteB.module.css'

import { ComponenteC } from '../ComponenteC/ComponenteC';

export function ComponenteB(props) {

    return(
        <>
        <div className={styles.componenteb}>
            <h1>ComponenteB</h1>
            <h3>Valor do Contador do Componente A: {props.valor}</h3>
        </div>

        <ComponenteC></ComponenteC>
        </>
    );
};