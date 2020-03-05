import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import store from "./redux/store";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from './pages/PokemonDetail';
import BerriesList from "./pages/BerriesList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemons" component={PokemonList}/>
          <Route exact path="/pokemon/:name" component={PokemonDetail}/>
          <Route exact path="/berries" component={BerriesList}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
