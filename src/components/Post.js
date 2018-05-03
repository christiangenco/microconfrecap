import React, { Component } from "react";
import Markdown from "react-markdown";
import get from "lodash.get";
import differenceInMinutes from "date-fns/difference_in_minutes";
import Typist from "react-typist";

import { Helmet } from "react-helmet";

// import PropTypes from "prop-types";

import Speaker from "./Speaker";

import { Share, Follow, Tweet } from "react-twitter-widgets";
import Measure from "react-measure";

class PureTweet extends React.PureComponent {
  render() {
    const { tweetId } = this.props;

    // oh nooo I'm using global varrrriables
    // someone call the coooode police
    window.tweetHeights || (window.tweetHeights = {});

    const defaultHeight = 300;
    let minHeight = window.tweetHeights[tweetId] || defaultHeight;

    return (
      <Measure
        bounds
        onResize={({ bounds: { height } }) => {
          if (height !== defaultHeight) window.tweetHeights[tweetId] = height;
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} style={{ minHeight }}>
            <Tweet {...this.props} />
          </div>
        )}
      </Measure>
    );
  }
}

const innerText = el => {
  if (typeof el === undefined) return "";
  if (typeof el === "string") return el;
  if (el.props)
    return el.props.children.map(child => innerText(child)).join("");
  return el.map(child => innerText(child)).join("");
};

export class Post extends Component {
  render() {
    const {
      title,
      body,
      speaker,
      slug,
      url,
      updatedAt,
      facebookStream,
    } = this.props;

    const renderers = {
      link: ({ href, children }) => {
        const nakedLink = children[0] === href;

        const url = new URL(href);
        const tweetRegex = /\/\w+\/status\/(\d+)/;
        const res = url.pathname.match(tweetRegex);
        const tweetId = get(res, 1);

        if (nakedLink && url.hostname === "twitter.com") {
          return <PureTweet tweetId={tweetId} />;
        }

        if (nakedLink && href.match(/\.mp3$/)) {
          return (
            <audio controls style={{ width: "100%" }}>
              <source src={href} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          );
        }

        return <a href={href}>{children}</a>;
      },
      image: ({ alt, src }) => {
        let shareURL = `${url}?img=${encodeURIComponent(src)}`;
        // const match = src.match(/https:\/\/i\.imgur.com\/(\w+)/);
        // if (match[1]) shareURL = `https://imgur.com/${match[1]}`;

        return (
          <div className="card mb-3">
            <img src={src} alt={alt} className="card-img-top" />
            <div className="card-body">
              <div class="float-right">
                <Share
                  url={shareURL}
                  options={{
                    text: `${alt} ${
                      speaker && speaker.twitter ? "@" + speaker.twitter : ""
                    }`,
                    hashtags: "microconf",
                    via: "cgenco",
                    related: "microconf",
                  }}
                />
              </div>
              <p className="card-text">{alt}</p>
            </div>
          </div>
        );
      },
      blockquote: ({ children }) => {
        let text = innerText(children);
        if (speaker.twitter) text += ` --@${speaker.twitter}`;
        else if (speaker.name) text += ` --${speaker.name}`;

        return (
          <blockquote className="blockquote">
            {children}
            <footer className="blockquote-footer">
              {speaker.name}, Microconf 2018{" "}
              <div style={{ float: "right" }}>
                <Share
                  url={url || "https://microconf.gen.co"}
                  options={{
                    text,
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
        <Helmet>
          <title>{title} | Microconf Recap 2018</title>
        </Helmet>
        <h1>{title}</h1>

        <Speaker speaker={speaker} />

        {facebookStream && (
          <iframe
            src={facebookStream}
            width="560"
            height="432"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="true"
          />
        )}

        <div style={{ height: 10 }} />

        <Markdown source={body} renderers={renderers} escapeHtml={false} />

        {differenceInMinutes(new Date(), updatedAt) < 5 && (
          <Typist>
            <div className="loading">
              Lorem ipsum dolor sit amet,
              <Typist.Backspace count={8} delay={200} />consectetur adipiscing
              elit. <Typist.Backspace count={8} delay={200} />Nullam ut sapien
              dictum, convallis orci eget, tincidunt lacus.
              <Typist.Backspace count={8} delay={200} />
            </div>
          </Typist>
        )}
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Post.propTypes = {};

export default Post;
