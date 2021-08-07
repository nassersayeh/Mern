import './App.css';
import Main from "./views/Main"
import {useState} from 'react'
import Nav from "./components/Nav"
import {Router} from "@reach/router"
import AddPlayerForm from "./components/AddPlayerForm"
import ListPlayer from "./components/ListPlayers"
function App() {
  const [players,setPlayers]= useState([])
  const listManagePlayer = [{disc:"Manage Players",path:"players"},{disc:"Manage Players status",path:"status"}]
  const listPlayers = [{disc:"List",path:"list"},{disc:"Add Player",path:"addplayer"}]
  const onFitchHandler= (arrobj)=>{
    setPlayers(arrobj);
  }
  console.log(players)
  return (
    <div className="App">
      <Nav
        displayList = {listManagePlayer}
      />
      <Router>
      <Main path="/players" fetch={onFitchHandler} PlayerList={listPlayers}>
        <ListPlayer path="/list" ListPl={players} fetch={onFitchHandler} />
        <AddPlayerForm path="/addplayer"/>
      </Main>
      </Router>
    </div>
  );
}

export default App;
