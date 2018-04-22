import React, { Component } from "react";
import Markdown from "react-markdown";
import get from "lodash.get";
// import PropTypes from "prop-types";

import { Share, Follow, Tweet } from "react-twitter-widgets";

const innerText = el => {
  console.log(el, typeof el);
  if (typeof el === undefined) return "";
  if (typeof el === "string") return el;
  if (el.props)
    return el.props.children.map(child => innerText(child)).join("");
  return el.map(child => innerText(child)).join("");

  // const innerText = children
  //   .map(child => child.props.children.join(" "))
  //   .join(" ");
};

export class Post extends Component {
  render() {
    const { title, body, speaker, slug, url } = this.props;

    const renderers = {
      link: ({ href, children }) => {
        const url = new URL(href);
        const tweetRegex = /\/\w+\/status\/(\d+)/;
        const res = url.pathname.match(tweetRegex);
        const tweetId = get(res, "1");

        if (url.hostname === "twitter.com" && tweetId) {
          return <Tweet tweetId={tweetId} />;
        }

        return <a href={href}>{children}</a>;
      },
      blockquote: ({ children }) => {
        return (
          <blockquote className="blockquote">
            {children}
            <footer className="blockquote-footer">
              {speaker.name}, Microconf 2018{" "}
              <div style={{ float: "right" }}>
                <Share
                  url={url || "https://microconf.gen.co"}
                  options={{
                    text: innerText(children),
                    hashtags: "microconf",
                    via: "cgenco",
                    related: "microconf",
                  }}
                />
              </div>
            </footer>
          </blockquote>
        );
      },
    };

    return (
      <div>
        <h1>{title}</h1>
        <h2>
          by {speaker.name}{" "}
          {speaker.twitter && (
            <div style={{ float: "right" }}>
              <Follow username={speaker.twitter} options={{ size: "large" }} />
            </div>
          )}
        </h2>
        <Markdown source={body} renderers={renderers} />
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Post.propTypes = {};

export default Post;
