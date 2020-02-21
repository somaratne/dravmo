import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import NotFound from "./components/not-found/not-found.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import NavBar from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/signin" component={SignInAndSignUp} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
