import styles from './Round.module.css'
import PropTypes from 'prop-types'

export function Round(props) {
    return (
        <div>
            <h1>Forma Geométrica: {props.nome} </h1>
            <h2>Quantidade de Lados: {props.lado} </h2>

            <div className={styles.round}></div>

            <br />
        </div>
    )
};

Round.propTypes = {
    nome: PropTypes.string.isRequired,
    lado: PropTypes.string
}