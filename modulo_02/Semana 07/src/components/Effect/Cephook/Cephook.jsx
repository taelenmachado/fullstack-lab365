import styles from './Cephook.module.css';
import { useCep } from '../../../hook/useCep';

export function Cephook() {
    const [status, setCep] = useCep()

    return (
        <div className={styles.cephook}>

            <form>
                <label>
                    Insira o Cep:
                    <input
                        type='text'
                        id="novoCep"
                        onBlur={(event) => { setCep(event.target.value) }}>
                    </input>
                </label>
            </form>

            {status.loading ? <p>Carregando...</p> : <div>

                {status.data.cep ? <div>
                    <h1>Endereço completo</h1>
                    <p>Logradouro: {status.data.logradouro}</p>
                    <p>Complemento: {status.data.complemento}</p>
                    <p>Bairro: {status.data.bairro}</p>
                    <p>Cidade/UF: {status.data.localidade}/{status.data.uf}</p>
                </div> : 
                <div>
                    <h1>Erro ao buscar</h1>
                    <p>{status.error.message}</p>
                    <p>{status.error.stack}</p>
                </div>}
            </div>}
        </div>
    )
}