import React, { useState } from 'react';
import UserCard from '../UseCard/UserCard';
import './UserList.module.css';
import Search from '../Search/Search';

const UserList = ({ userList }) => {
  const [users, setUsers] = useState(userList);
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (foundUser) => {
    setSearchResult(foundUser);
  };

  return (
    <div>
      <Search users={users} onSearch={handleSearch} />
      {searchResult ? (
        searchResult === 'notFound' ? (
          <p>Cadastro não encontrado</p>
        ) : (
          <UserCard user={searchResult} />
        )
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <UserCard key={user.id} user={user} setUser={setUsers} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
