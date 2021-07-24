import React from 'react';
import './App.css';
import MakeButton from './components/MakeButton';

function App() {
  return (
    <div className="App">
      <MakeButton firstName="Nasser" lastName="Sayeh" age={30} hairColor="Gold" />
      <MakeButton firstName="Naasser" lastName="SAYEH" age={40} hairColor="Red" />
      <MakeButton firstName="Kareem" lastName="Sayeh " age={25} hairColor="Brown" />
    </div>
  );
}

export default App;
