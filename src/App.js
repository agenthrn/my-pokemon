import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Menus from "./components/Menus";
import PokemonDetail from "./pages/PokemonDetail";
import AppState from "./context/AppState";
import MyPokemonList from "./pages/MyPokemonList";

function App() {
  return (
    <AppState>
      <div className="App">
        <Router>
          <Menus />
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:name" component={PokemonDetail} />
            <Route exact path="/my-pokemon" component={MyPokemonList} />
          </Switch>
        </Router>
      </div>
    </AppState>
  );
}

export default App;
