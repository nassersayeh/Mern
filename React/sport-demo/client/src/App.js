import './App.css';
import {Router} from '@reach/router'
import IndexView from "./views/indexView"
import CreateView from "./views/CreateView"
import DetailsView from "./views/DetailsView"
import EditView from "./views/EditView "

function App() {
  return (
    <div className="App">
    <Router>
    <IndexView path="/"/>
    <CreateView path="/create"/>
    <DetailsView path="/:id"/>
    <EditView path="/:id/edit"/>
    </Router>
    </div>
  );
}

export default App;
