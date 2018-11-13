import { createElement } from "react";
import get from "lodash.get";
import { Share, Follow, Tweet } from "react-twitter-widgets";
// import { URL } from "url";
// const URL = require("url").URL;

// let URL;
if (typeof global.URL !== "function") {
  global.URL = require("url").URL;
}

const extractHashtags = str => {
  if (!str || typeof str !== "string")
    return { stripped: str || "", hashtags: [] };

  let hashtags = str.match(/\#(\w+)/g) || [];
  let stripped = str;
  hashtags.forEach(hashtag => (stripped = stripped.replace(hashtag, "")));

  hashtags = hashtags.map(hashtag => hashtag.replace("#", ""));
  return { stripped, hashtags };
};

const innerText = el => {
  if (typeof el === undefined) return "";
  if (typeof el === "string") return el;
  if (typeof el.map === "function") return el.map(innerText).join("");
  if (el.props && el.props.children)
    return [...el.props.children].map(child => innerText(child)).join("");
  return "Error rendering innerText";
};

export const Blockquote = ({ speaker, url }) => ({ children }) => {
  let text = innerText(children);
  if (speaker.twitter) text += ` @${speaker.twitter}`;
  else if (speaker.name) text += ` -${speaker.name}`;

  return (
    <aside className="w-2/3 ml-4 mb-6 md:-mr-16 lg:-mr-32 pr-4 italic leading-tight font-sans  float-right clearfix text-right text-lg border-solid border-grey-light border-r-8">
      {children}
      <div className="text-grey">
        {speaker.name}
        <div className="mt-2">
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
      </div>
    </aside>
  );

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
};

export const Break = () => <div className="clearfix" />;

export const Heading = props => {
  return createElement(
    `h${props.level}`,
    {
      className:
        "font-sans text-left " + (props.level === 1 ? "mt-12" : "mt-3"),
    },
    props.children
  );
};

export const Image = ({ speaker, url }) => ({ alt, src }) => {
  const shareButton = (
    <Share
      url={`${url}?img=${encodeURIComponent(src)}`}
      options={{
        text: `${alt} ${
          speaker && speaker.twitter ? "@" + speaker.twitter : ""
        }`,
        hashtags: "microconf",
        via: "cgenco",
        related: "microconf",
      }}
    />
  );

  // w-2/3 ml-4 mb-6 md:-mr-16 lg:-mr-32
  let caption = alt;
  let figureClassName = "rounded border ";
  let captionClassName = "";

  const { hashtags, stripped } = extractHashtags(alt);
  caption = stripped;

  if (hashtags.includes("small")) {
    figureClassName +=
      "w-1/2 md:w-1/3 md:-mr-16 lg:-mr-32 ml-6 mb-6 float-right clearfix";
  } else if (hashtags.includes("large")) {
    figureClassName += "w-full md:-mr-16 lg:-mr-32";
  } else {
    // medium
    figureClassName +=
      "w-full md:w-3/4 md:-mr-16 lg:-mr-32 md:ml-6 mb-6 float-right clearfix";
  }

  return (
    <figure className={figureClassName}>
      <img src={src} className="w-full rounded-t" />
      <figcaption className="leading-none text-sm p-4">
        <div className="float-right">{shareButton}</div>
        {caption}
      </figcaption>
    </figure>
  );
};

export const Link = ({ href, children }) => {
  const nakedLink = children[0] === href;

  try {
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
  } catch (e) {
    console.error(e);
    return <span className="text-white bg-red">error rendering link</span>;
  }

  return (
    <a href={href} className="no-underline hover:underline">
      {children}
    </a>
  );
};
