import { createElement } from "react";
import get from "lodash.get";
import { Share, Follow, Tweet } from "react-twitter-widgets";

const extractHashtags = str => {
  if (!str) return { stripped: "", hashtags: [] };

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

  // className="italic leading-tight font-sans w-two-thirds -mr-32 ml-6 mb-6 -mr-32 float-right clearfix pr-2 text-right text-lg"
  // style={{ borderRight: "5px solid #eee", breakInside: "avoid" }}

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
  let shareURL = `${url}?img=${encodeURIComponent(src)}`;
  // const match = src.match(/https:\/\/i\.imgur.com\/(\w+)/);
  // if (match[1]) shareURL = `https://imgur.com/${match[1]}`;

  return (
    <div className="rounded border">
      <img src={src} alt={alt} className="rounded-t" />
      <div className="p-4">
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
};

// export const Image = ({ alt, src }) => {
//   let caption = alt;
//   let className = "w-two-thirds -mr-32 ml-6 mb-6 -mr-32 float-right clearfix";
//
//   if (typeof alt === "string") {
//     const { hashtags, stripped } = extractHashtags(alt);
//     caption = stripped;
//
//     if (hashtags.includes("small")) {
//       className = "w-third -mr-32 ml-6 mb-6 -mr-32 float-right clearfix";
//     } else if (hashtags.includes("medium")) {
//       className = "w-two-thirds -mr-32 ml-6 mb-6 -mr-32 float-right clearfix";
//     } else if (hashtags.includes("large")) {
//       return (
//         <figure className={"-mr-32 mb-6"} style={{ breakInside: "avoid" }}>
//           <figcaption className="leading-none italic text-sm w-quarter float-right text-right">
//             {caption}
//           </figcaption>
//           <img src={proxify(src)} className="w-three-quarters" />
//         </figure>
//       );
//     }
//   }
//
//   return (
//     <figure className={className} style={{ breakInside: "avoid" }}>
//       <img src={proxify(src)} className="w-full" />
//       <figcaption className="leading-none italic text-sm">{caption}</figcaption>
//     </figure>
//   );
// };

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
