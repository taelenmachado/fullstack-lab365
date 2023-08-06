import React, { useState } from 'react';

const Search = ({ users, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const foundUser = users.find((user) => user.nickname.toLowerCase() === searchTerm.toLowerCase());
    onSearch(foundUser);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite o nickname do usuário"
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default Search;
