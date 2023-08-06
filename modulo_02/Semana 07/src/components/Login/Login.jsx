import { useRef, useState } from 'react';
import styles from './Login.module.css';

export function Login(props) {
    console.log("PAGINA ATUALIZADA")

    const emailInputElement = useRef();
    const passwordInputElement = useRef();

    /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); */

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            email: emailInputElement.current?.value,
            password: passwordInputElement.current?.value
        };

        console.log(data);
    }

    return (
        <div className={styles.Login}>

            <div className={styles.logincontainer}>

                <h1>Tela de Login</h1>

                <form onSubmit={handleSubmit}>
                    <label>
                        E-Mail:
                        <input
                            ref={emailInputElement}
                            type="email"
                            id="credencial"
                            placeholder="Digite o seu e-mail">
                        </input>
                    </label>

                    <label>
                        Senha:
                        <input
                        ref={passwordInputElement}
                            type="password"
                            id="senha"
                            placeholder="Digite a sua senha">
                        </input>
                    </label>

                    <input type="submit" value="Entrar" />
                </form>

            </div>

        </div>
    );
}

