import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Menus from "./components/Menus";

function App() {
  return (
    <div className="App">
      <Router>
        <Menus />
        <Switch>
          <Route exact path="/" component={PokemonList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
