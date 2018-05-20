import posts from "../posts.json";
import PrintedPost from "./PrintedPost";

export default () => (
  <div>
    <style jsx global>{`
      @import url(http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic);
      @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed);
      @import url(http://fonts.googleapis.com/css?family=Lato);

      @prince-pdf {
        prince-pdf-page-layout: two-column-right;
      }

      @page {
        margin: 30mm 20mm 25mm 20mm;
        size: 20cm 25cm;

        @footnotes {
          border-top: thin solid black;
          border-clip: 100px;
          padding: 0;
          margin: 0.6em 0 0 0;
          margin-outside: -60mm;
          padding: 0.3em 0 0 0;
        }
      }

      @page :left {
        margin-left: 80mm;

        @top-left {
          font: 11pt "Lato", serif;
          content: "microconf.gen.co";
          margin-left: -60mm;
          white-space: nowrap;
          vertical-align: bottom;
          padding-bottom: 2em;
        }

        @bottom-left-corner {
          font: 11pt "Lato", serif;
          content: counter(page);
          vertical-align: top;
          padding-top: 2em;
          padding-right: 60mm;
        }
      }

      @page :right {
        margin-right: 80mm;

        @top-right {
          font: 11pt "Lato", serif;
          content: string(title, first-except);
          white-space: nowrap;
          vertical-align: bottom;
          margin-right: -60mm;
          padding-bottom: 2em;
        }

        @bottom-right-corner {
          font: 11pt "Lato", serif;
          content: counter(page);
          vertical-align: top;
          padding-top: 2em;
          padding-left: 60mm;
        }
      }

      html,
      body,
      div,
      h1,
      h2,
      h3,
      p,
      blockquote,
      ul,
      ol,
      li,
      pre {
        margin: 0;
        padding: 0;
      }
      li {
        margin-left: 1.5em;
      }

      title {
        string-set: title content();
      }

      body {
        font: 11pt "PT Serif", serif;
        text-align: justify;
        hyphens: auto;
        counter-reset: figure, table;
      }

      h1,
      h2,
      h3 {
        font: 2.5em "Roboto Condensed", serif;
        margin: 1.2em 0 0.5em;
      }

      h1 {
        margin: 0 0 1em;
      }
      h2 {
        font-size: 1.5em;
      }
      h3 {
        font-size: 1.2em;
      }

      a {
        color: inherit;
      }

      p + p,
      aside + p {
        text-indent: 1.4em;
      }
      p.first {
        text-indent: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      tr {
        text-align: left;
        text-align: start;
      }

      table {
        border-collapse: collapse;
        counter-increment: table;
      }
      table.top {
        float: top;
        margin-outside: -60mm;
        vertical-align: top;
        margin-bottom: 1em;
      }
      td,
      th {
        border: thin solid black;
        padding: 0.2em;
      }
      table:after {
        content: "Table " counter(table);
        font-style: italic;
        padding: 0.5em 0;
        display: block;
      }

      figure {
        width: 100%;
        margin: 0;
        counter-increment: figure;
      }

      figure img {
        width: 100%;
      }

      .mw-headline-anchor {
        display: none;
      }
      .mw-editsection {
        display: none;
      }

      aside {
        background: #fcc;
        padding: 0.6em 1.3em 0.6em 1.3em; /* assuming it will end up on right page */
        font-style: italic;
        font-family: Lato, "Roboto Condensed", sans-serif;
        width: 75mm;
        box-sizing: border-box;
        float: outside;
        margin-outside: -80mm;
        text-align: inside;
        hyphens: manual;
      }

      figure.sidenote {
        width: 55mm;
        float: outside;
        margin-outside: -60mm;
      }

      figcaption {
        font-style: italic;
      }

      figcaption:before {
        content: "Figure " counter(figure) ": ";
        padding-right: 0.5em;
      }

      figure.top {
        float: top;
        margin-bottom: 2em;
      }
      figure.bottom {
        float: bottom;
        margin-top: 1em;
      }

      figure.sidecaption figcaption {
        float: outside;
        width: 55mm;
        margin-outside: -60mm;
      }

      h1 {
        margin-outside: -60mm;
      }

      figure.wide {
        width: auto;
        margin-outside: -60mm;
      }

      a {
        text-decoration: none;
      }

      p.author {
        margin: 2em 0;
        font-variant: small-caps;
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

      @page {
      }
      @media screen {
        body {
          margin: 10% 30% 10% 10%;
        }
        figure {
          width: 100%;
        }
        figure.sidecaption figcaption {
          width: 28%;
          float: right;
          margin-right: -30%;
        }
        aside {
          float: none;
          width: auto;
          margin: 1em 0;
        }
      }

      hr {
        page-break-after: always;
      }
    `}</style>
    <div className="container">
      <PrintedPost {...posts[17]} />
    </div>
  </div>
);
