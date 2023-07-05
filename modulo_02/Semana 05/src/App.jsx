import './App.css';

import { Geometrics } from './components/Geometrics'

import { Round } from './components/Round'
import { Square } from './components/Square';
import { Triangle } from './components/Triangle';

function App() {
  return (
    <div className="App">

      <Geometrics></Geometrics>

      <Round></Round>
      <Square></Square>
      <Triangle></Triangle>

    </div>
  );
}

export default App;
