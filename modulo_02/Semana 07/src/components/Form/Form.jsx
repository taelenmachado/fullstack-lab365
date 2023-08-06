import React, { useState } from 'react';
import styles from './form.module.css';

const Form = () => {
  const [user, setUser] = useState({
    nickname: '',
    idade: '',
    email: '',
    senha: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { nickname, idade, email, senha } = user;
    if (!nickname || !idade || !email || !senha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    console.log('Usuário cadastrado:', user);

    setUser({
      nickname: '',
      idade: '',
      email: '',
      senha: '',
    });

    setErrorMessage('');
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={user.nickname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={user.idade}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={user.senha}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;

