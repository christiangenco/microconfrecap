import posts from "../posts.json";
import PrintedPost from "../components/PrintedPost";
import TailwindPrint from "../components/TailwindPrint";

export default () => (
  <div>
    <style jsx global>{`
      body {
        text-align: justify;
        hyphens: auto;
        counter-reset: figure, table;
      }

      h1 {
        break-before: page;
      }

      /* footnotes */
      ::footnote-call {
        content: counter(footnote);
        font-size: 83%;
        vertical-align: super;
        line-height: none;
      }

      ::footnote-marker {
        content: counter(footnote);
        list-style-position: inside;
        font-size: 83%;
        vertical-align: super;
        margin: 0;
        padding: 0 0.3em 0 0;
      }

      .foot {
        float: footnote;
        font-size: 90%;
        font-variant: normal;
        footnote-style-position: inside;
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
    `}</style>
    <TailwindPrint />

    <div>
      <PrintedPost {...posts[1]} />
    </div>
  </div>
);
