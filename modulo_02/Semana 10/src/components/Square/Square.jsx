import styles from './Square.module.css'

export function Square(props) {
    return (
        <div>
            <h1>Forma Geométrica: {props.nome} </h1>
            <h2>Quantidade de Lados: {props.lado} </h2>

            <div className={styles.square}></div>

            <br />
        </div>
    )
}