import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Menus from "./components/Menus";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Menus />
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon/:name" component={PokemonDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
