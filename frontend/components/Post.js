import Markdown from "react-markdown";

import Speaker from "./Speaker";
import { Blockquote, Break, Heading, Image, Link } from "./MarkdownComponents";

export default ({ title, body, speaker, slug, url, updatedAt }) => {
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
      <h1 className="font-sans text-5xl">{title}</h1>

      <Speaker speaker={speaker} />

      <Markdown source={body} renderers={renderers} escapeHtml={false} />
    </div>
  );
};
