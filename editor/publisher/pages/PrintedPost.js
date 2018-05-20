import Markdown from "react-markdown";
import get from "lodash.get";
import URL from "url";

// import Speaker from "./Speaker";

import { Tweet } from "react-twitter-widgets";

const proxify = url => `http://localhost:3001/?url=${encodeURIComponent(url)}`;

const tweetImg = tweetId => `http://localhost:3002/${tweetId}.png`;

const innerText = el => {
  if (typeof el === undefined) return "";
  if (typeof el === "string") return el;
  if (el.props)
    return el.props.children.map(child => innerText(child)).join("");
  return el.map(child => innerText(child)).join("");
};

export default props => {
  const { title, body, speaker, slug, url, updatedAt, facebookStream } = props;

  const renderers = {
    // don't render HTML
    html: props => {
      return "";
    },
    link: ({ href, children }) => {
      const nakedLink = children[0] === href;

      try {
        const url = URL.parse(href);

        const tweetRegex = /\/\w+\/status\/(\d+)/;
        const res = url.pathname.match(tweetRegex);
        const tweetId = get(res, 1);

        if (nakedLink && url.hostname === "twitter.com") {
          // https://publish.twitter.com/oembed?url=https://twitter.com/jack/status/20
          // return <Tweet tweetId={tweetId} />;
          return <img src={tweetImg(tweetId)} alt="" />;
        }
      } catch (e) {
        console.error(e);
      }

      return <a href={href}>{children}</a>;
    },
    image: ({ alt, src }) => {
      return (
        <figure className="sidecaption bottom">
          <figcaption>{alt}</figcaption>
          <img src={proxify(src)} />
        </figure>
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
          </footer>
        </blockquote>
      );
    },
  };

  return (
    <div>
      <div className="page">
        <h1>{title}</h1>
      </div>

      {/* <pre>{JSON.stringify(speaker, null, 2)}</pre> */}
      {/* <Speaker speaker={speaker} /> */}

      <div style={{ height: 10 }} />

      <Markdown source={body} renderers={renderers} escapeHtml={false} />
    </div>
  );
};
