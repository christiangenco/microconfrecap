import React, { Component } from "react";
// import PropTypes from "prop-types";

import Post from "../components/Post";

export class PostPage extends Component {
  render() {
    const slug = this.props.match.params.slug;
    return (
      <div>
        <Post
          title="Is FOMO holding you back?"
          body="FOMO is **not** holding you back"
        />
      </div>
    );
  }
} // https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// PostPage.propTypes = {};
export default PostPage;
