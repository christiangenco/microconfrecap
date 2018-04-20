import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types';

export class HomePage extends Component {
  renderLoadingList = () => {
    return (
      <ul className="loading">
        <li>
          <Link to="/nowhere">This is a fancy title</Link> by George Washington
        </li>
        <li>
          <Link to="/nowhere">I have so much</Link> fun with these
        </li>
        <li>
          <Link to="/nowhere">Like, is </Link> anyone going to figure out how to
          read them?
        </li>
        <li>
          <Link to="/nowhere">I hope so</Link> if you do, I'll give you a prize
        </li>
        <li>
          <Link to="/nowhere">Whisper "my dogs are barking"</Link> to me and
          I'll give you something special ;)
        </li>
      </ul>
    );
  };

  renderPostList = posts => {
    return (
      <ul>
        {Object.values(posts).map(post => (
          <li key={post.id}>
            {!post.isPublic && "🕵️"}
            {post.isEditing && "📡"}
            <Link to={post.slug + (post.isPublic ? "" : "?edit=true")}>
              {post.title}
            </Link>{" "}
            by {post.author.name}{" "}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { posts } = this.props;
    const loading = Object.keys(posts).length === 0;

    const growthPosts = posts;
    const starterPosts = posts;

    return (
      <div>
        <h2>Growth</h2>

        {!loading && this.renderPostList(growthPosts)}
        {loading && this.renderLoadingList()}

        <h2>Starter</h2>

        {!loading && this.renderPostList(starterPosts)}
        {loading && this.renderLoadingList()}

        <hr />

        <h3>Past Microconf Recaps</h3>
        <ul>
          <li>
            <a href="https://kaidavis.com/microconf-2015/">2015 by Kai Davis</a>
          </li>
          <li>
            <a href="https://shai.io/microconf/">2017 by Shai</a>
          </li>
        </ul>
      </div>
    );
  }
} // https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// HomePage.propTypes = {};
export default HomePage;
