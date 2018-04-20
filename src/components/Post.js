import React, { Component } from "react";
import Markdown from "react-markdown";
// import PropTypes from "prop-types";

const renderers = {
  blockquote: ({ children }) => {
    console.info("blockquote children = ");
    console.log(children);
    // return "lol wut";
    return (
      <blockquote className="blockquote">
        {/* {children} */}
        <p className="mb-0">{children[0].props.children[0]}</p>
        <footer className="blockquote-footer">Microconf 2018</footer>
      </blockquote>
    );
  }
};

export class Post extends Component {
  render() {
    const { title, body, author, slug } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>by {author.name}</h2>
        <Markdown source={body} renderers={renderers} />
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Post.propTypes = {};

export default Post;
