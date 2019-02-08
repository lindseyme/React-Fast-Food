import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Fast Food Fast</h1>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={Login} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
