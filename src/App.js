import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import NotFound from "./components/not-found/not-found.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import NavBar from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unSubscribeAuth = () => {
    return null;
  };

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <NavBar currentUser={currentUser} />
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
}

export default App;
