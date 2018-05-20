import posts from "../posts.json";
import Post from "./Post";

export default () => (
  <div>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Lato&subset=latin-ext");
      @import url("https://fonts.googleapis.com/css?family=Montserrat:100,300,700");

      body {
        columns: 2;
        font: 12pt/1.4 Lato;
        widows: 2;
        orphans: 2;
      }

      h1 {
        font: 100 80pt Montserrat;
        column-span: all;
        margin: 0;
        padding: 0;
      }

      h1 em {
        font-weight: 700;
        font-style: normal;
      }

      h2 {
        font: 300 13pt Montserrat;
        column-span: all;
        // text-align: right;
        // margin: -1em 0 0 0;
        // padding: 0;
      }

      .container {
        // width: 8.5in;
      }
      .page {
        page-break-before: always;
        position: relative;
        overflow: hidden;
        width: 8.5in;
        height: 11in;
        font-family: arial, sans serif;
      }

      @page {
        // size: 8.5in 11in;
        size: a4 portrait;
        margin: 20mm;
        // margin: 0.5in;
      }

      img {
        width: 100%;
      }

      img.wide {
        column-span: all;
        margin-top: 2em;
      }
      section {
        margin: 0.7em 0;
      }

      hr {
        page-break-after: always;
        column-span: all;
      }
    `}</style>
    <div className="container">
      <Post {...posts[1]} />
    </div>
  </div>
);
