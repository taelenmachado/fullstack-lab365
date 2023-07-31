import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Events } from './components/Events/Events';
import { Login } from './components/Login';
import { Counters } from './components/Effect/Counters';
import { Cephook } from './components/Effect/Cephook';
import { Error } from './components/Error';
import { ComponenteA } from './components/Contexto/ComponenteA';
import { Google } from './components/Google/Google';


function App() {
  return (
    <Router>

      <nav className='menu'>
      {/*   <Link to='/events'>Eventos</Link>
        <Link to='/login'>Login</Link>
        <Link to='/counters'>Contadores</Link>
        <Link to='/cep'>CEP</Link>
        <Link to='/google'>Google</Link>
      <Link to='/componentea'>Componente A (Contexto)</Link> */}
      </nav>

      <Routes>
     {/*    <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/cep" element={<Cephook />} />
        <Route path="*" element={<Error />} />
      <Route path="/componentea" element={<ComponenteA/>} /> */}
      <Route path="/google" element={<Google/>} />
      </Routes>

    </Router>
  );
}

export default App;