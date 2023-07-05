import styles from './Geometrics.module.css'

import { Round } from '../Round'
import { Square } from '../Square';
import { Triangle } from '../Triangle';

export function Geometrics() {

    return (
        <div className={styles.geometrics}>

        <Round nome="Redondo" lado= "0"></Round>
        <Square nome="Quadrado" lado= "4"></Square>
        <Triangle nome="Triangulo" lado= "3"></Triangle>
 
        </div>

    );
}