import posts from "../posts.json";
import PrintedPost from "../components/PrintedPost";
import TailwindPrint from "../components/TailwindPrint";

export default () => (
  <div>
    <style jsx global>{`
      body {
        counter-reset: figure, table;
      }

      h1 {
        break-before: page;
      }

      title {
        string-set: title content();
      }

      @page {
        margin: 15mm;
        margin-top: 15mm;

        @top {
          font-family: "Istok Web", sans-serif;
          content: string(title, first-except);
          color: #666;
        }

        @bottom-center {
          font-family: "Istok Web", sans-serif;
          content: counter(page);
          color: #666;
        }
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
