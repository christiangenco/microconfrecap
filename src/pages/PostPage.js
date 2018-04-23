import React, { Component } from "react";
// import PropTypes from "prop-types";
import { FirestoreContext } from "../contexts";

import Post from "../components/Post";
// import EditPost from "../components/EditPost";

const dummyBody = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nullam ut sapien dictum, convallis orci eget, tincidunt lacus. Vivamus euismod est ex, at pulvinar justo lacinia sed.

Donec id tempor orci:

* Pellentesque tincidunt
* convallis semper
* Vestibulum accumsan faucibus
* metus

Bibendum imperdiet. Fusce quis orci convallis, vehicula ligula quis, imperdiet nulla. Donec interdum lacinia consectetur. Suspendisse blandit nec sapien sit amet ultrices. Etiam magna nisi, iaculis ac accumsan nec, hendrerit ut metus. Fusce erat odio, egestas vel faucibus sed, commodo eget turpis.
`;

export class PostPage extends Component {
  state = { body: "" };

  shouldComponentUpdate(nextProps, nextState) {
    // console.log({ nextProps, nextState });
    // return true;
    // return nextState.body !== this.state.body;
    console.log("should componentupdate?");
    return true;
  }

  componentDidMount() {
    console.log("PostPage mounted!");
    const { slug, db } = this.props;
    this.unsubscribe = db
      .collection("bodies")
      .doc(slug)
      .onSnapshot(snap => {
        const data = snap.data();
        this.setState({ body: data ? data.body : "can't find this post :(" });
      });
  }

  componentWillMount() {
    console.log("PostPage mounting...");
  }
  componentWillUnmount() {
    console.log("PostPage unmounting...");
    this.unsubscribe();
  }

  render() {
    const { post, url, isAdmin } = this.props;
    const { body } = this.state;

    console.log("PostPage rendering");
    console.log(post);

    if (post)
      return (
        <Post
          title={post.title}
          body={body}
          speaker={post.speaker}
          updatedAt={post.updatedAt}
          url={url}
        />
      );

    return (
      <div className="loading">
        <Post
          title="How are you even reading this"
          body={dummyBody}
          speaker={{ name: "Christian Genco" }}
        />
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// PostPage.propTypes = {};
// export default PostPage;

export default props => (
  <FirestoreContext.Consumer>
    {db => <PostPage {...props} db={db} />}
  </FirestoreContext.Consumer>
);
