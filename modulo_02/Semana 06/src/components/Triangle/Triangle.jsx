import styles from './Triangle.module.css'

export function Triangle({nome, lado}) {
    return (
        <div>
            <h1>Forma Geométrica: {nome} </h1>
            <h2>Quantidade de Lados: {lado} </h2>

            <div className={styles.triangle}></div>

            <br />
        </div>
    )
}