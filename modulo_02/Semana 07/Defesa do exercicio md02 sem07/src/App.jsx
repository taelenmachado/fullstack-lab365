import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Events } from './components/Events/Events';
import { Login } from './components/Login';
import { Counters } from './components/Effect/Counters';
import { Cephook } from './components/Effect/Cephook';
import { Error } from './components/Error';
import { ComponenteA } from './components/Contexto/ComponenteA';
import { Google } from './components/Google/Google';
import UserList from './components/UserList/UserList';

import Form from './components/Form/Form';

function App() {
  const userList = [
    { id: 1, nickname: 'usuario1', idade: 25, email: 'usuario1@example.com', likes: 0 },
    { id: 2, nickname: 'usuario2', idade: 30, email: 'usuario2@example.com', likes: 0 },
  ];

  return (
    <Router>
      <nav className='menu'>
        <Link to='/events'>Eventos</Link>
        <Link to='/login'>Login</Link>
        <Link to='/counters'>Contadores</Link>
        <Link to='/cep'>CEP</Link>
        <Link to='/google'>Google</Link>
        <Link to='/form'>Cadastro de usuário</Link>
        <Link to='/componentea'>Componente A (Contexto)</Link>
        <Link to='/userlist'>Lista de Usuários</Link>

      </nav>

      <div className='container'>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="/cep" element={<Cephook />} />
          <Route path="*" element={<Error />} />
          <Route path="/componentea" element={<ComponenteA />} />
          <Route path="/google" element={<Google />} />
          <Route path="/form" element={<Form />} />
          <Route path="/userlist" element={<UserList userList={userList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
