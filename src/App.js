import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PokemonList from "./pages/PokemonList";
import Menus from "./components/Menus";
// import PokemonDetail from "./pages/PokemonDetail";
import AppState from "./context/AppState";
// import MyPokemonList from "./pages/MyPokemonList";

const PokemonDetail = lazy(() => import("./pages/PokemonDetail"));
const PokemonList = lazy(() => import("./pages/PokemonList"));
const MyPokemonList = lazy(() => import("./pages/MyPokemonList"));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <AppState>
      <div className="App">
        <Router>
          <Menus />
          <Switch>
            <Suspense fallback={renderLoader()}>
              <Route exact path="/" component={PokemonList} />
              <Route exact path="/pokemon/:name" component={PokemonDetail} />
              <Route exact path="/my-pokemon" component={MyPokemonList} />
            </Suspense>
          </Switch>
        </Router>
      </div>
    </AppState>
  );
}

export default App;
