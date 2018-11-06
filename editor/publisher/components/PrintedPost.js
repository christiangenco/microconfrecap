import Markdown from "react-markdown";

import PrintedAuthor from "./PrintedAuthor";

// import { Tweet } from "react-twitter-widgets";
import {
  Blockquote,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Paragraph,
} from "./MarkdownElements";

export default props => {
  const { title, body, speaker, slug, url, updatedAt, facebookStream } = props;

  const renderers = {
    blockquote: Blockquote,
    heading: Heading,
    html: props => "",
    image: Image,
    link: Link,
    // list: List,
    // listItem: ListItem,
    // paragraph: Paragraph,
    // break
    // code
    // definition: props => console.log(props),
    // delete
    // emphasis
    // imageReference
    // inlineCode
    // linkReference
    // parsedHtml
    // root
    // strong
    // table
    // tableBody
    // tableCell
    // tableHead
    // tableRow
    // text
    // thematicBreak
    // virtualHtml
  };

  const doctitle = `${title} by ${speaker.name}`;

  return (
    <div className="font-serif leading-normal pr-32">
      <title>{doctitle}</title>
      <h1 className="font-sans text-left text-5xl mb-32 mt-32 -mr-32">
        {title}
      </h1>
      {/* <hr className="-mr-32 mb-8" /> */}
      <PrintedAuthor speaker={speaker} />

      {/* <pre>{JSON.stringify(speaker, null, 2)}</pre> */}
      {/* <Speaker speaker={speaker} /> */}

      <div style={{ height: 10 }} />

      <Markdown source={body} renderers={renderers} escapeHtml={false} />
    </div>
  );
};
