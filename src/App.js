import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import NotFound from "./components/not-found/not-found.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
