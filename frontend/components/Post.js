import Markdown from "react-markdown";

import Speaker from "./Speaker";
import { Blockquote, Break, Heading, Image, Link } from "./MarkdownComponents";

export default ({ title, body, speaker, slug, url, updatedAt }) => {
  if (!title || !body) {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "75%",
            position: "relative",
          }}
        >
          <iframe
            src="https://giphy.com/embed/3o7aCTPPm4OHfRLSH6"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </div>
        <h1 className="font-sans">I can't find that page 😩</h1>
        <p>
          Try looking for it <a href="/">on the homepage?</a>
        </p>
      </div>
    );
  }

  // console.log({ url });

  const renderers = {
    blockquote: Blockquote({ speaker, url }),
    thematicBreak: Break,
    heading: Heading,
    // html: props => "",
    image: Image({ speaker, url }),
    link: Link,
  };

  return (
    <div>
      <h1 className="font-sans text-5xl mb-6 leading-tight">{title}</h1>
      <Speaker speaker={speaker} />
      <Markdown source={body} renderers={renderers} escapeHtml={false} />
    </div>
  );
};
