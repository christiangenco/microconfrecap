import React, { Component } from "react";
import "./App.css";
import { Route, Link, withRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

import Auth from "./components/Auth";

class App extends Component {
  state = {
    user: null
  };

  render() {
    const { firebase, location } = this.props;
    const { user } = this.state;

    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Link to="/" style={{ color: "black" }}>
              <h1>
                <span className={location.pathname === "/" ? "" : "small"}>
                  <img
                    src="/logo.png"
                    alt=""
                    style={{ height: "1em", marginRight: 10 }}
                  />
                  Microconf Recap 2018
                </span>
              </h1>
            </Link>

            <Route exact path="/" component={HomePage} />
            <Route path="/:slug" component={PostPage} />

            <Auth
              firebase={firebase}
              onAuthStateChanged={user => this.setState({ user })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
