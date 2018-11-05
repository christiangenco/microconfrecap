import Markdown from "react-markdown";

import PrintedAuthor from "./PrintedAuthor";

// import { Tweet } from "react-twitter-widgets";
import { Link, Image, Blockquote } from "./MarkdownElements";

export default props => {
  const { title, body, speaker, slug, url, updatedAt, facebookStream } = props;

  const renderers = {
    html: props => "",
    link: Link,
    image: Image,
    blockquote: Blockquote,
  };

  const doctitle = `${title} by ${speaker.name}`;

  return (
    <div>
      <div className="">
        <title>{doctitle}</title>
        <h1 className="font-sans" style={{ marginBottom: 10 }}>
          {title}
        </h1>
        <PrintedAuthor speaker={speaker} />
        <hr />
      </div>

      {/* <pre>{JSON.stringify(speaker, null, 2)}</pre> */}
      {/* <Speaker speaker={speaker} /> */}

      <div style={{ height: 10 }} />

      <Markdown source={body} renderers={renderers} escapeHtml={false} />
    </div>
  );
};
