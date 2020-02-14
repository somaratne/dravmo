import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
