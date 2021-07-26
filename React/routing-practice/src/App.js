import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent'
import HomeIdComponent from "./components/HomeIdComponent"
import HelloComponent from './components/HelloComponent'
import HelloColorComponent from './components/HelloColorComponent'
import { Router } from '@reach/router';


function App() {
  
  return (
    <div className="App">
      <Router>
            <HomeComponent path="/home"/>
            <HomeIdComponent path="/:id"/>
            <HelloComponent path="/:text" />
            <HelloColorComponent path="/:text/:color/:backcolor"/>

        </Router>
    </div>
  );
}

export default App;
