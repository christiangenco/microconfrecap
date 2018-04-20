import React, { Component } from "react";
import "./App.css";
import { Route, Link, withRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

import Auth from "./components/Auth";

class App extends Component {
  state = {
    user: null,
    posts: {},
    loading: true
  };

  componentDidMount() {
    this.props.db
      .collection("posts")
      // .where("public", "==", true)
      .onSnapshot(querySnapshot => {
        const posts = {};
        querySnapshot.forEach(doc => {
          posts[doc.id] = { ...doc.data(), id: doc.id };
        });
        this.setState({ posts });
      });
  }

  addPost = () => {
    const slug = prompt("slug");
    this.props.db
      .collection("posts")
      .add({
        title: "Title",
        slug,
        author: {
          name: "Author name"
        },
        body: "body",
        public: false
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
        console.log(`redirect to /${slug}?edit=true`);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { firebase, location } = this.props;
    const { user, posts } = this.state;
    const isAdmin = user && user.email === "christian.genco@gmail.com";

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

            <Route
              exact
              path="/"
              component={props => (
                <HomePage {...props} posts={posts} isAdmin={isAdmin} />
              )}
            />
            <Route
              path="/:slug"
              component={props => (
                <PostPage {...props} posts={posts} isAdmin={isAdmin} />
              )}
            />

            {isAdmin && (
              <button
                className="btn btn-outline-primary"
                onClick={this.addPost}
              >
                add post
              </button>
            )}

            <div style={{ position: "fixed", top: 20, right: 20 }}>
              {!user && (
                <Auth
                  firebase={firebase}
                  onAuthStateChanged={user => this.setState({ user })}
                />
              )}
              {user && (
                <div>
                  {user.displayName}{" "}
                  <button className="btn btn-outline-danger btn-sm">
                    logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
