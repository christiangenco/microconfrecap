import posts from "../posts.json";
import PrintedPost from "../components/PrintedPost";
import Head from "next/head";

export default () => (
  <div>
    <style jsx global>{`
      @import url(
        http://fonts.googleapis.com/css?family=PT+Serif:400,
        700,
        400italic,
        700italic
      );
      @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed);
      @import url(http://fonts.googleapis.com/css?family=Lato);
      @import url(https://fonts.googleapis.com/css?family=Istok+Web);

      .font-sans {
        font-family: "Istok Web", "Roboto Condensed", system-ui,
          BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu,
          Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      .font-serif {
        font-family: "PT Serif", serif;
      }

      .font-lato {
        font-family: "Lato", serif;
      }

      .font-mono {
        font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New,
          monospace;
      }
    `}</style>
    <Head>
      <link href="/static/style.css" rel="stylesheet" />
    </Head>
    <div>
      <PrintedPost {...posts[1]} />
    </div>
  </div>
);
