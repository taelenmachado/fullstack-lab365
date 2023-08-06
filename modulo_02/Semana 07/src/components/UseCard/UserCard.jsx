import React, { useState } from 'react';
import { FaThumbsUp, FaEdit, FaSave } from 'react-icons/fa'; // Importe os ícones que você deseja utilizar

const UserCard = ({ user }) => {
  const [likes, setLikes] = useState(user.likes);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {

    console.log('Usuário editado:', editedUser);

    setLikes(editedUser.likes);

    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="card">
      <h3>
        {isEditing ? (
          <input type="text" name="nickname" value={editedUser.nickname} onChange={handleChange} />
        ) : (
            editedUser.nickname
        )}
      </h3>
      <p>
        Idade:{' '}
        {isEditing ? (
          <input type="number" name="idade" value={editedUser.idade} onChange={handleChange} />
        ) : (
            editedUser.idade
        )}
      </p>
      <p>
        Email:{' '}
        {isEditing ? (
          <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
        ) : (
            editedUser.email
        )}
      </p>
      <p >
        <FaThumbsUp onClick={handleLikeClick}/> Likes: {likes}
  
      </p>
      <p>
        {isEditing ? (
          <FaSave onClick={handleSaveClick} />
        ) : (
          <FaEdit onClick={handleEditClick} />
        )}
        <span onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? 'Salvar' : 'Editar'}
        </span>
      </p>
    </div>
  );
};

export default UserCard;
