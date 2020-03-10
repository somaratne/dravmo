import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import NotFound from "./components/not-found/not-found.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import NavBar from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckOut from "./components/checkout/checkout.component";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user-reducer/user-action";
import { selectCurrentUser } from "./redux/user-reducer/user-reselect";
import "./App.css";

class App extends React.Component {
  unSubscribeAuth = () => {
    return null;
  };

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        await userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/checkout" component={CheckOut} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={HomePage} />
          {currentUser ? (
            <Redirect from="/signin" to="/" />
          ) : (
            <Route path="/signin" component={SignInAndSignUp} />
          )}
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
