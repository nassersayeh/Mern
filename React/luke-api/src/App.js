import './App.css';
import {Router} from '@reach/router';
import Searchbar from './components/Searchbar';
import Error from './components/Errors';
import People from './views/People';
import Planet from './views/Planet';
import Starships from './views/Starships';

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <Router>
        <People path="/people/:id/"/>
        <Planet path="/planets/:id/"/>
        <Starships path="/starships/:id/"/>
        <Error path="/error/"/>
      </Router>
    </div>
  );
}

export default App;
