import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Register from "./components/Signup";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/signup" component={Register} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
