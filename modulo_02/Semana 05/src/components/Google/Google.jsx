import styles from './Google.module.css';
import React from 'react';
import googleLogo from '../../Img/googlelogo.png';

export function Google() {
  return (
    <div>
      <header>
        <img src={googleLogo} alt="Google Logo" className={styles.logo} />
      </header>
      <main>
        <form>
          <input type="text" placeholder="Pesquisar" />
          <button type="submit">Pesquisa Google</button>
          <button type="button">Estou com sorte</button>
        </form>
      </main>
      <footer>
        <p>Sobre</p>
        <p>Publicidade</p>
        <p>Negócios</p>
        <p>Como funciona a Pesquisa</p>
      </footer>
    </div>
  );
}
