import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect, withRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

import AdminWell from "./components/AdminWell";
import Bio from "./components/Bio";
import CTA from "./components/CTA";

import Auth from "./components/Auth";

import get from "lodash.get";

class App extends Component {
  state = {
    user: null,
    posts: {},
    loading: true,
  };

  componentDidMount() {
    this.props.db
      .collection("posts")
      // .where("isPublic", "==", true)
      // .select("speaker")
      .orderBy("date")
      .onSnapshot(snap => {
        const posts = {};
        snap.forEach(doc => {
          // console.log(doc.data());
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
        speaker: {
          name: "Speaker name",
        },
        body: "body",
        public: false,
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
    const { firebase, location, db } = this.props;
    const { user, posts } = this.state;
    const isAdmin = false && user && user.email === "christian.genco@gmail.com";

    const housekeeping = get(posts, "_notes.body");
    const showHousekeeping = get(posts, "_notes.settings.showHousekeeping");

    return (
      <div className="container-fluid" style={{ marginTop: "10px" }}>
        <div className="row">
          <div
            className="col-sm-12"
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <Auth
              firebase={firebase}
              onAuthStateChanged={user => this.setState({ user })}
            />
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-lg-6 col-md-8">
            {false && <pre>{JSON.stringify(this.state.things, null, 2)}</pre>}
            <Link to="/" style={{ color: "black" }}>
              <h1>
                <span
                  className={
                    location.pathname === "/" ? "" : "small text-muted"
                  }
                >
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

            <Route path="/book" render={() => <Redirect to="/" />} />

            {showHousekeeping && (
              <Route
                exact
                path="/"
                component={props => (
                  <AdminWell
                    {...props}
                    isAdmin={isAdmin}
                    body={housekeeping}
                    onChange={housekeeping => {
                      this.props.db
                        .collection("things")
                        .doc("housekeeping")
                        .set(housekeeping, { merge: true })
                        .then(() => {
                          console.log("Document successfully written!");
                        })
                        .catch(error => {
                          console.error("Error writing document: ", error);
                        });
                    }}
                  />
                )}
              />
            )}
            <Route
              exact
              path="/"
              render={props => (
                <HomePage {...props} posts={posts} isAdmin={isAdmin} />
              )}
            />
            <Route
              path="/:slug"
              render={({ match, location }) => {
                const slug = match.params.slug;
                const url = "https://microconf.gen.co" + location.pathname;
                const post = Object.values(posts).find(p => p.slug === slug);
                return (
                  <PostPage
                    post={post}
                    slug={slug}
                    url={url}
                    isAdmin={isAdmin}
                  />
                );
              }}
            />

            <hr />

            <CTA />
            <div style={{ width: "100%", height: 20 }} />
            <Bio />
            <div style={{ width: "100%", height: 20 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
