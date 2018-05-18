import Markdown from "react-markdown";
import get from "lodash.get";

// import Speaker from "./Speaker";

import { Tweet } from "react-twitter-widgets";

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
        const url = new URL(href);
        const tweetRegex = /\/\w+\/status\/(\d+)/;
        const res = url.pathname.match(tweetRegex);
        const tweetId = get(res, 1);

        if (nakedLink && url.hostname === "twitter.com") {
          return <Tweet tweetId={tweetId} />;
        }

        if (nakedLink && href.match(/\.mp3$/)) {
          return (
            <audio controls style={{ width: "100%" }}>
              <source src={href} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          );
        }
      } catch (e) {
        console.error(e);
      }

      return <a href={href}>{children}</a>;
    },
    image: ({ alt, src }) => {
      let shareURL = `${url}?img=${encodeURIComponent(src)}`;

      return (
        <div className="card mb-3">
          <img src={src} alt={alt} className="card-img-top" />
          <div className="card-body">
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
          </footer>
        </blockquote>
      );
    },
  };

  return (
    <div>
      <h1>{title}</h1>

      {/* <Speaker speaker={speaker} /> */}

      <div style={{ height: 10 }} />

      <Markdown source={body} renderers={renderers} escapeHtml={false} />
    </div>
  );
};
