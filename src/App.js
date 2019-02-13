import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Signup";
import Menu from "./components/Menu";
import "./App.css";

class App extends Component {
  render() {
    const isLoggedIn = localStorage.getItem("token") != null;
    return (
      <div>
        <ToastContainer />
        <BrowserRouter>
          <div>
            <Switch>
              <Route
                path="/"
                render={props =>
                  isLoggedIn ? <Menu {...props} /> : <Login {...props} />
                }
                exact
              />
              <Route path="/signup" component={Register} exact />
              <Route
                path="/menu"
                render={props =>
                  isLoggedIn ? <Menu {...props} /> : <Redirect to="/" />
                }
                exact
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
