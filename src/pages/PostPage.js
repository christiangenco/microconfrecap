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
    const { posts, match, location, history, isAdmin } = this.props;
    const slug = match.params.slug;
    const qs = new URLSearchParams(location.search);
    const isEditing = !!qs.get("edit");

    const post = Object.values(posts).find(p => p.slug === slug);

    let body;

    if (post) {
      if (isEditing) {
        body = <EditPost post={post} db={this.props.db} />;
      } else {
        body = (
          <Post
            title={post.title}
            body={post.body}
            speaker={post.speaker}
            updatedAt={post.updatedAt}
            url={"https://microconf.gen.co" + location.pathname}
          />
        );
      }
    } else {
      body = (
        <div className="loading">
          <Post
            title="How are you even reading this"
            body={dummyBody}
            speaker={{ name: "Christian Genco" }}
          />
        </div>
      );
    }

    return (
      <React.Fragment>
        {isAdmin && (
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => {
                history.push(`${slug}?edit=yeah`);
              }}
              disabled={isEditing}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => {
                history.push(`${slug}`);
              }}
              disabled={!isEditing}
            >
              View
            </button>
          </div>
        )}
        {body}
      </React.Fragment>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// PostPage.propTypes = {};
export default PostPage;
