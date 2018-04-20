import React, { Component } from "react";
// import PropTypes from "prop-types";

import Post from "../components/Post";
import EditPost from "../components/EditPost";

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
  render() {
    const { posts, match, location } = this.props;
    const slug = match.params.slug;
    const qs = new URLSearchParams(location.search);
    const edit = qs.get("edit");

    const post = Object.values(posts).find(p => p.slug === slug);

    if (post) {
      if (edit) {
        return <EditPost post={post} />;
      } else {
        return (
          <Post title={post.title} body={post.body} author={post.author} />
        );
      }
    } else {
      return (
        <div className="loading">
          <Post
            title="How are you even reading this"
            body={dummyBody}
            author={{ name: "Christian Genco" }}
          />
        </div>
      );
    }
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// PostPage.propTypes = {};
export default PostPage;
