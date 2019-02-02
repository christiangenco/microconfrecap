import URL from "url";
import get from "lodash.get";

const createElement = React.createElement;

const proxify = url => `http://localhost:4000/?url=${encodeURIComponent(url)}`;

const tweetImg = tweetId => `http://localhost:4001/${tweetId}.png`;

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

export const Blockquote = ({ children }) => {
  let text = innerText(children);
  // if (speaker.twitter) text += ` --@${speaker.twitter}`;
  // else if (speaker.name) text += ` --${speaker.name}`;

  return (
    <aside
      className="italic leading-tight font-sans w-two-thirds -mr-32 ml-6 mb-6 -mr-32 float-right clearfix pr-2 text-right text-lg"
      style={{ borderRight: "5px solid #eee", breakInside: "avoid" }}
    >
      {text}
    </aside>
  );
};

export const Break = () => (
  <div className="clearfix" style={{ breakBefore: "page" }} />
);

export const Heading = ({ level, children }) => {
  // if (level === 2)
  //   return (
  //     <h2
  //       className="font-sans text-left mt-0 -mb-1"
  //       style={{ breakInside: "avoid" }}
  //     >
  //       {children}
  //     </h2>
  //   );

  return createElement(
    `h${level}`,
    {
      className: `font-sans text-left mt-0 ${level === 2 ? "mb-0" : ""}`,
      style: { breakInside: "avoid" },
    },
    children
  );
};

export const Image = ({ alt, src }) => {
  let caption = alt;
  let className = "w-two-thirds -mr-32 ml-6 mb-6 -mr-32 float-right clearfix";

  if (typeof alt === "string") {
    const { hashtags, stripped } = extractHashtags(alt);
    caption = stripped;

    if (hashtags.includes("small")) {
      className = "w-third -mr-32 ml-6 mb-6 -mr-32 float-right clearfix";
    } else if (hashtags.includes("medium")) {
      className = "w-two-thirds -mr-32 ml-6 mb-6 -mr-32 float-right clearfix";
    } else if (hashtags.includes("large")) {
      return (
        <figure className={"-mr-32 mb-6"} style={{ breakInside: "avoid" }}>
          <figcaption className="leading-none italic text-sm w-quarter float-right text-right">
            {caption}
          </figcaption>
          <img src={proxify(src)} className="w-three-quarters" />
        </figure>
      );
    }
  }

  return (
    <figure className={className} style={{ breakInside: "avoid" }}>
      <img src={proxify(src)} className="w-full" />
      <figcaption className="leading-none italic text-sm">{caption}</figcaption>
    </figure>
  );
};

export const Link = attrs => {
  const { href, children } = attrs;

  const nakedLink = children[0].props.value === href;

  try {
    const url = URL.parse(href);

    const tweetRegex = /\/\w+\/status\/(\d+)/;
    const res = url.pathname.match(tweetRegex);
    const tweetId = get(res, 1);

    if (url.hostname === "twitter.com") console.log({ children });

    if (nakedLink && url.hostname === "twitter.com") {
      // https://publish.twitter.com/oembed?url=https://twitter.com/jack/status/20
      // return <Tweet tweetId={tweetId} />;
      return Image({
        alt: (
          <a
            href={href}
            className="no-underline text-xs"
            style={{ color: "#444" }}
          >
            {href}
          </a>
        ),
        src: tweetImg(tweetId),
      });
    }
  } catch (e) {
    console.error(e);
  }

  const displayHref = href.replace("mailto:", "");

  return (
    <span>
      <a href={href}>{children}</a>
      <span className="foot">{displayHref}</span>
    </span>
  );
};

export const List = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export const ListItem = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export const Paragraph = ({ children }) => {
  return <p className="mt-0 mb-4">{children}</p>;

  // return <pre>{JSON.stringify(props, null, 2)}</pre>;
};
