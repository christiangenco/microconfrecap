import URL from "url";
import get from "lodash.get";

const proxify = url => `http://localhost:4000/?url=${encodeURIComponent(url)}`;

const tweetImg = tweetId => `http://localhost:4001/${tweetId}.png`;

const innerText = el => {
  if (typeof el === undefined) return "";
  if (typeof el === "string") return el;
  if (el.props)
    return el.props.children.map(child => innerText(child)).join("");
  return el.map(child => innerText(child)).join("");
};

export const Link = ({ href, children }) => {
  const nakedLink = children[0] === href;

  try {
    const url = URL.parse(href);

    const tweetRegex = /\/\w+\/status\/(\d+)/;
    const res = url.pathname.match(tweetRegex);
    const tweetId = get(res, 1);

    if (nakedLink && url.hostname === "twitter.com") {
      // https://publish.twitter.com/oembed?url=https://twitter.com/jack/status/20
      // return <Tweet tweetId={tweetId} />;
      return (
        <figure className="sidecaption bottom">
          <img src={tweetImg(tweetId)} alt="" />
          <figcaption>
            <a href={href}>{href}</a>
          </figcaption>
        </figure>
      );
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <span>
      <a href={href}>{children}</a>
      <span className="foot">{href}</span>
    </span>
  );
};

export const Image = ({ alt, src }) => {
  return (
    <figure>
      <img src={proxify(src)} />
      <figcaption>{alt}</figcaption>
    </figure>
  );
};

export const Blockquote = ({ children }) => {
  let text = innerText(children);
  // if (speaker.twitter) text += ` --@${speaker.twitter}`;
  // else if (speaker.name) text += ` --${speaker.name}`;

  return <aside>{text}</aside>;
};
