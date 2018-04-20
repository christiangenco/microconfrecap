import React, { Component } from "react";
// import PropTypes from "prop-types";

import Post from "../components/Post";

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
    const slug = this.props.match.params.slug;
    return (
      <div className="loading">
        <Post title="Is FOMO holding you back?" body={dummyBody} />
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// PostPage.propTypes = {};
export default PostPage;
