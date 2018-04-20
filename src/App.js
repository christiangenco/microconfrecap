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
      // .where("isPublic", "==", true)
      // .select("author")
      .onSnapshot(snap => {
        const posts = {};
        snap.forEach(doc => {
          posts[doc.id] = { ...doc.data(), id: doc.id };
        });
        this.setState({ posts });
      });

    this.props.db.collection("things").onSnapshot(snap => {
      const things = {};
      snap.forEach(doc => {
        things[doc.id] = { ...doc.data(), id: doc.id };
      });
      this.setState({ things });
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
        this.props.history.push(`/${slug}?edit=true`);
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
      <div className="container-fluid" style={{ marginTop: "10px" }}>
        <div className="row">
          <div
            className="col-sm-12"
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
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

        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <pre>{JSON.stringify(this.state.things, null, 2)}</pre>
            <Link to="/" style={{ color: "black" }}>
              <h1>
                <span className={location.pathname === "/" ? "" : "small"}>
                  {location.pathname !== "/" && "🔙"}
                  {location.pathname === "/" && (
                    <img
                      src="/logo.png"
                      alt=""
                      style={{ height: "1em", marginRight: 10 }}
                    />
                  )}
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
                <PostPage
                  {...props}
                  posts={posts}
                  isAdmin={isAdmin}
                  db={this.props.db}
                />
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
