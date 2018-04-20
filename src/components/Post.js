import React, { Component } from "react";
import Markdown from "react-markdown";
// import PropTypes from "prop-types";

export class Post extends Component {
  render() {
    const { title, body, author, slug } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>by {author}</h2>
        <Markdown source={body} />
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Post.propTypes = {};

export default Post;
